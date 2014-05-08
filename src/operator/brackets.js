/**
 * 小括号操作符：()
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        FontManager = require( "font/manager" );

    return kity.createClass( 'BracketsOperator', {

        base: require( "operator/operator" ),

        constructor: function () {

            this.callBase( "Brackets" );

        },

        applyOperand: function ( exp ) {

            generate.call( this, exp );

        }

    } );

    function generate ( exp ) {

        var left = this.getParentExpression().getLeftSymbol(),
            right = this.getParentExpression().getRightSymbol(),
            leftPath = FontManager.getCharacterData( left, "KF AMS MAIN" ),
            rightPath = FontManager.getCharacterData( right, "KF AMS MAIN" ),
            group = new kity.Group(),
            leftOp = new kity.Path( leftPath ).fill( "black" ),
            rightOp = new kity.Path( rightPath ).fill( "black" ),
            expSpaceSize = exp.getFixRenderBox(),
            leftOpSize = null,
            rightOpSize = null,
            leftZoom = 1,
            rightZoom = 1,
            // 左右空间大小
            SPACE = 0,
            offset = 0;

        this.addOperatorShape( group.addShape( leftOp ).addShape( rightOp ) );

        leftOpSize = leftOp.getFixRenderBox();
        rightOpSize = rightOp.getFixRenderBox();

        leftZoom = expSpaceSize.height ? expSpaceSize.height / leftOpSize.height : 1;
        rightZoom = expSpaceSize.height ? expSpaceSize.height / rightOpSize.height : 1;

        leftOp.scale( leftZoom );
        rightOp.scale( rightZoom );

        // 重新获取大小
        leftOpSize = leftOp.getFixRenderBox();
        rightOpSize = rightOp.getFixRenderBox();

        offset -= leftOpSize.x;
        leftOp.translate( offset, -leftOpSize.y );

        offset += SPACE + leftOpSize.width - expSpaceSize.x;
        exp.translate( offset, 0 );

        offset += SPACE + expSpaceSize.width - rightOpSize.x;
        rightOp.translate( offset, -rightOpSize.y );

        this.parentExpression.expand( 10, 0 );
        this.parentExpression.translateElement( 5, 0 );

    }

} );
