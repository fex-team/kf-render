/**
 * 预处理器列表
 */

define( function ( require, exports, module ) {

    return {

        // 方根预处理器
        sqrt: require( "impl/latex/pre/sqrt" ),

        // 积分预处理器
        int: require( "impl/latex/pre/int" )

    };

} );