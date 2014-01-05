/**
 * 并集表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        UnionOperator = require( "operator/binary-opr/union" );

    return kity.createClass( 'UnionExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new UnionOperator() );

        }

    } );

} );
