/**
 * 交集表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        IntersectionOperator = require( "operator/binary-opr/intersection" );

    return kity.createClass( 'IntersectionExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new IntersectionOperator() );

        }

    } );

} );
