/**
 * 子集表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SubsetOperator = require( "operator/binary-opr/relational/set/subset" );

    return kity.createClass( 'SubsetExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SubsetOperator() );

        }

    } );

} );
