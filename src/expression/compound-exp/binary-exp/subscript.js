/**
 * 下标表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SubscriptExpression = require( "operator/binary-opr/subscript" );

    return kity.createClass( 'SubExpression', {

        base: require( "expression/compound-exp/binary" ),

        constructor: function ( operand, subscript ) {

            this.callBase( operand, subscript );

            this.setOperator( new SubscriptExpression() );

        },

        getBaseHeight: function () {

            return this.getFirstOperand().getBaseHeight();

        },

        getBaseWidth: function () {

            return this.getFirstOperand().getBaseWidth();

        }

    } );

} );
