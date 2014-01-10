/**
 * Text表达式
 */

define( function ( require, exports, module ) {

    var Text = require( "char/text" ),
        kity = require( "kity" ),
        Expression = require( "expression/expression" ),
        TextExpression = kity.createClass( 'TextExpression', {

            base: require( "expression/expression" ),

            constructor: function ( content ) {

                this.callBase();

                this.content = content + '';

                this.setChildren( 0, new Text( this.content ) );

            }

        } );

    // 注册文本表达式的打包函数
    Expression.registerWrap( function ( operand ) {

        var operandType = typeof operand;

        if ( operandType === 'number' || operandType === 'string' ) {

            operand = new TextExpression( operand );

        }

        return operand;

    } );

    return TextExpression;

} );