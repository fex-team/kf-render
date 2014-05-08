/*!
 * 字体管理器
 */

define( function ( require ) {

    var FONT_LIST = {};

    return {

        registerFont: function ( fontData ) {
            FONT_LIST[ fontData.meta.fontFamily ] = fontData;
        },

        getFontList: function () {
            return FONT_LIST;
        },

        getCharacterMap: function ( fontFamily ) {

            if ( !FONT_LIST[ fontFamily ] ) {
                return null;
            }

            return FONT_LIST[ fontFamily ].map || {};

        },

        getCharacterData: function ( char, fontFamily ) {

            try {
                return FONT_LIST[ fontFamily ].data[ char ].d;
            } catch ( e ) {
                return null;
            }

        },

        /**
         * 按照指定的字体族， 返回给定的转义序列str所对应的unicode字符
         * 如果不存在对应的字体族或者该族内不存在对应的转义序列， 则返回空串
         * @param str 需要转义的序列
         * @param fontFamily 参考的字体族
         */
        getCharacterValue: function ( str, fontFamily ) {

            var map = this.getCharacterMap( fontFamily );

            if ( !map ) {
                return "";
            }

            return map[ str ] || "";

        }

    };

} );