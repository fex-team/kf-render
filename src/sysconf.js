/*!
 * 系统项目配置文件.
 */

define( function ( require ) {


    return {

        zoom: 0.66,

        font: {
            meanline: Math.round( 380 / 1000 * 50 ),
            baseline: Math.round( ( 800 ) / 1000 * 50 ),
            baseHeight: 50,
            // 系统字体列表
            list: [
                require( "font/map/kf-ams-main" ),
                require( "font/map/kf-ams-cal" ),
                require( "font/map/kf-ams-frak" ),
                require( "font/map/kf-ams-bb" ),
                require( "font/map/kf-ams-roman" )
            ]
        },

        /*------------------------- 资源配置*/
        resource: {
            path: 'src/resource/'
        },

        // 函数相关配置
        func: {
            // 上下标在函数名上下两侧的函数列表
            "ud-script": {
                "limit": true
            }
        }

    };

} );
