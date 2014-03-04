/**
 * 真子集表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SubseteqOperator = require( "operator/binary-opr/relational/set/subseteq" );

    return kity.createClass( 'SubseteqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SubseteqOperator() );

        }

    } );

} );
