/**
 * 分数表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        FractionOperator = require( "operator/fraction" );

    return kity.createClass( 'FractionExpression', {

        base: require( "expression/compound-exp/binary" ),

        constructor: function ( upOperand, downOperand ) {

            this.callBase( upOperand, downOperand );

            this.setFlag( "Fraction" );

            this.setOperator( new FractionOperator() );

        },

        /*------- 重写分数结构的baseline和mealine计算方式 */
        getBaseline: function () {
            var downOperand = this.getOperand( 1 ),
                rectBox = downOperand.getRenderBox("paper");
            return rectBox.y + downOperand.getBaselineProportion() * rectBox.height;
        },

        getMeanline: function () {
            var upOperand = this.getOperand( 0 ),
                rectBox = upOperand.getRenderBox( "paper" );
            return upOperand.getMeanlineProportion() * rectBox.height;
        }

    } );

} );
