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

            superscript.setAnchor(0, 0).scale(0.7);
            subscript.setAnchor(0, 0).scale(0.7);

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
            exp.translate( Math.max( opBoxShape.getWidth(), supBox.width, subBox.width ), rightOffset );

        }

    } );


    function generateOperator () {

        var pathData = "M0.672,33.603c-0.432,0-0.648,0-0.648-0.264c0-0.024,0-0.144,0.24-0.432l12.433-14.569L0,0.96c0-0.264,0-0.72,0.024-0.792   C0.096,0.024,0.12,0,0.672,0h28.371l2.904,6.745h-0.6C30.531,4.8,28.898,3.72,28.298,3.336c-1.896-1.2-3.984-1.608-5.28-1.8   c-0.216-0.048-2.4-0.384-5.617-0.384H4.248l11.185,15.289c0.168,0.24,0.168,0.312,0.168,0.36c0,0.12-0.048,0.192-0.216,0.384   L3.168,31.515h14.474c4.608,0,6.96-0.624,7.464-0.744c2.76-0.72,5.305-2.352,6.241-4.848h0.6l-2.904,7.681H0.672z",
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
