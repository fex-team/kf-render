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
    pattern = /<glyph[\s\S]*?unicode="([^"]*)"[\s\S]*?(?:horiz-adv-x="([^"]*)"){0,1}[\s]*d="([^"]*)"[^\/]*\/>/g,
    key = null,
    t = null;

while ( tmp = pattern.exec( file ) ) {

    key = tmp[ 1 ];

    if ( key.length === 8 ) {
        key = "\\u" +  key.substring( 3, 7 );
    } else if ( key.length === 7 ) {
        key = "\\u" + "0" + key.substring( 3, 6 );
    } else if ( key.length === 6 ) {
        key = "\\u00" + key.substring( 3, 5 );
    }

    res[ key ] = {
        x: +tmp[ 2 ],
        d: tmp[ 3 ]
    };

    count++;

    if ( count > 2000 ) {
        console.log("error");
        break;
    }

}

var s = JSON.stringify( res );

s = s.replace( /\\\\/g, "\\" )

fs.writeFileSync( "./test.json", s, {
    encoding: "utf-8"
} );