/*!
 * 上下标控制器`  1``     ``  `   `       `432    1`
 */

define( function ( require ) {

    var kity = require( "kity" ),
        EmptyExpression = require( "expression/empty" ),
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

        /**
         * 返回应用上下标后的空间占用情况，其中的key各自的意义是：
         * top: 上空间偏移
         * bottom: 下空间偏移
         * width: 当前整个图形的实际占用空间的width
         * height: 当前整个图形的实际占用空间的height
         * @returns {*}
         */
        applySide: function () {

            var target = this.target,
                sup = this.sup,
                sub = this.sub,
                options = this.options;

            if ( EmptyExpression.isEmpty( sup ) && EmptyExpression.isEmpty( sub ) ) {
                var targetRectBox = target.getFixRenderBox();
                return {
                    width: targetRectBox.width,
                    height: targetRectBox.height,
                    top: 0,
                    bottom: 0
                };
            } else {

                // 下标处理
                if ( EmptyExpression.isEmpty( sup ) && !EmptyExpression.isEmpty( sub ) ) {
                    return this.applySideSub( target, sub );
                // 上标处理
                } else if ( !EmptyExpression.isEmpty( sup ) && EmptyExpression.isEmpty( sub ) ) {
                    return this.applySideSuper( target, sup );
                // 上下标处理
                } else {
                    return this.applySideScript( target, sup, sub );
                }

            }

        },

        applySideSuper: function ( target, sup ) {

            sup.scale( this.options.zoom );

            var targetRectBox = target.getFixRenderBox(),
                supRectBox = sup.getFixRenderBox(),
                targetMeanline = target.getMeanline(),
                targetBaseline = target.getBaseline(),
                supBaseline = sup.getBaseline(),
                positionline = targetMeanline,
                diff = supBaseline - positionline,
                space = {
                    top: 0,
                    bottom: 0,
                    width: targetRectBox.width + supRectBox.width,
                    height: targetRectBox.height
                };

            sup.translate( targetRectBox.width, 0 );

            if ( diff > 0 ) {
                target.translate( 0, diff );
                space.bottom = diff;
                space.height += diff;
            } else {
                sup.translate( 0, -diff );
            }

            return space;

        },

        applySideSub: function ( target, sub ) {

            sub.scale( this.options.zoom );

            var targetRectBox = target.getFixRenderBox(),
                subRectBox = sub.getFixRenderBox(),
                targetMeanline = target.getMeanline(),
                targetBaseline = target.getBaseline(),
                positionline = targetMeanline + ( targetBaseline - targetMeanline ) * 2 / 3,
                subMeanline = sub.getMeanline(),
                diff = targetRectBox.height - positionline - ( subRectBox.height - subMeanline ),
                space = {
                    top: 0,
                    bottom: 0,
                    width: targetRectBox.width + subRectBox.width,
                    height: targetRectBox.height
                };

            sub.translate( targetRectBox.width, positionline - subMeanline );

            if ( diff < 0 ) {
                space.top = -diff;
                space.height -= diff;
            }

            return space;

        },

        applySideScript: function ( target, sup, sub ) {

            sup.scale( this.options.zoom );
            sub.scale( this.options.zoom );

            var targetRectBox = target.getFixRenderBox(),
                subRectBox = sub.getFixRenderBox(),
                supRectBox = sup.getFixRenderBox(),
                targetMeanline = target.getMeanline(),
                targetBaseline = target.getBaseline(),
                supBaseline = sup.getBaseline(),
                // 上下标都存在时， 下标的定位以上伸线为准
                subAscenderline = sub.getAscenderline(),
                supPosition = targetMeanline,
                subPosition = targetMeanline + ( targetBaseline - targetMeanline ) * 2 / 3,
                topDiff = supPosition - supBaseline,
                bottomDiff = targetRectBox.height - subPosition - ( subRectBox.height - subAscenderline ),
                space = {
                    top: 0,
                    bottom: 0,
                    width: targetRectBox.width + Math.max( subRectBox.width, supRectBox.width ),
                    height: targetRectBox.height
                };

            sup.translate( targetRectBox.width, topDiff );
            sub.translate( targetRectBox.width, subPosition - subAscenderline );

            // 定位纠正
            if ( topDiff > 0 ) {

                if ( bottomDiff < 0 ) {
                    targetRectBox.height -= bottomDiff;
                    space.top = -bottomDiff;
                }

            } else {

                target.translate( 0, -topDiff );
                sup.translate( 0, -topDiff );
                sub.translate( 0, -topDiff );

                if ( bottomDiff > 0 ) {
                    targetRectBox.height -= topDiff;
                    space.bottom = -topDiff;
                } else {

                    // 比较上下偏移， 获取正确的偏移值
                    topDiff = -topDiff;
                    bottomDiff = -bottomDiff;

                    if ( topDiff > bottomDiff ) {
                        targetRectBox.height += topDiff - bottomDiff;
                        space.bottom = topDiff - bottomDiff;
                    } else {
                        targetRectBox.height += bottomDiff - topDiff;
                        space.top = bottomDiff - topDiff;
                    }

                }

            }

            return space;

        }

    } );

} );
