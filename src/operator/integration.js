/**
 * 积分操作符：∫
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity");

    return kity.createClass( 'IntegrationOperator', {

        base: require( "operator/operator" ),

        constructor: function ( type ) {

            this.callBase( "Integration" );

            // 默认是普通单重积分
            this.type = type || 1;

        },

        setType: function ( type ) {
            this.type = type | 0;
        },

        // 重置类型
        resetType: function () {
            this.type = 1;
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

    /* 返回操作符对象 */
    function generateOperator () {

        var pathData = "M1.318,48.226c0,0,0.044,0.066,0.134,0.134c0.292,0.313,0.626,0.447,1.006,0.447c0.246,0.022,0.358-0.044,0.604-0.268   c0.782-0.782,1.497-2.838,2.324-6.727c0.514-2.369,0.938-4.693,1.586-8.448C8.559,24.068,9.9,17.878,11.978,9.52   c0.917-3.553,1.922-7.576,3.866-8.983C16.247,0.246,16.739,0,17.274,0c1.564,0,2.503,1.162,2.592,2.57   c0,0.827-0.424,1.386-1.273,1.386c-0.671,0-1.229-0.514-1.229-1.251c0-0.805,0.514-1.095,1.185-1.274   c0.022,0-0.291-0.29-0.425-0.379c-0.201-0.134-0.514-0.224-0.737-0.224c-0.067,0-0.112,0-0.157,0.022   c-0.469,0.134-0.983,0.939-1.453,2.234c-0.537,1.475-0.961,3.174-1.631,6.548c-0.424,2.101-0.693,3.464-1.229,6.727   c-1.608,9.185-2.949,15.487-5.006,23.756c-0.514,2.034-0.849,3.24-1.207,4.335c-0.559,1.698-1.162,2.95-1.811,3.799   c-0.514,0.715-1.385,1.408-2.436,1.408c-1.363,0-2.391-1.185-2.458-2.592c0-0.804,0.447-1.363,1.273-1.363   c0.671,0,1.229,0.514,1.229,1.251C2.503,47.757,1.989,48.047,1.318,48.226z",
            group = new kity.Group(),
            opShape = new kity.Path( pathData ).fill( "black" ),
            tmpShape = null;

        this.addOperatorShape( group );
        group.addShape( opShape );

        for ( var i = 1; i < this.type; i++ ) {
            tmpShape = new kity.Use( opShape ).translate( opShape.getWidth() /2 * i, 0 );
            group.addShape( tmpShape );
        }

        tmpShape = null;

        return group;

    }

    function adjustmentPosition ( operatorShape, integrandExp, supOperand, subOperand ) {

//        var operatorBox = operatorShape.getRenderBox(),
//            integrandBox = integrand.getRenderBox(),
//            supBox = null,
//            subBox = null,
//            expBox = null,
//            // 被积函数的偏移
//            offset = {
//                x: operatorBox.width,
//                y: 0
//            },
//            // 表达式左边部分最大宽度
//            leftMaxWidth = 0,
//            maxHeight = 0;
//
//        if ( supOperand ) {
//
//            supOperand.setAnchor( 0, 0 ).scale( 0.7 );
//            subOperand.setAnchor( 0, 0 ).scale( 0.7 );
//
//            supBox = supOperand.getRenderBox();
//            subBox = subOperand.getRenderBox();
//
//            // 上限偏移
//            offset.x += 2;
//            supOperand.translate( offset.x, 2 );
//
//            leftMaxWidth = offset.x + supBox.width;
//
//            // 符号偏移
//            offset.y += supBox.height / 2;
//            offset.x += supBox.width;
//            operatorShape.translate( 0, offset.y );
//
//            // 下限偏移
//            subOperand.translate( operatorBox.width - 8, offset.y + operatorBox.height - subBox.height + 6 );
//
//            leftMaxWidth = Math.max( leftMaxWidth, operatorBox.width - 8 + subBox.width );
//
//        }
//
//        /* 被积函数和操作符及上下限的偏移 */
//
//        // 被积函数偏移
//        maxHeight = Math.max( operatorBox.height, integrandBox.height );
//        integrand.translate( leftMaxWidth + 2, ( maxHeight - integrandBox.height ) / 2 + offset.y - integrandBox.y );
//
//        // 操作符偏移
//        maxHeight = ( maxHeight - operatorBox.height ) / 2;
//        operatorShape.translate( 0, maxHeight );
//        supOperand.translate( 0, maxHeight );
//        subOperand.translate( 0, maxHeight );
//
//        /* 操作符边框的调整， 包裹住所有内容 */
//        // 获取整个表达式经过调整后的大小
//        expBox = this.parentExpression.getRenderBox();
//
//        // 要保证符号上下的空间是相同的
//        var diff = expBox.height - offset.y - operatorBox.height;
//
//        this.box.setWidth( expBox.width );
//
//        // 下部空间大于上部空间， 调整整个空间
//        if ( diff > offset.y ) {
//
//            diff = diff - offset.y;
//
//            // 移动整个空间中的内容
//            this.box.setHeight( expBox.height + diff );
//            supOperand.translate( 0, diff );
//            subOperand.translate( 0, diff );
//            operatorShape.translate( 0, diff );
//            integrand.translate( 0, diff );
//
//        } else {
//        // 仅调整边框大小
//
//            this.box.setHeight( expBox.height + offset.y - diff );
//
//        }
        supOperand.setAnchor( 0, 0 ).scale( 0.7 );
        subOperand.setAnchor( 0, 0 ).scale( 0.7 );

        var expBox = integrandExp.getRenderBox(),
            subBox = subOperand.getRenderBox(),
            supBox = supOperand.getRenderBox(),
            opBox = operatorShape.getRenderBox(),
            maxScriptSize = {
                width: Math.max( subBox.width, supBox.width ),
                height: Math.max( subBox.height, supBox.height )
            },
            maxLeftWidth = Math.max( opBox.width, maxScriptSize.width ),
            offset = {
                x: 0,
                y: 0
            },
            // 左右两部分的高度diff
            leftHeight = subBox.height / 3 + supBox.height / 3 + opBox.height,
            // 表达式在Y轴上的偏移
            expOffsetY = 0;

        // 调整左右两边的高度, 使之不会出现负偏移
        if ( leftHeight < expBox.height ) {
            offset.y = ( expBox.height - leftHeight ) / 2;
        } else {
            expOffsetY = ( leftHeight - expBox.height ) / 2;
        }

        offset.x = opBox.width + 1;
        supOperand.translate( offset.x, offset.y );
        offset.y += supBox.height / 3;

        operatorShape.translate( 0, offset.y );
        offset.y += opBox.height - subBox.height * 2 / 3;

        subOperand.translate( opBox.width - 9, offset.y );

        // 左边部分所占空间大小
        offset.x = Math.max( opBox.width + 1 + supBox.width, opBox.width + subBox.width - 9 );

        integrandExp.translate( offset.x + 5, expOffsetY );

    }

} );
