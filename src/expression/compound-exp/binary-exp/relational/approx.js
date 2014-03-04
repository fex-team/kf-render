/**
 * 约等于表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        ApproxOperator = require( "operator/binary-opr/relational/approx" );

    return kity.createClass( 'ApproxExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new ApproxOperator() );

        }

    } );

} );
