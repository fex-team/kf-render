/**
 * ni表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NiOperator = require( "operator/binary-opr/relational/set/ni" );

    return kity.createClass( 'NiExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NiOperator() );

        }

    } );

} );
