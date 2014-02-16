/**
 * 空表达式
 * 该表达式主要用途是用于站位
 */

define( function ( require, exports, module ) {

    var kity = require( "kity" ) ,

        Expression = require( "expression/expression" ),

        EmptyExpression = kity.createClass( 'EmptyExpression', {

            base: Expression,

            getBaseWidth: function () {
                return 0;
            },

            getBaseHeight: function () {
                return 0;
            },

            getWidth: function () {
                return 0;
            },

            getHeight: function () {
                return 0;
            }

        } );

    // 注册打包函数
    Expression.registerWrap( function ( operand ) {

        if ( operand === null || operand === undefined ) {
            return new EmptyExpression();
        }

    } );

} );