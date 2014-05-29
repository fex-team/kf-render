/**
 * 公式对象，表达式容器
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' ),
        GTYPE = require( "def/gtype" ),
        CONF = require( "conf" ),
        FontManager = require( "font/manager" ),
        FontInstaller = require( "font/installer" ),
        DEFAULT_OPTIONS = {
            fontsize: 50,
            autoresize: true,
            padding: [ 0 ]
        },
        EXPRESSION_INTERVAL = 10,

        ExpressionWrap = kity.createClass( 'ExpressionWrap', {

            constructor: function ( exp, config ) {

                this.wrap = new kity.Group();
                this.bg = new kity.Rect( 0, 0, 0, 0 ).fill( "transparent" );
                this.exp = exp;

                this.config = config;

                this.wrap.setAttr( "data-type", "kf-exp-wrap" );
                this.bg.setAttr( "data-type", "kf-exp-wrap-bg" );

                this.wrap.addShape( this.bg );
                this.wrap.addShape( this.exp );

            },

            getWrapShape: function () {
                return this.wrap;
            },

            getExpression: function () {
                return this.exp;
            },

            getBackground: function () {
                return this.bg;
            },

            resize: function () {

                var padding = this.config.padding,
                    expBox = this.exp.getFixRenderBox();

                if ( padding.length === 1 ) {
                    padding[ 1 ] = padding[ 0 ];
                }

                this.bg.setSize( padding[ 1 ] * 2 + expBox.width, padding[ 0 ] * 2 + expBox.height );
                this.exp.translate( padding[ 1 ], padding[ 0 ] );

            }

        }),

        Formula = kity.createClass( 'Formula', {

            base: require( 'fpaper' ),

            constructor: function ( container, config ) {

                this.callBase( container );
                this.expressions = [];
                this.fontInstaller = new FontInstaller( this );

                this.config = kity.Utils.extend( {}, DEFAULT_OPTIONS, config );

                this.initEnvironment();
                this.initFont();

            },

            getContentContainer: function () {

                return this.container;

            },

            initEnvironment: function () {

                this.zoom = ( this.config.fontsize ) / 50 ;

                if ( "width" in this.config ) {
                    this.setWidth( this.config.width );
                }

                if ( "height" in this.config ) {
                    this.setHeight( this.config.height );
                }

                this.node.setAttribute( "font-size", DEFAULT_OPTIONS.fontsize );

            },

            initFont: function () {

                var fontInstaller = this.fontInstaller;

                kity.Utils.each( FontManager.getFontList(), function ( fontData ) {
                    fontInstaller.mount( fontData );
                } );

            },

            insertExpression: function ( expression, index ) {

                var expWrap = this.wrap( expression );

                // clear zoom
                this.container.clearTransform();

                this.expressions.splice( index, 0, expWrap.getWrapShape() );

                this.addShape( expWrap.getWrapShape() );

                notifyExpression.call( this, expWrap.getExpression() );
                expWrap.resize();
                correctOffset.call( this );

                this.resetZoom();
                this.config.autoresize && this.resize();

            },

            appendExpression: function ( expression ) {

                this.insertExpression( expression, this.expressions.length );

            },

            resize: function () {

                var renderBox = this.container.getFixRenderBox();

                this.node.setAttribute( "width", renderBox.width );
                this.node.setAttribute( "height", renderBox.height );

            },

            resetZoom: function () {

                var zoomLevel = this.zoom / this.getBaseZoom();

                if ( zoomLevel !== 0 ) {

                    this.container.scale( zoomLevel );

                }

            },

            wrap: function ( exp ) {

                return new ExpressionWrap( exp, this.config );

            },

            clear: function () {

                this.callBase();
                this.expressions = [];

            },

            clearExpressions: function () {

                kity.Utils.each( this.expressions, function ( exp, i ) {

                    exp.remove();

                } );

                this.expressions = [];

            }

        } );

    kity.Utils.extend( Formula, {

        registerFont: function ( fontData ) {

            FontManager.registerFont( fontData );

        }

    } );

    // 自运行， 注册配置好的字体
    ( function () {

        kity.Utils.each( CONF.font.list, function ( fontData ) {

            Formula.registerFont( fontData );

        } );

    } )();

    // 调整表达式之间的偏移
    function correctOffset () {

        var exprOffset = 0;

        kity.Utils.each( this.expressions, function ( expr ) {

            var box = null;

            if ( !expr ) {
                return;
            }

            expr.setMatrix( new kity.Matrix( 1, 0, 0, 1, 0, 0 ) );
            box = expr.getFixRenderBox();
            expr.translate( 0 - box.x, exprOffset );

            exprOffset += box.height + EXPRESSION_INTERVAL;

        } );

        return this;

    }

    // 通知表达式已接入到paper
    function notifyExpression ( expression ) {

        var len = 0,
            childGroup = null;

        if ( !expression ) {
            return;
        }

        if ( expression.getType() === GTYPE.EXP ) {

            for ( var i = 0, len = expression.getChildren().length; i < len; i++ ) {

                notifyExpression( expression.getChild( i ) );

            }

        } else if ( expression.getType() === GTYPE.COMPOUND_EXP ) {

            // 操作数处理
            for ( var i = 0, len = expression.getOperands().length; i < len; i++ ) {

                notifyExpression( expression.getOperand( i ) );

            }

            // 处理操作符
            notifyExpression( expression.getOperator() );

        }

        expression.addedCall && expression.addedCall();

    }

    return Formula;

} );