/**
 * "⊑"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SqsubseteqOperator = require( "operator/binary-opr/relational/set/sqsubseteq" );

    return kity.createClass( 'SqsubseteqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SqsubseteqOperator() );

        }

    } );

} );
