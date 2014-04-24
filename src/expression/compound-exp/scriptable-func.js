/**
 * 可以带上下表的函数表达式
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'ScriptableFuncExpression', {

        base: require( "expression/compound-exp/scriptable" ),

        /**
         * 构造表达式
         * @param exp 函数表达式操作符
         * @param upOperand 上标
         * @param downOperand 下标
         */
        constructor: function ( operator, exp, superscript, subscript ) {

            var operator = operator;

            this.callBase();

            this.setExp( exp );
            this.setSuperscript( superscript );
            this.setSubscript( subscript );

            this.setScriptOperand( operator );
            this.setOperator( operator );

        },

        setExp: function ( exp ) {
            this.setOperand( exp, 0 );
        },

        setSuperscript: function ( sup ) {

            this.setOperand( sup, 1 );
            this.setScriptSup( this.getOperand( 1 ) );

        },

        setSubscript: function ( sub ) {

            this.setOperand( sub, 2 );
            this.setScriptSub( this.getOperand( 2 ) );

        }

    } );

} );
