/**
 * 上减下加表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        MpOperator = require( "operator/binary-opr/mp" );

    return kity.createClass( 'MpExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new MpOperator() );

        }

    } );

} );
