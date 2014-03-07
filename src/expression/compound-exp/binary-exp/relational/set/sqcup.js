/**
 * "⊔"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SqcupOperator = require( "operator/binary-opr/relational/set/sqcup" );

    return kity.createClass( 'SqcupExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SqcupOperator() );

        }

    } );

} );
