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

        },

        getBaseline: function () {
            var downOperand = this.getOperand( 1 ),
                rectBox = downOperand.getFixRenderBox();
            return rectBox.y + this.getOperand( 1 ).getBaseline();
        },

        getMeanline: function () {
            return this.getOperand( 0 ).getMeanline();
        }

    } );

} );
