/**
 * 除法表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        DivisionOperator = require( "operator/binary-opr/division" );

    return kity.createClass( 'DivisionExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new DivisionOperator() );

        }

    } );

} );
