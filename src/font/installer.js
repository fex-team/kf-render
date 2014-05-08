/*!
 * 字体管理器
 */

define( function ( require ) {

    var kity = require( "kity" ),
        NS = "http://www.w3.org/2000/svg";

    return kity.createClass( "FontInstaller", {

        constructor: function ( paper ) {
            this.paper = paper;
        },

        // 挂载字体
        mount: function ( fontData ) {

            var chardata = fontData.data,
                font = document.createElementNS( NS, "font" ),
                attr = fontData.meta.attr;

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