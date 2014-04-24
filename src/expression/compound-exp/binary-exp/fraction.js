/**
 * 分数表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        FractionOperator = require( "operator/binary-opr/fraction" );

    return kity.createClass( 'FractionExpression', {

        base: require( "expression/compound-exp/binary-exp/up-down" ),

        constructor: function ( upOperand, downOperand ) {

            this.callBase( upOperand, downOperand );

            this.setFlag( "Fraction" );

            this.setOperator( new FractionOperator() );

        }

    } );

} );
