/**
 * 公式对象，表达式容器
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' ),
        EXPRESSION_INTERVAL = 10;

    return kity.createClass( 'Formula', {

        base: require( 'fpaper' ),

        constructor: function ( container, config ) {

            this.callBase( container );
            this.expressions = [];

            config = config || {
                fontsize: 20
            };

            this.zoom = ( config.fontsize || 20 ) / 20 ;

        },

        insertExpression: function ( expression, index ) {

            // clear zoom
            this.container.resetTransform();

            for ( var i = this.expressions.length; i > index; i-- ) {

                this.expressions[ i ] = this.expressions[ i-1 ];

            }

            this.expressions[ index ] = expression;

            this.addShape( expression );

            notifyExpression.call( this, expression );
            correctOffset.call( this );

            this.resetZoom();
            this.resize();

        },

        appendExpression: function ( expression ) {

            this.insertExpression( expression, this.expressions.length );

        },

        resize: function () {

            var renderBox = this.container.getRenderBox();

            this.node.setAttribute( "width", renderBox.width );
            this.node.setAttribute( "height", renderBox.height );

        },

        resetZoom: function () {

            var zoomLevel = this.zoom / this.getBaseZoom();

            if ( zoomLevel !== 0 ) {

                this.container.setAnchor( 0, 0 );
                this.container.scale( zoomLevel );

            }

        },

        clear: function () {

            this.callBase();
            this.expressions = [];

        }

    } );

    // 调整表达式之间的偏移
    function correctOffset () {

        var exprOffset = 0;

        kity.Utils.each( this.expressions, function ( expr ) {

            var box = null;

            if ( !expr ) {
                return;
            }

            expr.setTransform( new kity.Matrix( 1, 0, 0, 1, 0, 0 ) );
            box = expr.getRenderBox();
            expr.translate( 0 - box.x, exprOffset );

            exprOffset += box.height + EXPRESSION_INTERVAL;

        } );

        return this;

    }

    // 通知表达式已接入到paper
    function notifyExpression ( expression ) {

        var len = 0;

        if ( !expression ) {
            return;
        }

        len = expression.getChildren().length;

        if ( len > 0 ) {

            for ( var i = 0; i < len; i++ ) {

                notifyExpression( expression.getChild( i ) );

            }

        }

        expression.addedCall && expression.addedCall();

    }

} );