/**
 * Text表达式
 */

define( function ( require, exports, module ) {

    var Text = require( "char/text" ),
        kity = require( "kity" ),
        FONT_DEFINE = require( "char/def" ),
        Expression = require( "expression/expression" ),
        TextExpression = kity.createClass( 'TextExpression', {

            base: require( "expression/expression" ),

            constructor: function ( content, fontFamily ) {

                this.callBase();

                this.fontFamily = fontFamily || FONT_DEFINE.KF_AMS_MAIN;
                this.setFlag( "Text" );

                this.content = content + '';

                this.textContent = new Text( this.content, this.fontFamily );

                this.setChildren( 0, this.textContent );
                this.setChildren( 1, new kity.Rect( 0, 0, 0, 0 ).fill( "transparent" ) );

            },

            addedCall: function () {

                var box = this.textContent.getRenderBox();

                this.getChild( 1 ).setSize( box.width, box.height );
                this.updateBoxSize();
                return this;

            }

        } );

    // 注册文本表达式的打包函数
    Expression.registerWrap( 'text', function ( operand ) {

        var operandType = typeof operand;

        if ( operandType === 'number' || operandType === 'string' ) {

            operand = new TextExpression( operand );

        }

        return operand;

    } );

    return TextExpression;

} );