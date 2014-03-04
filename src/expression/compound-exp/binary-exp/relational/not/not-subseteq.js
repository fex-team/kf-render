/**
 * "⊈"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotSubseteqOperator = require( "operator/binary-opr/relational/not/not-subseteq" );

    return kity.createClass( 'NotSubseteqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotSubseteqOperator() );

        }

    } );

} );
