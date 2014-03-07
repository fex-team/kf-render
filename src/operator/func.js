/**
 * 函数操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        RomanText = require( "char/roman" );

    return kity.createClass( 'FunctionOperator', {

        base: require( "operator/operator" ),

        constructor: function ( funcName ) {

            this.callBase( "Function: "+funcName );

            this.funcName = funcName;

        },

        /*
         * 积分操作符应用操作数
         * @param integrand 被积函数
         * @param supOperand 上限
         * @param subOperand 下限
         */
        applyOperand: function ( funcExp, supOperand, subOperand ) {

            generateOperator.call( this );

            adjustmentPosition.call( this, this.operatorShape, funcExp, supOperand, subOperand );

        }

    } );

    /* 返回操作符对象 */
    function generateOperator () {

        var textShape = new RomanText( this.funcName );

        this.addOperatorShape( textShape );

        textShape.addedCall();

        return this.operatorShape;

    }

    function adjustmentPosition ( operatorShape, funcExp, supOperand, subOperand ) {

        supOperand.setAnchor( 0, 0 ).scale( 0.7 );
        subOperand.setAnchor( 0, 0 ).scale( 0.7 );

        var opBox = operatorShape.getRenderBox(),
            supBox = supOperand.getRenderBox(),
            subBox = subOperand.getRenderBox(),
            expBox = funcExp.getRenderBox(),
            maxScriptHeight = Math.max( supBox.height, subBox.height ),
            maxWidth = Math.max( opBox.width, subBox.width, supBox.width );

        supOperand.translate( ( maxWidth - supBox.width ) / 2, maxScriptHeight - supBox.height );
        operatorShape.translate( ( maxWidth - opBox.width ) / 2, maxScriptHeight );
        subOperand.translate( ( maxWidth - subBox.width ) / 2, maxScriptHeight + opBox.height );

        funcExp.translate( maxWidth + 5, ( maxScriptHeight * 2 + opBox.height - expBox.height ) / 2 );

    }

} );
