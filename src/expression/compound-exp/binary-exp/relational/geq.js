/**
 * 大于等于表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        GeqOperator = require( "operator/binary-opr/relational/geq" );

    return kity.createClass( 'GeqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new GeqOperator() );

        }

    } );

} );
