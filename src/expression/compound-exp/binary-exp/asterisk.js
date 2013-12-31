/**
 * 星号表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        AsteriskOperator = require( "operator/binary-opr/asterisk" );

    return kity.createClass( 'AsteriskExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new AsteriskOperator() );

        }

    } );

} );
