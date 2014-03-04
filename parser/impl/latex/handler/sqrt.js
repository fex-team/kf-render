/*!
 * 方根函数处理器
 */

define( function ( require, exports, module ) {

    // 处理函数接口
    return function ( info, processedStack, unprocessedStack ) {

        var exponent = unprocessedStack.shift(),
            // 被开方数
            radicand = unprocessedStack.shift();

        info.operand = [ radicand, exponent ];

        delete info.handler;

        return info;

    };

} );