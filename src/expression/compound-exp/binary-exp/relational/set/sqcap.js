/**
 * "⊓"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SqcapOperator = require( "operator/binary-opr/relational/set/sqcap" );

    return kity.createClass( 'SqcapExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SqcapOperator() );

        }

    } );

} );
