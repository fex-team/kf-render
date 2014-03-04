/**
 * "⋃"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        CupOperator = require( "operator/binary-opr/relational/set/cup" );

    return kity.createClass( 'CupExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new CupOperator() );

        }

    } );

} );
