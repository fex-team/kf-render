/**
 * 超集表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SupsetOperator = require( "operator/binary-opr/relational/set/supset" );

    return kity.createClass( 'SupsetExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SupsetOperator() );

        }

    } );

} );
