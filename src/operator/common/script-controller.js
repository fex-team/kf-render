/*!
 * 上下标控制器`  1``     ``  `   `       `432    1`
 */

define( function ( require ) {

    var kity = require( "kity" ),
        defaultOptions = {
            subOffset: 0,
            supOffset: 0,
            // 上下标的默认缩放值
            zoom: 0.66
        };

    return kity.createClass( "ScriptController", {

        constructor: function ( opObj, target, sup, sub, options ) {

            this.opObj = opObj;
            this.target = target;
            this.sup = sup;
            this.sub = sub;
            this.options = kity.Utils.extend( {}, defaultOptions, options );

        },

        // 上下标记
        applyUpDown: function () {

            var target = this.target,
                sup = this.sup,
                sub = this.sub,
                options = this.options;

            sup.scale( options.zoom );
            sub.scale( options.zoom );

            var targetBox = target.getFixRenderBox();

            // 基础空间大小
            var supBox = sup.getFixRenderBox(),
                subBox = sub.getFixRenderBox(),
                maxOffset = Math.max( supBox.height, subBox.height ),
                space = {
                    width: Math.max( targetBox.width, supBox.width, subBox.width ),
                    height: maxOffset * 2 + targetBox.height
                },
                targetHeight = targetBox.height,
                vOffset = 0;

            if ( supBox.height < maxOffset ) {
                vOffset = maxOffset - supBox.height;
            }

            // 位置调整
            sup.translate( ( space.width - supBox.width ) / 2, vOffset );
            target.translate( ( space.width - targetBox.width ) / 2, maxOffset );
            sub.translate( ( space.width - subBox.width ) / 2, maxOffset + targetBox.height );

            return space;

        },

        // 侧面标记
        applySide: function () {

            var target = this.target,
                sup = this.sup,
                sub = this.sub,
                options = this.options;
            
            sup.scale( options.zoom );
            sub.scale( options.zoom );

            var targetBox = target.getFixRenderBox();

            // 默认字符高度
            targetBox.height = targetBox.height || 50;

            // 基础空间大小
            var supBox = sup.getFixRenderBox(),
                subBox = sub.getFixRenderBox(),
                maxOffset = Math.max( supBox.height, subBox.height ),
                space = {
                    width: targetBox.width + Math.max( supBox.width + options.supOffset, subBox.width + options.subOffset ),
                    height: 0
                },
                targetHeight = targetBox.height,
                vOffset = 0;

            // 水平方向调整
            sup.translate( targetBox.width + options.supOffset, 0 );
            sub.translate( targetBox.width + options.subOffset, 0 );

            if ( maxOffset * 2 < targetHeight ) {
                sub.translate( 0, targetHeight - subBox.height );
                space.height = targetHeight;
            } else {

                vOffset = maxOffset - targetHeight / 2;
                target.translate( 0, vOffset );

                if ( supBox.height < targetHeight / 2 ) {
                    sup.translate( 0, vOffset );
                } else {
                    sup.translate( 0, maxOffset - supBox.height );
                }

                if ( subBox.height < targetHeight / 2 ) {
                    sub.translate( 0, vOffset + targetHeight - subBox.height );
                } else {
                    sub.translate( 0, maxOffset * 2 - subBox.height );
                }

                space.height = maxOffset * 2;

            }

            return space;

        }

    } );

} );
