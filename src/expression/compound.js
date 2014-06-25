/**
 * 复合表达式
 * @abstract
 */

define( function ( require ) {

    var kity = require( "kity" ),

        GTYPE = require( "def/gtype" ),

        Expression = require( "expression/expression" );

    return kity.createClass( 'CompoundExpression', {

        base: require( "expression/expression" ),

        constructor: function () {

            this.callBase();

            this.type = GTYPE.COMPOUND_EXP;

            this.operands = [];
            this.operator = null;

            this.operatorBox = new kity.Group();
            this.operatorBox.setAttr( "data-type", "kf-editor-exp-op-box" );

            this.operandBox = new kity.Group();
            this.operandBox.setAttr( "data-type", "kf-editor-exp-operand-box" );

            this.setChildren( 0, this.operatorBox );
            this.setChildren( 1, this.operandBox );

        },

        // 操作符存储在第1位置
        setOperator: function ( operator ) {

            if ( operator === undefined ) {
                return this;
            }

            if ( this.operator ) {
                this.operator.remove();
            }

            this.operatorBox.addShape( operator );

            this.operator = operator;

            this.operator.setParentExpression( this );

            // 表达式关联到操作符
            operator.expression = this;

            return this;

        },

        getOperator: function () {

            return this.operator;

        },

        // 操作数存储位置是从1开始
        setOperand: function ( operand, index, isWrap ) {

            // 不包装操作数
            if ( isWrap === false ) {
                this.operands[ index ] = operand;
                return this;
            }

            operand = Expression.wrap( operand );

            if ( this.operands[ index ] ) {
                this.operands[ index ].remove();
            }

            this.operands[ index ] = operand;

            this.operandBox.addShape( operand );

            return this;

        },

        getOperand: function ( index ) {

            return this.operands[ index ];

        },

        getOperands: function () {

            return this.operands;

        },

        addedCall: function () {

            this.operator.applyOperand.apply( this.operator, this.operands );
            return this;

        }

    } );

} );
