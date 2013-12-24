/**
 * 上下结合二元表达式
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'UpDownExpression', {

        base: require( "expression/compound-exp/binary" ),

        getUpOperand: function () {

            return this.getFirstOperand();

        },

        setUpOperand: function ( operand ) {

            return this.setFirstOperand( operand );

        },

        getDownOperand: function () {

            return this.getLastOperand();

        },

        setDownOperand: function ( operand ) {

            return this.setLastOperand( operand );

        }

    } );

} );
