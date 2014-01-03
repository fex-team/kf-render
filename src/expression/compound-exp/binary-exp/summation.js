/**
 * 求和表达式
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SummationOperator = require( "operator/binary-opr/summation" );

    return kity.createClass( 'SummationExpression', {

        base: require( "expression/compound-exp/binary-exp/up-down" ),

        /**
         * 构造求和表达式
         * @param upOperand 上标
         * @param downOperand 下标
         */
        constructor: function ( upOperand, downOperand ) {

            this.callBase( upOperand, downOperand );

            this.setOperator( new SummationOperator() );

        }

    } );

} );
