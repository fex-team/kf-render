/**
 * 正负表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        PlusMinusOperator = require( "operator/binary-opr/plus-minus" );

    return kity.createClass( 'PlusMinusExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new PlusMinusOperator() );

        }

    } );

} );
