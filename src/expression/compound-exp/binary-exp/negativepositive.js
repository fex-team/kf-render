/**
 * 上减下加表达式：∓
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NegativePositiveOperator = require( "operator/binary-opr/negativepositive" );

    return kity.createClass( 'NegativePositiveExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NegativePositiveOperator() );

        }

    } );

} );
