/**
 * 上标表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SCRIPT_TYPE = require( "def/script-type" ),
        ScriptableOperator = require( "operator/scriptable" );

    return kity.createClass( 'ScriptableExpression', {

        base: require( "expression/compound" ),

        constructor: function ( operand, superscript, subscript ) {

            this.callBase();

            this.scriptOperator = new ScriptableOperator();
            this.scriptOperator.parentExpression = this;

            // 上下标类型， 默认为侧面依附
            this.scriptType = SCRIPT_TYPE.SIDE;

            // 下标偏移修正
            this.subOffset = 0;

            this.scriptOperand = operand;
            this.scriptSup = superscript;
            this.scriptSub = subscript;

            // 整体所占空间大小
            this.space = {
                width: 0,
                height: 0
            };

        },

        setSubOffset: function ( offset ) {
            this.subOffset = offset;
        },

        getSubOffset: function () {
            return this.subOffset;
        },

        updateSpace: function ( space ) {
            this.space.width = space.width;
            this.space.height = space.height;
        },

        getSpace: function () {
            return this.space;
        },

        setScriptType: function ( type ) {
            this.scriptType = type;
        },

        getScriptType: function () {
            return this.scriptType;
        },

        setScriptOperand: function ( operand ) {
            this.scriptOperand = operand;
        },

        setScriptSup: function ( sup ) {
            this.scriptSup = sup;
        },

        setScriptSub: function ( sub ) {
            this.scriptSub = sub;
        },

        addedCall: function () {

            this.scriptOperator.applyOperand( this.scriptOperand, this.scriptSup, this.scriptSub );
            this.callBase();
            return this;

        }

    } );

} );
