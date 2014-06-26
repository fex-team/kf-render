/*!
 * 字体安装器
 */

define( function ( require ) {

    var kity = require( "kity" ),
        FontManager = require( "font/manager" ),
        $ = require( "jquery" ),
        FONT_CONF = require( "sysconf" ).font,
        CHAR_LIST = require( "char/char-list" ),
        NODE_LIST = [];

    return kity.createClass( "FontInstaller", {

        constructor: function ( doc, resource ) {
            this.callBase();
            this.resource = resource || "../src/resource/";
            this.doc = doc;
        },

        // 挂载字体
        mount: function ( callback ) {

            var fontList = FontManager.getFontList(),
                count = 0,
                _self = this;

            kity.Utils.each( fontList, function ( fontInfo ) {

                count++;

                fontInfo.meta.src = _self.resource + fontInfo.meta.src;

                _self.createFontStyle( fontInfo );

                preload( _self.doc, fontInfo, function () {

                    count--;

                    if ( count === 0 ) {
                        complete( _self.doc, callback );
                    }

                } );

            } );

        },

        createFontStyle: function ( fontInfo ) {

            var stylesheet = this.doc.createElement( "style" ),
                tpl = '@font-face{\nfont-family: "${fontFamily}";\nsrc: url("${src}");\n}';

            stylesheet.setAttribute( "type", "text/css" );
            stylesheet.innerHTML = tpl.replace( '${fontFamily}', fontInfo.meta.fontFamily )
                                       .replace( '${src}', fontInfo.meta.src );

            this.doc.head.appendChild( stylesheet );

        }

    } );


    function preload ( doc, fontInfo, callback ) {

        $.get( fontInfo.meta.src, function ( data, state ) {

            if ( state === "success" ) {
                applyFonts( doc, fontInfo );
            }

            callback();

        } );

    }

    function complete ( doc, callback ) {

        window.setTimeout( function () {
            initFontSystemInfo( doc );
            removeTmpNode();
            callback();
        }, 100 );

    }

    function applyFonts ( doc, fontInfo ) {

        var node = document.createElement( "div"),
            fontFamily = fontInfo.meta.fontFamily;

        node.style.cssText = 'position: absolute; top: -10000px; left: -100000px;';

        node.style.fontFamily = fontFamily;
        node.innerHTML = CHAR_LIST.join( "" );

        doc.body.appendChild( node );
        NODE_LIST.push( node );

    }

    /**
     * 计算字体系统信息
     */
    function initFontSystemInfo ( doc ) {

        var tmpNode = doc.createElement( "div" );

        tmpNode.style.cssText = 'position: absolute; top: 0; left: -100000px;';
        tmpNode.innerHTML = require( "font/checker-tpl" ).join( "" );

        doc.body.appendChild( tmpNode );

        var rectBox = tmpNode.getElementsByTagName( "text" )[ 0 ].getBBox();

        // text实际占用空间
        FONT_CONF.spaceHeight = rectBox.height;

        // text顶部空间
        FONT_CONF.topSpace = -rectBox.y - FONT_CONF.baseline;
        FONT_CONF.bottomSpace = FONT_CONF.spaceHeight - FONT_CONF.topSpace -  FONT_CONF.baseHeight;

        // text偏移值
        FONT_CONF.offset = FONT_CONF.baseline + FONT_CONF.topSpace;

        // baseline比例
        FONT_CONF.baselinePosition = ( FONT_CONF.topSpace + FONT_CONF.baseline ) / FONT_CONF.spaceHeight;
        // meanline比例
        FONT_CONF.meanlinePosition = ( FONT_CONF.topSpace + FONT_CONF.meanline ) / FONT_CONF.spaceHeight;

        // 上下延伸性比例
        FONT_CONF.ascenderPosition = FONT_CONF.topSpace / FONT_CONF.spaceHeight;
        FONT_CONF.descenderPosition = ( FONT_CONF.topSpace + FONT_CONF.baseHeight ) / FONT_CONF.spaceHeight;


        doc.body.removeChild( tmpNode );

    }

    function removeTmpNode () {

        kity.Utils.each( NODE_LIST, function ( node ) {

            node.parentNode.removeChild( node );

        } );

        NODE_LIST = [];

    }

} );