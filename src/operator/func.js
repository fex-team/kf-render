/**
 * 函数操作符
 */

define( function ( require ) {

    var kity = require( "kity" ),
        Text = require( "char/text" ),
        ScriptController = require( "operator/common/script-controller" );

    return kity.createClass( 'FunctionOperator', {

        base: require( "operator/operator" ),

        constructor: function ( funcName ) {

            this.callBase( "Function: "+funcName );

            this.funcName = funcName;

        },

        /*
         * 积分操作符应用操作数
         * @param expr 函数表达式
         * @param sup 上限
         * @param sub 下限
         */
        applyOperand: function ( expr, sup, sub ) {


            var opShape = generateOperator.call( this ),
                expBox = expr.getFixRenderBox(),
                scriptHanlder = this.parentExpression.isSideScript() ? 'applySide' : 'applyUpDown',
                space = new ScriptController( this, opShape, sup, sub, {
                    zoom: 0.5
                } )[ scriptHanlder ](),
                padding = 5,
                diff = ( space.height + space.top + space.bottom - expBox.height ) / 2;

            // 应用偏移， 使图形在正确的位置上
            opShape.translate( 0, space.top );
            sup.translate( 0, space.top );
            sub.translate( 0, space.top );

            if ( diff >= 0 ) {
                expr.translate( space.width + padding, diff );
            } else {
                diff = -diff;
                opShape.translate( 0, diff );
                sup.translate( 0, diff );
                sub.translate( 0, diff );
                expr.translate( space.width + padding, 0 );
            }

            // 只扩展左边， 不扩展右边， 所以padding不 *2
            this.parentExpression.expand( padding, padding * 2 );
            this.parentExpression.translateElement( padding, padding );

        }

    } );

    /* 返回操作符对象 */
    function generateOperator () {

        var opShape = new Text( this.funcName, "KF AMS ROMAN" );
        this.addOperatorShape( opShape );

        return opShape;

    }

} );
