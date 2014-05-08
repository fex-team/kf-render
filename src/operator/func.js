/**
 * 函数操作符
 */

define( function ( require, exports, modules ) {

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
                padding = 5,
                expBox = expr.getFixRenderBox(),
                space = new ScriptController( this, opShape, sup, sub, {
                    zoom: 0.5
                } ).applyUpDown(),
                diff = ( space.height - expBox.height ) / 2;

            if ( diff >= 0 ) {
                expr.translate( space.width + padding, diff );
            } else {
                diff = -diff;
                opShape.translate( 0, diff );
                sup.translate( 0, diff );
                sub.translate( 0, diff );
                expr.translate( space.width + padding, 0 );
            }

            this.parentExpression.expand( padding, padding * 2 );
            this.parentExpression.translateElement( padding, padding );

        }

    } );

    /* 返回操作符对象 */
    function generateOperator () {

        var opShape = new Text( this.funcName, "KF AMS ROMAN" );
        this.addOperatorShape( opShape )

        return opShape;

    }

} );
