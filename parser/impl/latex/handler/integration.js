/*!
 * 积分函数处理器
 */

define( function ( require, exports, module ) {

    var extractFn = require( "impl/latex/handler/lib/int-extract" );

    return function ( info, processedStack, unprocessedStack ) {

        var count = unprocessedStack.shift(),
            params = extractFn( unprocessedStack );

        info.operand = [ params.exp, params.sup, params.sub ];
        // 参数配置调用
        info.callFn = {
            setType: [ count | 0 ]
        };

        delete info.handler;

        return info;

    };

} );