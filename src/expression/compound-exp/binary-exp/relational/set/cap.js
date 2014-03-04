/**
 * "⋂"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        CapOperator = require( "operator/binary-opr/relational/set/cap" );

    return kity.createClass( 'CapExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new CapOperator() );

        }

    } );

} );
