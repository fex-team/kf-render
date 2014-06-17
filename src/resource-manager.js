/*!
 * 资源管理器
 * 负责管理资源的加载，并在资源ready之后提供Formula构造器
 */

define( function ( require ) {

    var kity = require( "kity" ),
        cbList = [],
        RES_CONF = require( "sysconf" ).resource,
        FontInstall = require( "font/installer" ),
        Formula = require( "formula" ),
        // 资源管理器就绪状态
        __readyState = false,
        // 资源管理器是否已启动
        inited = false;

    return {

        // 初始化
        ready: function ( cb, options ) {

            if ( !inited ) {
                inited = true;
                init( options );
            }

            if ( __readyState ) {
                window.setTimeout( function () {
                    cb( Formula );
                }, 0 );
            } else {
                cbList.push( cb );
            }

        }

    };

    /**
     * 资源初始化
     */
    function init ( options ) {

        var options = kity.Utils.extend( {}, RES_CONF, options );

        new FontInstall( document, options.path ).mount( complete );

    }

    function complete () {

        kity.Utils.each( cbList, function ( cb ) {

            cb( Formula );

        } );

    }

} );
