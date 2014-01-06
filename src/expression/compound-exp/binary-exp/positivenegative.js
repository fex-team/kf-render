/**
 * 上加下减表达式：±
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        PositiveNegativeOperator = require( "operator/binary-opr/positivenegative" );

    return kity.createClass( 'PositiveNegativeExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new PositiveNegativeOperator() );

        }

    } );

} );
