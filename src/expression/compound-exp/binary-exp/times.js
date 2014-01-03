/**
 * 乘法表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        MpOperator = require( "operator/binary-opr/times" );

    return kity.createClass( 'TimesExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new MpOperator() );

        }

    } );

} );
