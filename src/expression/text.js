/**
 * Text表达式
 */

define( function ( require ) {

    var Text = require( "char/text" ),
        kity = require( "kity" ),
        FONT_CONF = require( "char/conf" ),
        Expression = require( "expression/expression" ),
        TextExpression = kity.createClass( 'TextExpression', {

            base: require( "expression/expression" ),

            constructor: function ( content, fontFamily ) {

                this.callBase();

                this.fontFamily = fontFamily || FONT_CONF.defaultFont;
                this.setFlag( "Text" );

                this.content = content + '';

                this.textContent = new Text( this.content, this.fontFamily );

                this.setChildren( 0, this.textContent );
                this.setChildren( 1, new kity.Rect( 0, 0, 0, 0 ).fill( "transparent" ) );

            },

            setFamily: function ( fontFamily ) {
                this.textContent.setFamily( fontFamily );
            },

            setFontSize: function ( fontSize ) {
                this.textContent.setFontSize( fontSize );
            },

            addedCall: function () {

                var box = this.textContent.getFixRenderBox();

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