/**
 * 积分操作符：∫
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity"),

        // 积分类型常量
        types = {
            // 单重积分
            TYPE_SINGLE: "TYPE_SINGLE",
            // 二重积分
            TYPE_DOUBLE: "TYPE_DOUBLE",
            // 三重积分
            TYPE_TRIPLE: "TYPE_TRIPLE"
        },

        IntegrationOperator = kity.createClass( 'IntegrationOperator', {

            base: require( "operator/operator" ),

            constructor: function ( type ) {

                this.callBase( "Integration" );

                // 默认是普通单重积分
                this.type = type || types.TYPE_SINGLE;

            },

            setType: function ( type ) {

                if ( types[ type ] ) {
                    this.type = type;
                }

            },

            // 重置类型
            resetType: function () {
                this.type = types.TYPE_SINGLE;
            },

            /*
             * 积分操作符应用操作数
             * @param integrand 被积函数
             * @param supOperand 上限
             * @param subOperand 下限
             */
            applyOperand: function ( integrand, supOperand, subOperand ) {

                generateOperator.call( this );

                adjustmentPosition.call( this, this.operatorShape, integrand, supOperand, subOperand );

            }

        } );

    // 附加类型常量
    IntegrationOperator.types = types;

    /* 返回操作符对象 */
    return IntegrationOperator;

    function generateOperator () {

        var pathData = "M16.273,1.056c-1.68,0-2.448,1.92-2.88,5.521c-0.336,2.304-0.624,4.993-0.864,7.584   c-0.768,8.497-1.824,14.593-3.072,21.458c-0.72,3.984-1.632,9.121-5.665,9.121C1.536,44.74,0,42.772,0,40.899   c0-1.392,1.008-2.016,1.968-2.016s1.92,0.768,1.92,1.92c0,0.72-0.384,1.872-2.016,1.968c0.336,0.432,1.008,0.912,1.873,0.912   c1.68,0,2.448-1.92,2.88-5.521c0.336-2.304,0.624-4.993,0.864-7.585c0.768-8.353,1.776-14.401,3.072-21.602   C11.281,5.185,12.193,0,16.226,0c2.256,0,3.792,1.968,3.792,3.84c0,1.392-1.008,2.016-1.968,2.016c-0.96,0-1.92-0.768-1.92-1.92   c0-0.72,0.384-1.872,2.016-1.968C17.81,1.536,17.138,1.056,16.273,1.056z",
            group = new kity.Group();

        this.addOperatorShape( group );

        switch ( this.type ) {

            case types.TYPE_SINGLE:
                group.addShape( new kity.Path( pathData ).fill( "black" ) );
                break;

            case types.TYPE_DOUBLE:
                var symbol = new kity.Path( pathData ).fill( "black" ),
                    useShape = new kity.Use( symbol );

                group.addShape( symbol );

                useShape.translate( symbol.getWidth()/2, 0 );
                group.addShape( useShape );

                break;

            case types.TYPE_TRIPLE:
                var symbol = new kity.Path( pathData ).fill( "black" ),
                    useShape = new kity.Use( symbol );

                group.addShape( symbol );

                useShape.translate( symbol.getWidth()/2, 0 );
                group.addShape( useShape );

                useShape = new kity.Use( symbol );
                useShape.translate( symbol.getWidth(), 0 );
                group.addShape( useShape );

                break;

        }

        return group;

    }

    function adjustmentPosition ( operatorShape, integrand, supOperand, subOperand ) {

        var operatorBox = operatorShape.getRenderBox(),
            integrandBox = integrand.getRenderBox(),
            supBox = null,
            subBox = null,
            expBox = null,
            // 被积函数的偏移
            offset = {
                x: operatorBox.width,
                y: 0
            },
            maxHeight = 0;

        if ( supOperand ) {

            supOperand.setAnchor( 0, 0 ).scale( 0.7 );
            subOperand.setAnchor( 0, 0 ).scale( 0.7 );

            supBox = supOperand.getRenderBox();
            subBox = subOperand.getRenderBox();

            // 上限偏移
            offset.x += 2;
            supOperand.translate( offset.x, 2 );

            // 符号偏移
            offset.y += supBox.height / 2;
            offset.x += supBox.width;
            operatorShape.translate( 0, offset.y );

            // 下限偏移
            subOperand.translate( operatorBox.width - 8, offset.y + operatorBox.height - subBox.height + 6 );

        }

        /* 被积函数和操作符及上下限的偏移 */

        // 被积函数偏移
        maxHeight = Math.max( operatorBox.height, integrandBox.height );
        integrand.translate( offset.x + 2, ( maxHeight - integrandBox.height ) / 2 + offset.y - integrandBox.y );

        // 操作符偏移
        maxHeight = ( maxHeight - operatorBox.height ) / 2;
        operatorShape.translate( 0, maxHeight );
        supOperand.translate( 0, maxHeight );
        subOperand.translate( 0, maxHeight );

        /* 操作符边框的调整， 包裹住所有内容 */
        // 获取整个表达式经过调整后的大小
        expBox = this.parentExpression.getRenderBox();

        // 要保证符号上下的空间是相同的
        var diff = expBox.height - offset.y - operatorBox.height;

        this.box.setWidth( expBox.width );

        // 下部空间大于上部空间， 调整整个空间
        if ( diff > offset.y ) {

            diff = diff - offset.y;

            // 移动整个空间中的内容
            this.box.setHeight( expBox.height + diff );
            supOperand.translate( 0, diff );
            subOperand.translate( 0, diff );
            operatorShape.translate( 0, diff );
            integrand.translate( 0, diff );

        } else {
        // 仅调整边框大小

            this.box.setHeight( expBox.height + offset.y - diff );

        }

    }

} );
