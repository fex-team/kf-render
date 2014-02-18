/**
 * 求和操作符：∑
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity");

    return kity.createClass( 'SummationOperator', {

        base: require( "operator/operator" ),

        constructor: function () {

            this.callBase( "Summation" );

        },

        applyOperand: function ( exp, superscript, subscript ) {

            superscript.setAnchor(0, 0).scale(0.5);
            subscript.setAnchor(0, 0).scale(0.5);

            var supBox = superscript.getRenderBox(),
                subBox = subscript.getRenderBox(),
                expBox = exp.getRenderBox(),
                operatorShape = generateOperator(),
                scriptMaxHeight = Math.max( supBox.height, subBox.height ),
                opBoxShape = null,
                opBox = null,
                leftOffset = 0,
                rightOffset = 0,
                leftHeight = 0,
                rightHeight = 0,
                maxHeight = null;

            this.addOperatorShape( operatorShape );

            opBoxShape = generateBox( operatorShape.getRenderBox(), supBox, subBox );

            this.addOperatorShape( opBoxShape );

            opBox = operatorShape.getRenderBox();

            // 计算相关数据
            leftHeight = opBoxShape.getHeight();
            rightHeight = expBox.height;
            maxHeight = Math.max( leftHeight, rightHeight );
            leftOffset = ( maxHeight - leftHeight ) / 2;
            rightOffset = ( maxHeight - rightHeight ) / 2;

            superscript.translate( ( opBox.width - supBox.width ) / 2, leftOffset );
            operatorShape.translate( 0, scriptMaxHeight + leftOffset );
            subscript.translate( ( opBox.width - subBox.width ) / 2, scriptMaxHeight + opBox.height + leftOffset );
            // 主表达式偏移
            exp.translate( opBoxShape.getWidth(), rightOffset );

        }

    } );


    function generateOperator () {

        var pathData = "M2.208,31.154h13.249c7.777,0,10.513-1.584,11.281-9.361h0.864l-1.152,10.993H1.056c-0.72,0-1.008,0-1.008-0.336   c0-0.096,0-0.144,0.336-0.576l10.705-13.729L0,1.056C0,0.048,0.048,0,1.056,0h25.395l1.152,10.609h-0.864   c-0.816-7.633-3.216-9.361-11.185-9.361H3.937l9.457,14.545c0.048,0.096,0.24,0.384,0.24,0.576c0,0.144,0,0.24-0.336,0.624   L2.208,31.154z",
            operator = new kity.Path( pathData ).fill( "black" ),
            operatorShape = new kity.Group();

        return operatorShape.addShape(operator);

    }

    function generateBox ( expBox, supBox, subBox ) {

        // 获取上下标的最大高度， 使得上下标的位置能够对齐
        var scriptHeight = Math.max( supBox.height, subBox.height ),
            maxWidth = Math.max( expBox.width + 5, supBox.width, subBox.width );

        return new kity.Rect( 0, 0, maxWidth, scriptHeight * 2 + expBox.height ).fill( "transparent" );

    }

} );
