/**
 * 加法表达式
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        AdditionOperator = require( "operator/binary-opr/addition" );

    return kity.createClass( 'AdditionExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new AdditionOperator() );

        }

    } );

} );
