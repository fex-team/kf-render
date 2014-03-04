/*!
 * 函数表达式处理器
 */

define( function ( require, exports, module ) {

    var extractFn = require( "impl/latex/handler/lib/int-extract" );

    // 处理函数接口
    return function ( info, processedStack, unprocessedStack ) {

        var params = extractFn( unprocessedStack );

        info.operand = [ info.params, params.exp, params.sup, params.sub ];
        delete info.params;
        delete info.handler;

        return info;

    };

} );