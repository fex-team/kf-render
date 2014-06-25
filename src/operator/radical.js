/**
 * 开方操作符
 */

define( function ( require ) {

    var kity = require( "kity" ),

        // 符号图形属性
        // 线条宽度
        SHAPE_DATA_WIDTH = 1,

        // 计算公式
        radians = 2 * Math.PI / 360,
        sin15 = Math.sin( 15 * radians ),
        cos15 = Math.cos( 15 * radians ),
        tan15 = Math.tan( 15 * radians );

    return kity.createClass( 'RadicalOperator', {

        base: require( "operator/operator" ),

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
            padding = 5,
            hLine = generateHLine( radicand );

        this.addOperatorShape( decoration );
        this.addOperatorShape( vLine );
        this.addOperatorShape( hLine );

        adjustmentPosition.call( this, mergeShape( decoration, vLine, hLine ), this.operatorShape, radicand, exponent );

        this.parentExpression.expand( 0, padding * 2 );
        this.parentExpression.translateElement( 0, padding );

    }

    // 生成根号中的左边装饰部分
    function generateDecoration ( radicand ) {

        var shape = new kity.Path(),
            // 命名为a以便于精简表达式
            a = SHAPE_DATA_WIDTH,
            h = ( radicand.getHeight() ) / 3,
            drawer = shape.getDrawer();

        // 根号尾部左上角开始
        drawer.moveTo( 0, cos15 * a * 6 );
        drawer.lineBy( sin15 * a , cos15 * a );
        drawer.lineBy( cos15 * a * 3, -sin15 * a * 3 );
        drawer.lineBy( tan15 * h, h );
        drawer.lineBy( sin15 * a * 3, -cos15 * a * 3 );
        drawer.lineBy( -sin15 * h, - h );
        drawer.close();

        return shape.fill( "black" );

    }

    // 根据操作数生成根号的竖直线部分
    function generateVLine ( operand ) {

        var shape = new kity.Path(),
            // * 0.9 是为了在视觉上使斜线部分不至于太高
            h = operand.getHeight() * 0.9,
            drawer = shape.getDrawer();

        drawer.moveTo( tan15 * h, 0 );
        drawer.lineTo( 0, h );
        drawer.lineBy( sin15 * SHAPE_DATA_WIDTH * 3, cos15 * SHAPE_DATA_WIDTH * 3 );
        drawer.lineBy( tan15 * h + sin15 * SHAPE_DATA_WIDTH * 3, -( h + 3 * SHAPE_DATA_WIDTH * cos15 ) );
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

        var decoBox = decoration.getFixRenderBox(),
            vLineBox = vLine.getFixRenderBox();

        vLine.translate( decoBox.width - sin15 * SHAPE_DATA_WIDTH * 3, 0 );
        decoration.translate( 0, vLineBox.height - decoBox.height );
        vLineBox = vLine.getFixRenderBox();

        hLine.translate( vLineBox.x + vLineBox.width - SHAPE_DATA_WIDTH / cos15, 0 );

        // 返回关键点数据
        return {
            x: vLineBox.x + vLineBox.width - SHAPE_DATA_WIDTH / cos15,
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
            opBox = operator.getFixRenderBox();

        exponent.scale( 0.66 );
        exponentBox = exponent.getFixRenderBox();

        if ( exponentBox.width > 0 && exponentBox.height > 0 ) {

            opOffset.y = exponentBox.height - opBox.height / 2;

            // 指数不超出根号， 则移动指数
            if ( opOffset.y < 0 ) {
                exponent.translate( 0, -opOffset.y );
                opOffset.y = 0;
            }

            opOffset.x = exponentBox.width + ( opBox.height / 2 ) * tan15 - position.x;
        }

        operator.translate( opOffset.x, opOffset.y );

        radicand.translate( opOffset.x + position.x + SHAPE_DATA_WIDTH, opOffset.y + 2 * SHAPE_DATA_WIDTH );

    }

} );