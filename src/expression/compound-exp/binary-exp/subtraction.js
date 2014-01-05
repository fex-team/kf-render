/**
 * 减法表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SubtractionOperator = require( "operator/binary-opr/subtraction" );

    return kity.createClass( 'SubtractionExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SubtractionOperator() );

        }

    } );

} );
