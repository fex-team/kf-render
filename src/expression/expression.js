/**
 * 基础表达式， 该类是表达式和操作数的高层抽象
 * @abstract
 */

define( function ( require, exports, module ) {

    var kity = require( "kity"),

        // 打包函数列表
        WRAP_FN = [],

        Expression = kity.createClass( 'Expression', {

            base: require( "signgroup" ),

            getBaseWidth: function () {

                return this.getWidth();

            },

            getBaseHeight: function () {

                return this.getHeight();

            }

        } );

    // 表达式自动打包
    kity.Utils.extend( Expression, {

        registerWrap: function ( fn ) {

            WRAP_FN.push( fn );

        },

        // 打包函数
        wrap: function ( operand ) {

            var result = undefined;

            kity.Utils.each( WRAP_FN, function ( fn ) {

                result = fn( operand );

                if ( result ) {
                    return false;
                }

            } );

            return result;

        }

    } );

    return Expression;

} );