/**
 * 型号表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        StarOperator = require( "operator/binary-opr/star" );

    return kity.createClass( 'StarExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new StarOperator() );

        }

    } );

} );
