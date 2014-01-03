/**
 * 乘法表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        AstOperator = require( "operator/binary-opr/ast" );

    return kity.createClass( 'AstExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new AstOperator() );

        }

    } );

} );
