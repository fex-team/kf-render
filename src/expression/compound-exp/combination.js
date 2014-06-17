/**
 * 组合表达式
 * 可以组合多个表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity"),
        CombinationOperator = require( "operator/combination" );

    return kity.createClass( 'CombinationExpression', {

        base: require( "expression/compound" ),

        constructor: function () {

            this.callBase();

            this.setFlag( "Combination" );

            this.setOperator( new CombinationOperator() );

            kity.Utils.each( arguments, function ( operand, index ) {

                this.setOperand( operand, index );

            }, this );

        },

        getBaseline: function () {

            var maxBaseline = 0,
                operands = this.getOperands();

            kity.Utils.each( operands, function ( operand ) {

                maxBaseline = Math.max( operand.getBaseline(), maxBaseline )

            } );

            return maxBaseline;

        },

        getMeanline: function () {

            var minMeanline = 0,
                operands = this.getOperands();

            kity.Utils.each( operands, function ( operand ) {

                minMeanline = Math.min( operand.getMeanline(), minMeanline )

            } );

            return minMeanline;

        }

    } );

} );
