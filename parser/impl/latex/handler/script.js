/*!
 * 上下标操作符函数处理
 */

define( function ( require, exports, module ) {

    // 处理函数接口
    return function ( info, processedStack, unprocessedStack ) {

        var base = processedStack.pop(),
            script = unprocessedStack.shift() || null;

        if ( !script ) {
            throw new Error( "Missing script" );
        }

        if ( base.name === info.name || base.name === "script" ) {
            throw new Error( "script error" );
        }

        // 执行替换
        if ( base.name === "subscript" ) {

            base.name = "script";
            base.operand[ 2 ] = base.operand[ 1 ];
            base.operand[ 1 ] = script;

            return base;

        } else if ( base.name === "superscript" ) {

            base.name = "script";
            base.operand[ 2 ] = script;

            return base;

        }

        info.operand = [ base, script ];

        // 删除处理器
        delete info.handler;

        return info;

    };

} );