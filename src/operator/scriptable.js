/**
 * 上下标操作符
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' ),
        SCRIPT_TYPE = require( "def/script-type" );

    return kity.createClass( 'ScriptableOperator', {

        base: require( "operator/operator" ),

        constructor: function () {

            this.callBase( "Scriptable" );

        },

        applyOperand: function ( operand, sup, sub ) {

            sup.setAnchor( 0, 0 ).scale( 0.66 );
            sub.setAnchor( 0, 0 ).scale( 0.66);

            switch ( this.parentExpression.getScriptType() ) {

                case SCRIPT_TYPE.FOLLOW:
                    applyFollowScript.apply( this, arguments );
                    break;

                case SCRIPT_TYPE.SIDE:
                    applySideScript.apply( this, arguments )
                    break;

            }

        }

    } );

    function applySideScript ( operand, sup, sub ) {

        sup.setAnchor( 0, 0 ).scale( 0.8 );
        sub.setAnchor( 0, 0 ).scale( 0.8 );

        var operandBox = operand.getRenderBox();

        // 默认字符高度
        operandBox.height = operandBox.height || 50;

        // 基础空间大小
        var supBox = sup.getRenderBox(),
            subBox = sub.getRenderBox(),
            // 下标所需偏移值
            subOffset = this.parentExpression.getSubOffset(),
            maxOffset = Math.max( supBox.height, subBox.height ),
            vOffset = maxOffset - operandBox.height / 2,
            space = {
                width: operandBox.width + Math.max( supBox.width, subBox.width ),
                height: 0
            };

        // 水平方向调整
        sup.translate( operandBox.width, 0 );
        sub.translate( operandBox.width, 0 );

        if ( vOffset > 0 ) {

            operand.translate( 0, vOffset );

            // 上标偏移
            if ( supBox.height <= operandBox.height / 2 ) {
                sup.translate( 0, vOffset );
            } else {
                sup.translate( 0, vOffset - ( supBox.height - operandBox.height / 2 ) );
            }

            // 下标偏移
            if ( subBox.height <= operandBox.height / 2 ) {
                sub.translate( 0, vOffset + operandBox.height - subBox.height );
            } else {
                sub.translate( 0, vOffset + operandBox.height / 2 );
            }

        } else if ( vOffset < 0 ) {
            sub.translate( 0, operandBox.height - subBox.height );
            vOffset = 0;
        }

        if ( subOffset !== 0 ) {
            sub.translate( subOffset, 0 );
        }

        if ( vOffset === 0 ) {
            space.height = operandBox.height;
        } else {
            space.height = vOffset * 2 + operandBox.height;
        }

        this.parentExpression.updateSpace( space );

    }

    function applyFollowScript ( operand, sup, sub ) {

        sup.setAnchor( 0, 0 ).scale( 0.8 );
        sub.setAnchor( 0, 0 ).scale( 0.8 );

        var operandBox = operand.getRenderBox();

        // 默认字符高度
        operandBox.height = operandBox.height || 50;

        // 基础空间大小
        var supBox = sup.getRenderBox(),
            subBox = sub.getRenderBox(),
            maxOffset = Math.max( supBox.height, subBox.height ),
            maxWidth = Math.max( operandBox.width, supBox.width, subBox.width ),
            space = {
                width: maxWidth,
                height: maxOffset * 2 + operandBox.height
            };

        // 竖直方向调整
        operand.translate( 0, maxOffset );
        sup.translate( 0, maxOffset - supBox.height );
        sub.translate( 0, maxOffset + operandBox.height );

        // 水平方向调整
        if ( operandBox.width < maxWidth ) {
            operand.translate( ( maxWidth - operandBox.width ) / 2, 0 )
        }

        if ( supBox.width < maxWidth ) {
            sup.translate( ( maxWidth - supBox.width )/ 2, 0 );
        }

        if ( subBox.width < maxWidth ) {
            sub.translate( ( maxWidth - subBox.width ) / 2, 0 );
        }

        this.parentExpression.updateSpace( space );

    }

} );