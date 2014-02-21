/**
 * 小于等于表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        LeqOperator = require( "operator/binary-opr/relational/leq" );

    return kity.createClass( 'LeqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new LeqOperator() );

        }

    } );

} );
