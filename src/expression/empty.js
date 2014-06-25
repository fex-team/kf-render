/**
 * 空表达式
 * 该表达式主要用途是用于站位
 */

define( function ( require ) {

    var kity = require( "kity" ) ,

        FONT_CONF = require( "sysconf" ).font,

        Expression = require( "expression/expression" ),

        EmptyExpression = kity.createClass( 'EmptyExpression', {

            base: Expression,

            constructor: function () {

                this.callBase();

                this.setFlag( "Empty" );

            },

            getRenderBox: function () {
                return {
                    width: 0,
                    height: FONT_CONF.spaceHeight,
                    x: 0,
                    y: 0
                };
            }

        } );

    EmptyExpression.isEmpty = function ( target ) {
        return target instanceof EmptyExpression;
    };

    // 注册打包函数
    Expression.registerWrap( 'empty', function ( operand ) {

        if ( operand === null || operand === undefined ) {
            return new EmptyExpression();
        }

    } );

    return EmptyExpression;

} );