/**
 * 组合表达式
 * 可以组合多个表达式
 */

define( function ( require ) {

    var kity = require( "kity"),
        FONT_CONF = require( "sysconf" ).font,
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

        getRenderBox: function ( refer ) {

            var rectBox = this.callBase( refer );

            if ( this.getOperands().length === 0 ) {
                rectBox.height = FONT_CONF.spaceHeight;
            }

            return rectBox;

        },

        getBaseline: function ( refer ) {

            var maxBaseline = 0,
                operands = this.getOperands();

            if ( operands.length === 0 ) {
                return this.callBase( refer );
            }

            kity.Utils.each( operands, function ( operand ) {

                maxBaseline = Math.max( operand.getBaseline( refer ), maxBaseline );

            } );

            return maxBaseline;

        },

        getMeanline: function ( refer ) {

            var minMeanline = 10000000,
                operands = this.getOperands();

            if ( operands.length === 0 ) {
                return this.callBase( refer );
            }

            kity.Utils.each( operands, function ( operand ) {

                minMeanline = Math.min( operand.getMeanline( refer ), minMeanline );

            } );

            return minMeanline;

        }

    } );

} );
