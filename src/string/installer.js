/**
 * Created by hn on 14-4-4.
 */

define( function ( require ) {

    var kity = require( "kity" );

    return kity.createClass( "FontInstaller", {

        constructor: function ( paper ) {

            this.paper = paper;

        },

        mount: function ( fontData ) {

            var NS = "http://www.w3.org/2000/svg",
                chardata = fontData.data;

            var font = document.createElementNS( NS, "font" ),
                attr = 'panose-1="2 0 6 3 0 0 0 0 0 0" ascent="800" descent="-200" x-height="441" cap-height="683" bbox="4 -271 1131 771" underline-thickness="50" underline-position="-100" unicode-range="U+0022-3009"';

            font.setAttribute( "horiz-adv-x", fontData.meta.x );

            var strArr = [ '<font-face '+ attr +' font-family="'+ fontData.meta.fontFamily + '" units-per-em="'+ fontData.meta[ "units-per-em" ] +'"></font-face>' ];

            kity.Utils.each( chardata, function ( char, key ) {

                strArr.push( '<glyph unicode="'+ key + '"' +( char.x !== null ? ( ' horiz-adv-x="' + char.x + '"' ) : '' ) + ' d="'+ char.d +'"/>' );

            } );

            strArr = strArr.join( "" );

            font.innerHTML = strArr;

            this.paper.addResource( {
                node: font
            } );

        }

    } );

} );