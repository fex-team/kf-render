/**
 * 文本
 */

define( function ( require ) {

    var kity = require( "kity" ),
        FONT_CONF = require( "sysconf" ).font,
        FontManager = require( "font/manager" ),
        TextFactory = require( "char/text-factory" );

    return kity.createClass( 'Text', {

        base: require( "signgroup" ),

        constructor: function ( content, fontFamily ) {

            this.callBase();

            this.fontFamily = fontFamily;
            this.fontSize = 50;
            this.content = content || "";

            // 移除多余的节点
            this.box.remove();

            this.translationContent = this.translation( this.content );

            this.contentShape = new kity.Group();
            this.contentNode = this.createContent();
            this.contentShape.addShape( this.contentNode );

            this.addShape( this.contentShape );

        },

        createContent: function () {

            var contentNode = TextFactory.create( this.translationContent );

            contentNode.setAttr( {
                "font-family": this.fontFamily,
                "font-size": 50,
                x: 0,
                y: FONT_CONF.offset
            } );

            return contentNode;

        },

        setFamily: function ( fontFamily ) {
            this.fontFamily = fontFamily;
            this.contentNode.setAttr( "font-family", fontFamily );
        },

        setFontSize: function ( fontSize ) {
            this.fontSize = fontSize;
            this.contentNode.setAttr( "font-size", fontSize + "px" );
            this.contentNode.setAttr( "y", fontSize / 50 * FONT_CONF.offset );
        },

        getBaseHeight: function () {

            var chars = this.contentShape.getItems(),
                currentChar = null,
                index = 0,
                height = 0;

            while ( currentChar = chars[ index ] ) {

                height = Math.max( height, currentChar.getHeight() );
                index++;

            }

            return height;

        },

        translation: function ( content ) {

            var fontFamily = this.fontFamily;

            // 首先特殊处理掉两个相连的"`"符号
            return content.replace( /``/g, "\u201c" ).replace( /\\([a-zA-Z,]+)\\/g, function ( match, input ) {

                if ( input === "," ) {
                    return " ";
                }

                var data = FontManager.getCharacterValue( input, fontFamily );

                if ( !data ) {
                    console.error( "missing code: " + input );
                    return '';
                }

                return data;

            } );

        }

    } );

} );