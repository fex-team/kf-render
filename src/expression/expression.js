/**
 * 基础表达式， 该类是表达式和操作数的高层抽象
 * @abstract
 */

define( function ( require ) {

    var kity = require( "kity"),

        GTYPE = require( "def/gtype" ),

        FONT_CONF = require( "sysconf" ).font,

        // 打包函数列表
        WRAP_FN = [],

        // 注册的打包函数的名称与其在注册器列表中的索引之间的对应关系
        WRAP_FN_INDEX = {},

        Expression = kity.createClass( 'Expression', {

            base: require( "signgroup" ),

            constructor: function () {

                this.callBase();

                this.type = GTYPE.EXP;

                // 表达式的上下偏移
                this._offset = {
                    top: 0,
                    bottom: 0
                };

                this.children = [];

                this.box.fill( "transparent" ).setAttr( "data-type", "kf-editor-exp-box" );
                this.box.setAttr( "data-type", "kf-editor-exp-bg-box" );

                this.expContent = new kity.Group();
                this.expContent.setAttr( "data-type", "kf-editor-exp-content-box" );

                this.addShape( this.expContent );

            },

            getChildren: function () {

                return this.children;

            },

            getChild: function ( index ) {

                return this.children[ index ] || null;

            },

            getTopOffset: function () {
                return this._offset.top;
            },

            getBottomOffset: function () {
                return this._offset.bottom;
            },

            getOffset: function () {
                return this._offset;
            },

            setTopOffset: function ( val ) {
                this._offset.top = val;
            },

            setBottomOffset: function ( val ) {
                this._offset.bottom = val;
            },

            setOffset: function ( top, bottom ) {
                this._offset.top = top;
                this._offset.bottom = bottom;
            },

            setFlag: function ( flag ) {

                this.setAttr( "data-flag", flag || "Expression" );

            },

            setChildren: function ( index, exp ) {

                // 首先清理掉之前的表达式
                if ( this.children[ index ] ) {
                    this.children[ index ].remove();
                }

                this.children[ index ] = exp;
                this.expContent.addShape( exp );

            },

            getBaselineProportion: function () {
                return FONT_CONF.baselinePosition;
            },

            getMeanlineProportion: function () {
                return FONT_CONF.meanlinePosition;
            },

            getBaseline: function ( refer ) {
                // 上偏移3px
                return this.getRenderBox( refer ).height * FONT_CONF.baselinePosition - 3;
            },

            getMeanline: function ( refer ) {
                // 上偏移1px
                return this.getRenderBox( refer ).height * FONT_CONF.meanlinePosition - 1;
            },

            getAscenderline: function () {
                return this.getFixRenderBox().height * FONT_CONF.ascenderPosition;
            },

            getDescenderline: function () {
                return this.getFixRenderBox().height * FONT_CONF.descenderPosition;
            },

            translateElement: function ( x, y ) {

                this.expContent.translate( x, y );

            },

            expand: function ( width, height ) {
                var renderBox = this.getFixRenderBox();
                this.setBoxSize( renderBox.width + width , renderBox.height + height );
            },

            getBaseWidth: function () {

                return this.getWidth();

            },

            getBaseHeight: function () {

                return this.getHeight();

            },

            updateBoxSize: function () {

                var renderBox = this.expContent.getFixRenderBox();
                this.setBoxSize( renderBox.width, renderBox.height );

            },

            getBox: function () {
                return this.box;
            }

        } );

    // 表达式自动打包
    kity.Utils.extend( Expression, {

        registerWrap: function ( name, fn ) {

            WRAP_FN_INDEX[ name ] = WRAP_FN.length;
            WRAP_FN.push( fn );

        },

        revokeWrap: function ( name ) {

            var fn = null;

            if ( name in WRAP_FN_INDEX ) {

                fn = WRAP_FN[ WRAP_FN_INDEX[ name ] ];
                WRAP_FN[ WRAP_FN_INDEX[ name ] ] = null;
                delete WRAP_FN_INDEX[ name ];

            }

            return fn;

        },

        // 打包函数
        wrap: function ( operand ) {

            var result;

            kity.Utils.each( WRAP_FN, function ( fn ) {

                if ( !fn ) {
                    return;
                }

                result = fn( operand );

                if ( result ) {
                    return false;
                }

            } );

            return result;

        }

    } );

    return Expression;

} );