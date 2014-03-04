/*!
 * 求和函数处理器
 */

define( function ( require, exports, module ) {

    var extractFn = require( "impl/latex/handler/lib/int-extract" );

    return function ( info, processedStack, unprocessedStack ) {

        var params = extractFn( unprocessedStack );

        info.operand = [ params.exp, params.sup, params.sub ];

        delete info.handler;

        return info;

    };

} );