/*!
 * 上下标控制器
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

            this.observer = opObj.getParentExpression();
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

            if ( EmptyExpression.isEmpty( sup ) && EmptyExpression.isEmpty( sub ) ) {
                return {
                    width: targetBox.width,
                    height: targetBox.height,
                    top: 0,
                    bottom: 0
                };
            } else {

                // 上标
                if ( !EmptyExpression.isEmpty( sup ) && EmptyExpression.isEmpty( sub ) ) {
                    return this.applyUp( target, sup );
                } else if ( EmptyExpression.isEmpty( sup ) && !EmptyExpression.isEmpty( sub ) ) {
                    return this.applyDown( target, sub );
                } else {
                    return this.applyUpDownScript( target, sup, sub );
                }

            }

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
                sub = this.sub;

            if ( EmptyExpression.isEmpty( sup ) && EmptyExpression.isEmpty( sub ) ) {
                var targetRectBox = target.getRenderBox( this.observer );
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

            var targetRectBox = target.getRenderBox( this.observer ),
                supRectBox = sup.getRenderBox( this.observer ),
                targetMeanline = target.getMeanline( this.observer ),
                supBaseline = sup.getBaseline( this.observer ),
                positionline = targetMeanline,
                diff = supBaseline - positionline,
                space = {
                    top: 0,
                    bottom: 0,
                    width: targetRectBox.width + supRectBox.width,
                    height: targetRectBox.height
                };

            sup.translate( targetRectBox.width, 0 );

            if ( this.options.supOffset ) {
                sup.translate( this.options.supOffset, 0 );
            }

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

            var targetRectBox = target.getRenderBox( this.observer ),
                subRectBox = sub.getRenderBox( this.observer ),
                subOffset = sub.getOffset(),
                targetBaseline = target.getBaseline( this.observer ),
                // 下标定位线
                subPosition = ( subRectBox.height + subOffset.top + subOffset.bottom ) / 2,
                diff = targetRectBox.height - targetBaseline - subPosition,
                space = {
                    top: 0,
                    bottom: 0,
                    width: targetRectBox.width + subRectBox.width,
                    height: targetRectBox.height
                };

            // 定位下标位置
            sub.translate( targetRectBox.width, subOffset.top + targetBaseline - subPosition );

            if ( this.options.subOffset ) {
                sub.translate( this.options.subOffset, 0 );
            }

            if ( diff < 0 ) {
                space.top = -diff;
                space.height -= diff;
            }

            return space;

        },

        applySideScript: function ( target, sup, sub ) {

            sup.scale( this.options.zoom );
            sub.scale( this.options.zoom );

            var targetRectBox = target.getRenderBox( this.observer ),
                subRectBox = sub.getRenderBox( this.observer ),
                supRectBox = sup.getRenderBox( this.observer ),
                targetMeanline = target.getMeanline( this.observer ),
                targetBaseline = target.getBaseline( this.observer ),
                supBaseline = sup.getBaseline( this.observer ),
                // 上下标都存在时， 下标的定位以上伸线为准
                subAscenderline = sub.getAscenderline( this.observer ),
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

            if ( this.options.supOffset ) {
                sup.translate( this.options.supOffset, 0 );
            }

            if ( this.options.subOffset ) {
                sub.translate( this.options.subOffset, 0 );
            }

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

                space.height -= topDiff;

                if ( bottomDiff > 0 ) {
                    space.bottom = -topDiff;
                } else {

                    space.height -= bottomDiff;

                    // 比较上下偏移， 获取正确的偏移值
                    topDiff = -topDiff;
                    bottomDiff = -bottomDiff;

                    if ( topDiff > bottomDiff ) {
                        space.bottom = topDiff - bottomDiff;
                    } else {
                        space.top = bottomDiff - topDiff;
                    }

                }

            }

            return space;

        },

        applyUp: function ( target, sup ) {

            var supBox = sup.getFixRenderBox(),
                targetBox = target.getFixRenderBox(),
                space = {
                    width: Math.max( targetBox.width, supBox.width ),
                    height: supBox.height + targetBox.height,
                    top: 0,
                    bottom: supBox.height
                };

            sup.translate( ( space.width - supBox.width ) / 2, 0 );
            target.translate( ( space.width - targetBox.width ) / 2, supBox.height );

            return space;

        },

        applyDown: function ( target, sub ) {

            var subBox = sub.getFixRenderBox(),
                targetBox = target.getFixRenderBox(),
                space = {
                    width: Math.max( targetBox.width, subBox.width ),
                    height: subBox.height + targetBox.height,
                    top: subBox.height,
                    bottom: 0
                };

            sub.translate( ( space.width - subBox.width ) / 2, targetBox.height );
            target.translate( ( space.width - targetBox.width ) / 2, 0 );

            return space;

        }

    } );

} );
