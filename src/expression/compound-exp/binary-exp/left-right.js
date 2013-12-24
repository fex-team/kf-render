/**
 * 左右结合二元表达式
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'LeftRightExpression', {

        base: require( "expression/compound-exp/binary" ),

        getLeftOperand: function () {

            return this.getFirstOperand();

        },

        setLeftOperand: function ( operand ) {

            return this.setFirstOperand( operand );

        },

        getRightOperand: function () {

            return this.getLastOperand();

        },

        setRightOperand: function ( operand ) {

            return this.setLastOperand( operand );

        }

    } );

} );
