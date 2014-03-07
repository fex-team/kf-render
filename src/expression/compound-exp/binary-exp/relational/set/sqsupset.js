/**
 * "⊐"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SqsupsetOperator = require( "operator/binary-opr/relational/set/sqsupset" );

    return kity.createClass( 'SqsupsetExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SqsupsetOperator() );

        }

    } );

} );
