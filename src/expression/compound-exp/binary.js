/**
 * 二元操作表达式
 */

define( function ( require ) {

    var kity = require( "kity" );

    return kity.createClass( 'BinaryExpression', {

        base: require( "expression/compound" ),

        constructor: function ( firstOperand, lastOperand ) {

            this.callBase();

            this.setFirstOperand( firstOperand );
            this.setLastOperand( lastOperand );

        },

        setFirstOperand: function ( operand ) {

            return this.setOperand( operand, 0 );

        },

        getFirstOperand: function () {

            return this.getOperand( 0 );

        },

        setLastOperand: function ( operand ) {

            return this.setOperand( operand, 1 );

        },

        getLastOperand: function () {

            return this.getOperand( 1 );

        }

    } );

} );