/**
 * Created by hn on 14-4-4.
 */

var fs = require( "fs" );


var file = fs.readFileSync( "./all.svg", {
    encoding: "utf-8"
} );

var res = {},
    tmp = null;

var count = 0,
    pattern = /<glyph([\s\S]*?)>/gi,
    str = null,
    key = null,
    horiz = null,
    d = null,
    t = null;

while ( tmp = pattern.exec( file ) ) {

    count++;

    if ( count > 2000 ) {
        console.log("error");
        break;
    }

    str = tmp[ 1 ];

    if ( !( tmp = /unicode="([^"]+)"/i.exec( str ) ) ) {
        continue;
    }

    key = tmp[ 1 ];

    if ( /^&#x/.test( key ) ) {
        key = key.replace( /^&#x|;$/gi, "" );

        switch ( key.length ) {
            case 1:
                key = "\\u000" + key;
                break;
            case 2:
                key = "\\u00" + key;
                break;
            case 3:
                key = "\\u0" + key;
                break;
            case 4:
                key = "\\u" + key;
                break;
        }
    }

    horiz = null;
    if ( tmp = /horiz-adv-x="([^"]*)"/i.exec( str ) ) {
        horiz = tmp[ 1 ];
    }

    if ( !( tmp = /d="([^"]*)"/i.exec( str ) ) ) {
        continue;
    }
    d = tmp[ 1 ];

    if ( key === "\\" ) {
        key = "\\\\";
    }

    res[ key ] = {
        x: +horiz,
        d: d
    };


}

var s = JSON.stringify( res, null, 4 );

s = s.replace( /\\\\/g, "\\" )

fs.writeFileSync( "./test.json", s, {
    encoding: "utf-8"
} );