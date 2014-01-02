/**
 * 加法表达式
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SummationOperator = require( "operator/binary-opr/summation" );

    return kity.createClass( 'SummationExpression', {

        base: require( "expression/compound-exp/binary-exp/up-down" ),

        /**
         * 构造求和表达式
         * @param radicand 被开方数
         * @param exponent 指数
         */
        constructor: function ( topOperand, bottomOperand ) {

            this.callBase( topOperand, bottomOperand );

            this.setOperator( new SummationOperator() );

        }

    } );

} );
