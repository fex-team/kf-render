/**
 * 逻辑与（交运算）表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        LogicalConjunctionOperator = require( "operator/binary-opr/logical-conjunction" );

    return kity.createClass( 'LogicalConjunctionExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new LogicalConjunctionOperator() );

        }

    } );

} );
