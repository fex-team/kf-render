/**
 * 开方操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),

        // 符号图形属性
        // 线条宽度
        SHAPE_DATA_WIDTH = 2,

        // 计算公式
        radians = 2 * Math.PI / 360,
        sin10 = Math.sin( 10 * radians ),
        cos10 = Math.cos( 10 * radians ),
        sin20 = Math.sin( 20 * radians ),
        cos20 = Math.cos( 20 * radians ),
        tan20 = Math.tan( 20 * radians );

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

        var decoration = generateDecoration(),
            vLine = generateVLine( radicand ),
            hLine = generateHLine( radicand );

        this.addOperatorShape( decoration );
        this.addOperatorShape( vLine );
        this.addOperatorShape( hLine );

        adjustmentPosition( mergeShape( decoration, vLine, hLine ), this.operator, radicand, exponent );

    }

    // 生成根号中的左边装饰部分
    function generateDecoration () {

        var shape = new kity.Path(),
        // 命名为a以便于精简表达式
            a = SHAPE_DATA_WIDTH,
            drawer = shape.getDrawer();

        // 根号尾部右上角开始
        drawer.moveTo( cos10 * 7 * a, 0 );
        drawer.lineTo( 0, sin10 * 7 * a );
        drawer.lineBy( sin20 * a * 2, cos20 * a * 2 );
        drawer.lineBy( cos10 * a * 3, -sin10 * a * 3 );
        drawer.lineBy( sin20 * a * 14, cos20 * a * 14 );
        drawer.lineBy( a * 2, 0 );
        drawer.lineBy( 0, -a *2 / sin20 );
        drawer.close();

        return shape.fill( "black" );

    }

    // 根据操作数生成根号的竖直线部分
    function generateVLine ( operand ) {

        var shape = new kity.Path(),
        // 命名为a以便于精简表达式
            a = SHAPE_DATA_WIDTH,
        // 表达式高度
            h = operand.getHeight(),
            drawer = shape.getDrawer();

        drawer.moveTo( tan20 * h, 0 );
        drawer.lineTo( 0, h );
        drawer.lineBy( sin20 * a * 3, cos20 * a * 3 );
        drawer.lineBy( tan20 * h + sin20 * a * 3, -( h + 3 * a * cos20 ) );
        drawer.close();

        return shape.fill( "black" );

    }

    // 根据操作数生成根号的水平线部分
    function generateHLine ( operand ) {

        // 表达式宽度
        var w = operand.getWidth() + 2 * SHAPE_DATA_WIDTH;

        return new kity.Rect( 0, 0, w, 2 * SHAPE_DATA_WIDTH ).fill( "black" );

    }

    // 合并根号的各个部分， 并返回根号的关键点位置数据
    function mergeShape ( decoration, vLine, hLine ) {

        var decoBox = decoration.getRenderBox(),
            vLineBox = vLine.getRenderBox();

        vLine.translate( decoBox.width - SHAPE_DATA_WIDTH , 0 );
        decoration.translate( 0, vLineBox.height - decoBox.height );

        vLineBox = vLine.getRenderBox();

        hLine.translate( vLineBox.x + vLineBox.width - SHAPE_DATA_WIDTH / cos20, 0 );

        // 返回关键点数据
        return {
            x: vLineBox.x + vLineBox.width - SHAPE_DATA_WIDTH / cos20,
            y: 0
        };

    }

    // 调整整个根号表达式的各个部分： 根号、被开方数、指数
    function adjustmentPosition ( position, operator, radicand, exponent ) {

        var radicandBox = radicand.getRenderBox(),
            diff = 0,
            width = 0,
            exponentBox = null;

        // 调整被开方数和根号的相对位置
        radicand.translate( position.x + SHAPE_DATA_WIDTH - radicandBox.x, position.y + 2 * SHAPE_DATA_WIDTH );

        if ( !exponent ) {

            return;

        }

        exponent.setAnchor( 0, 0 );
        exponent.scale( 0.5 );
        exponentBox = exponent.getRenderBox();
        // width代表适合放置指数的最小宽度
        width = exponentBox.width + exponentBox.height * tan20;

        // 指数宽度超过根号左边部分的宽度， 则移动根号和被开方数
        if ( width > position.x ) {

            diff = width - position.x;

            operator.translate( diff, 0 );
            radicand.translate( diff, 0 );

        // 否则， 移动指数
        } else {

            exponent.translate( position.x - width, 0 );

        }

    }

} );