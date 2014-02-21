/**
 * "⊒"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SqsupseteqOperator = require( "operator/binary-opr/relational/set/sqsupseteq" );

    return kity.createClass( 'SqsupseteqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SqsupseteqOperator() );

        }

    } );

} );
