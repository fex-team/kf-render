/*!
 * 全局定义
 */

define( function ( require ) {

    return {
        font: {
            defaultFont: "KF AMS MAIN",
            list: [
                require( "font/kf-ams-main" ),
                require( "font/kf-ams-cal" ),
                require( "font/kf-ams-roman" ),
                require( "font/kf-ams-frak" ),
                require( "font/kf-ams-bb" )
            ]
        }
    };

} );