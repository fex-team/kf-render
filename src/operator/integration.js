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

        var path = "M21.689,98.771l12.627-59.922C39.864,12.537,46.389-0.406,53.881,0.01c1.741,0.817,2.646,2.694,2.731,5.641   c-0.835,2.774-1.867,4.047-3.08,3.82c-0.916-0.171-1.698-1.05-2.346-2.636c-0.351-1.532-0.674-2.327-0.976-2.381   c-2.478-1.93-6.407,9.792-11.781,35.166l-12.758,60.628c-8.028,39.533-15.718,57.879-23.068,55.039   c-2.354-0.932-3.111-2.78-2.275-5.554c0.443-2.368,1.42-3.397,2.948-3.113c0.915,0.171,1.54,1.021,1.891,2.552   c0.43,1.054,0.799,1.615,1.105,1.672c1.522,0.285,3.337-3.532,5.452-11.437C13.875,132.961,17.19,119.432,21.689,98.771z",
            group = new kity.Group();

        this.addOperatorShape( group );

        switch ( this.type ) {

            case types.TYPE_SINGLE:
                group.addShape( new kity.Path( path ).fill( "black" ) );
                break;

            case types.TYPE_DOUBLE:
                var symbol = new kity.Path( path ).fill( "black" ),
                    useShape = new kity.Use( symbol );

                group.addShape( symbol );

                useShape.translate( symbol.getWidth()/2, 0 );
                group.addShape( useShape );

                break;

            case types.TYPE_TRIPLE:
                var symbol = new kity.Path( path ).fill( "black" ),
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

            supOperand.setAnchor( 0, 0 ).scale(0.7);
            subOperand.setAnchor( 0, 0 ).scale(0.7);

            supBox = supOperand.getRenderBox();
            subBox = subOperand.getRenderBox();

            // 上限偏移
            offset.x += 5;
            supOperand.translate( offset.x, 5 );

            // 符号偏移
            offset.y += supBox.height / 2;
            offset.x += supBox.width;
            operatorShape.translate( 0, offset.y );

            // 下限偏移
            subOperand.translate( operatorBox.width - 30, offset.y + operatorBox.height - subBox.height + 12 );

        }

        /* 被积函数和操作符及上下限的偏移 */

        // 被积函数偏移
        maxHeight = Math.max( operatorBox.height, integrandBox.height );
        integrand.translate( offset.x + 10, ( maxHeight - integrandBox.height ) / 2 + offset.y - integrandBox.y );

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
