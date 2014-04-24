/**
 * 文本
 */

define( function ( require, exports, module ) {

    var kity = require( "kity" ),

        CHAR_ALIASE = require( "char/map" ),

        FONT_DEFINE = require( "char/def" );


    return kity.createClass( 'Text', {

        base: require( "signgroup" ),

        constructor: function ( content, fontFamily ) {

            this.callBase();

            this.fontFamily = fontFamily || FONT_DEFINE.KF_AMS_MAIN;
            this.content = content || "";

            this.transformContent = transform( this.content );

            this.contentShape = new kity.Group();
            this.contentNode = this.createContent();
            this.contentShape.addShape( this.contentNode );

            this.contentShape.translate( 0, 40 );

            this.addShape( this.contentShape );

        },

        createContent: function () {

            var contentNode = new kity.Text( this.transformContent );

            contentNode.setAttr( {
                "font-family": this.fontFamily,
                "font-size": 50,
                x: 0,
                y: 0
            } );

            return contentNode;

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

        }

    } );

    function transform ( content ) {

        return content.replace( /\\([a-zA-Z]+)\\/g, function ( match, input ) {
            return CHAR_ALIASE[ input ];
        } );

    }

} );