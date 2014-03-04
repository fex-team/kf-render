/**
 * in表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        InOperator = require( "operator/binary-opr/relational/set/in" );

    return kity.createClass( 'InExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new InOperator() );

        }

    } );

} );
