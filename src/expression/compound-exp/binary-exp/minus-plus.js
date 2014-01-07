/**
 * 负正表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        MinusPlusOperator = require( "operator/binary-opr/minus-plus" );

    return kity.createClass( 'MinusPlusExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new MinusPlusOperator() );

        }

    } );

} );
