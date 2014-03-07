/**
 * "|"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        MidOperator = require( "operator/binary-opr/relational/logical/mid" );

    return kity.createClass( 'MidExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new MidOperator() );

        }

    } );

} );
