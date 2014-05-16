/**
 * 文本
 */

define( function ( require, exports, module ) {

    var kity = require( "kity" ),
        FontManager = require( "font/manager" );

    return kity.createClass( 'Text', {

        base: require( "signgroup" ),

        constructor: function ( content, fontFamily ) {

            this.callBase();

            this.fontFamily = fontFamily;
            this.fontSize = 50;
            this.content = content || "";

            this.translationContent = this.translation( this.content );

            this.contentShape = new kity.Group();
            this.contentNode = this.createContent();
            this.contentShape.addShape( this.contentNode );

            this.contentShape.translate( 0, 40 );

            this.addShape( this.contentShape );

        },

        createContent: function () {

            var contentNode = new kity.Text( this.translationContent );

            contentNode.setAttr( {
                "font-family": this.fontFamily,
                "font-size": 50,
                x: 0,
                y: 0
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
            return content.replace( /``/g, "\u201c" ).replace( /\\([a-zA-Z,{}]+)\\/g, function ( match, input ) {

                if ( input === "," ) {
                    return "\ufffc \ufffc";
                }

                var data = FontManager.getCharacterValue( input, fontFamily )

                if ( !data ) {
                    console.error( input+"丢失" )
                }

                return data;

            } );

        }

    } );

} );