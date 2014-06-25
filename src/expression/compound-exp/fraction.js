/**
 * 分数表达式
 */

define( function ( require ) {

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
        getBaseline: function ( refer ) {
            var downOperand = this.getOperand( 1 ),
                rectBox = downOperand.getRenderBox( refer );
            return rectBox.y + downOperand.getBaselineProportion() * rectBox.height;
        },

        getMeanline: function ( refer ) {
            var upOperand = this.getOperand( 0 ),
                rectBox = upOperand.getRenderBox( refer );
            return upOperand.getMeanlineProportion() * rectBox.height;
        }

    } );

} );
