/**
 * 小括号操作符：()
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SYMBOL_DATA = require( "char/data" );

    return kity.createClass( 'BracketsOperator', {

        base: require( "operator/operator" ),

        constructor: function () {

            this.callBase( "Brackets" );

        },

        applyOperand: function ( leftBrackets, rightBrackets, exp ) {

            generate.call( this, leftBrackets, rightBrackets, exp );

        }

    } );

    function generate ( left, right, exp ) {

        var leftPath = SYMBOL_DATA.std[ left ].path,
            rightPath = SYMBOL_DATA.std[ right ].path,
            group = new kity.Group(),
            leftOp = new kity.Path( leftPath ).fill( "black" ),
            rightOp = new kity.Path( rightPath ).fill( "black" ),
            expSpaceSize = exp.getRenderBox(),
            leftOpSize = null,
            rightOpSize = null,
            leftZoom = 1,
            rightZoom = 1,
            // 左右空间大小
            SPACE = 2,
            offset = 0;

        this.addOperatorShape( group.addShape( leftOp ).addShape( rightOp ) );

        leftOpSize = leftOp.getRenderBox();
        rightOpSize = rightOp.getRenderBox();

        leftZoom = expSpaceSize.height ? expSpaceSize.height / leftOpSize.height : 1;
        rightZoom = expSpaceSize.height ? expSpaceSize.height / rightOpSize.height : 1;

        if ( leftZoom > 1 ) {
            leftOp.setAnchor( 0, 0 ).scale( 1 + ( leftZoom - 1 ) / 2, leftZoom );
        }

        if ( rightZoom > 1 ) {
            rightOp.setAnchor( 0, 0 ).scale( 1 + ( rightZoom - 1 ) / 2, rightZoom );
        }

        // 重新获取大小
        leftOpSize = leftOp.getRenderBox();
        rightOpSize = rightOp.getRenderBox();

        offset += SPACE;
        leftOp.translate( offset, 0 );

        offset += SPACE + leftOpSize.width;
        exp.translate( offset, 0 );

        offset += SPACE + expSpaceSize.width;
        rightOp.translate( offset, 0 );

//        this.setBoxSize( offset + rightOpSize.width + SPACE, expSpaceSize.height );

    }

} );
