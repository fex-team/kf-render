/**
 * 不等号表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotEqOperator = require( "operator/binary-opr/relational/not/not-eq" );

    return kity.createClass( 'NotEqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotEqOperator() );

        }

    } );

} );
