/**
 * 远小于表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        LlOperator = require( "operator/binary-opr/relational/ll" );

    return kity.createClass( 'LlExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new LlOperator() );

        }

    } );

} );
