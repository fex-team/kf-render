/**
 * 逆波兰表达式转换函数
 */

define( function ( require ) {

    var Utils = require( "impl/latex/base/utils" );

    return function ( units ) {

        var signStack = [],

            TYPE = require( "impl/latex/define/type"),

            currentUnit = null;

        // 先处理函数
        units = processFunction( units );

        while ( currentUnit = units.shift() ) {

            if ( Utils.isArray( currentUnit ) ) {

                signStack.push( arguments.callee( currentUnit ) );
                continue;

            }

            signStack.push( currentUnit );

        }

        return signStack;

    };

    /**
     * “latex函数”处理器
     * @param units 单元组
     * @returns {Array} 处理过后的单元组
     */
    function processFunction ( units ) {

        var processed = [],
            currentUnit = null;

        while ( currentUnit = units.shift() ) {

            if ( typeof currentUnit === "object" && currentUnit.sign === false ) {
                // 预先处理不可作为独立符号的函数
                processed.push( currentUnit.handler( currentUnit, processed, units ) );
            } else {
                processed.push( currentUnit );
            }

        }

        return processed;

    }

} );