/**
 * 乘法表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        MultiplicationOperator = require( "operator/binary-opr/multiplication" );

    return kity.createClass( 'MultiplicationExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new MultiplicationOperator() );

        }

    } );

} );
