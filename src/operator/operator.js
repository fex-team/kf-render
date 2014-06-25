/**
 * 操作符抽象类
 * @abstract
 */

define( function ( require ) {

    var kity = require( "kity" ),
        GTYPE = require( "def/gtype" );

    return kity.createClass( 'Operator', {

        base: require( "signgroup" ),

        constructor: function ( operatorName ) {

            this.callBase();

            this.type = GTYPE.OP;

            // 该操作符所属的表达式
            this.parentExpression = null;

            // 操作符名称
            this.operatorName = operatorName;

            // 操作符图形
            this.operatorShape = new kity.Group();

            this.addShape( this.operatorShape );

        },

        applyOperand: function () {
            throw new Error( 'applyOperand is abstract' );
        },

        setParentExpression: function ( exp ) {
            this.parentExpression = exp;
        },

        getParentExpression: function () {
            return this.parentExpression;
        },

        clearParentExpression: function () {
            this.parentExpression = null;
        },

        // 提供给具体实现类附加其绘制的操作符图形的接口
        addOperatorShape: function ( shpae ) {

            return this.operatorShape.addShape( shpae );

        },

        getOperatorShape: function () {

            return this.operatorShape;

        }

    } );

} );