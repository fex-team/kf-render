/**
 * 复合表达式
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        Expression = require( "expression/expression" );

    return kity.createClass( 'CompoundExpression', {

        base: require( "expression/expression" ),

        constructor: function () {

            this.callBase();

            this.operands = [];
            this.operator = null;

        },

        // 操作符存储在第1位置
        setOperator: function ( operator ) {

            if ( operator === undefined ) {
                return this;
            }

            if ( this.operator ) {
                this.operator.remove();
            }

            this.operator = operator;
            this.setChildren( 0, this.operator );

            this.operator.setParentExpression( this );

            return this;

        },

        getOperator: function () {

            return this.operator;

        },

        // 操作数存储位置是从1开始
        setOperand: function ( operand, index ) {

            if ( operand === undefined ) {
                return this;
            }

            operand = Expression.wrap( operand );

            if ( this.operands[ index ] ) {
                this.operands[ index ].remove();
            }

            this.operands[ index ] = operand;
            this.setChildren( index+1, operand );

            return this;

        },

        getOperand: function ( index ) {

            return this.getChild( index + 1 );

        },

        addedCall: function () {

            this.operator.applyOperand.apply( this.operator, this.operands );

            return this;

        }

    } );

} );
