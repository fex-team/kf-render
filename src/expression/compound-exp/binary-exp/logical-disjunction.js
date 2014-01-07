/**
 * 逻辑或表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        LogicalDisjunctionOperator = require( "operator/binary-opr/logical-disjunction" );

    return kity.createClass( 'LogicalDisjunctionExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new LogicalDisjunctionOperator() );

        }

    } );

} );
