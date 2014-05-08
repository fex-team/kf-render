/**
 * 开方操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),

        // 符号图形属性
        // 线条宽度
        SHAPE_DATA_WIDTH = 1,

        // 计算公式
        radians = 2 * Math.PI / 360,
        sin20 = Math.sin( 20 * radians ),
        cos20 = Math.cos( 20 * radians ),
        tan20 = Math.tan( 20 * radians ),
        atan20 = Math.atan( 20 * radians );

    return kity.createClass( 'RadicalOperator', {

        base: require( "operator/binary" ),

        constructor: function () {

            this.callBase( "Radical" );

        },

        applyOperand: function ( radicand, exponent ) {

            generateOperator.call( this, radicand, exponent );

        }

    } );

    // 根据给定的操作数生成操作符的pathData
    // radicand 表示被开方数
    // exponent 表示指数
    function generateOperator ( radicand, exponent ) {

        var decoration = generateDecoration( radicand ),
            vLine = generateVLine( radicand ),
            hLine = generateHLine( radicand );

        this.addOperatorShape( decoration );
        this.addOperatorShape( vLine );
        this.addOperatorShape( hLine );

        adjustmentPosition.call( this, mergeShape( decoration, vLine, hLine ), this.operatorShape, radicand, exponent );

        this.parentExpression.expand( 0, 10 );
        this.parentExpression.translateElement( 0, 5 );

    }

    // 生成根号中的左边装饰部分
    function generateDecoration ( radicand ) {

        var shape = new kity.Path(),
        // 命名为a以便于精简表达式
            a = SHAPE_DATA_WIDTH,
            h = radicand.getHeight() / 3,
            drawer = shape.getDrawer();

        // 根号尾部左上角开始
        drawer.moveTo( 0, cos20 * a * 6 );
        drawer.lineBy( sin20 * a , cos20 * a );
        drawer.lineBy( cos20 * a * 3, -sin20 * a * 3 );
        drawer.lineBy( tan20 * h, h );
        drawer.lineBy( sin20 * a * 3, -cos20 * a * 3 );
        drawer.lineBy( -sin20 * h, - h );
        drawer.close();

        return shape.fill( "black" );

    }

    // 根据操作数生成根号的竖直线部分
    function generateVLine ( operand ) {

        var shape = new kity.Path(),
            h = operand.getHeight(),
            drawer = shape.getDrawer();

        drawer.moveTo( tan20 * h, 0 );
        drawer.lineTo( 0, h );
        drawer.lineBy( sin20 * SHAPE_DATA_WIDTH * 3, cos20 * SHAPE_DATA_WIDTH * 3 );
        drawer.lineBy( tan20 * h + sin20 * SHAPE_DATA_WIDTH * 3, -( h + 3 * SHAPE_DATA_WIDTH * cos20 ) );
        drawer.close();

        return shape.fill( "black" );

    }

    // 根据操作数生成根号的水平线部分
    function generateHLine ( operand ) {

        // 表达式宽度
        var w = operand.getWidth() + 2 * SHAPE_DATA_WIDTH;

        return new kity.Rect( w, 2 * SHAPE_DATA_WIDTH ).fill( "black" );

    }

    // 合并根号的各个部分， 并返回根号的关键点位置数据
    function mergeShape ( decoration, vLine, hLine ) {

        var decoBox = decoration.getRenderBox(),
            vLineBox = vLine.getRenderBox();

        vLine.translate( decoBox.width - sin20 * SHAPE_DATA_WIDTH * 3, 0 );
        decoration.translate( 0, vLineBox.height - decoBox.height );
        vLineBox = vLine.getRenderBox();

        hLine.translate( vLineBox.x + vLineBox.width - SHAPE_DATA_WIDTH / cos20, 0 );

        // 返回关键点数据
        return {
            x: vLineBox.x + vLineBox.width - SHAPE_DATA_WIDTH / cos20,
            y: 0
        };

    }

    // 调整整个根号表达式的各个部分： 位置、操作符、被开方数、指数
    function adjustmentPosition ( position, operator, radicand, exponent ) {

        var exponentBox = null,
            opOffset = {
                x: 0,
                y: 0
            },
            opBox = operator.getRenderBox();

        exponent.setAnchor( 0, 0 );
        exponent.scale( 0.7 );
        exponentBox = exponent.getRenderBox();

        if ( exponentBox.width > 0 && exponentBox.height > 0 ) {

            opOffset.y = exponentBox.height - opBox.height / 2;

            // 指数不超出根号， 则移动指数
            if ( opOffset.y < 0 ) {
                exponent.translate( 0, -opOffset.y );
                opOffset.y = 0;
            }

            opOffset.x = exponentBox.width + ( opBox.height / 2 ) * tan20 - position.x;
        }

        operator.translate( opOffset.x, opOffset.y );

        radicand.translate( opOffset.x + position.x + SHAPE_DATA_WIDTH, opOffset.y + 2 * SHAPE_DATA_WIDTH );

    }

} );