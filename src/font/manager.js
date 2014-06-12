/*!
 * 字体管理器
 */

define( function ( require ) {

    var FONT_LIST = {},
        kity = require( "kity" ),
        CONF = require( "sysconf" ).font.list;

    // init
    ( function () {

        kity.Utils.each( CONF, function ( fontData ) {
            FONT_LIST[ fontData.meta.fontFamily ] = fontData;
        } );

    } )();

    return {

        getFontList: function () {
            return FONT_LIST;
        },

        getCharacterValue: function ( key, fontFamily ) {

            if ( !FONT_LIST[ fontFamily ] ) {
                return null;
            }
            return FONT_LIST[ fontFamily ].map[ key ] || null;

        }

    };

} );