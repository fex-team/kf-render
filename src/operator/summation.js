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

        var operator = new kity.Path( "M53.343,70.586c8.804,0.344,15.067-4.427,18.797-14.321h2.54l-4.573,21.994H0l39.118-38.362L0.509,0h68.582l6.097,17.903  l-2.54,0.51C66.884,7.849,59.948,2.733,51.82,3.069h-36.07l33.02,33.248L13.208,70.586H53.343z" ).fill( "black" ),
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
