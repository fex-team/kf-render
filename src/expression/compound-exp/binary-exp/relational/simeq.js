/**
 * simeq表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SimeqOperator = require( "operator/binary-opr/relational/simeq" );

    return kity.createClass( 'SimeqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SimeqOperator() );

        }

    } );

} );
