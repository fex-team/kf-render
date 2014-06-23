/*!
 * 输出转换器，提供输出支持
 */

define( function ( require ) {

    var kity = require( "kity" ),
        canvg = require( "base/canvg" );

    return kity.createClass( "Output", {

        constructor: function ( formula ) {
            this.formula = formula;
        },

        toJPG: function ( cb ) {

            toImage( this.formula, 'image/jpeg', cb );

        },

        toPNG: function ( cb ) {
            toImage( this.formula, 'image/png', cb );
        }

    } );

    function toImage ( formula, type, cb ) {

        var rectSpace = formula.container.getRenderBox();

        return getBase64DataURL( formula.node.ownerDocument, {
            width: rectSpace.width,
            height: rectSpace.height,
            content: getSVGContent( formula.node )
        }, type, cb );

    }

    function getBase64DataURL ( doc, data, type, cb ) {

        var canvas = null,
            args = arguments,
            ctx = null;

        if ( !isChromeCore() ) {
            drawToCanvas.apply( null, args );
        } else {

            canvas = getImageCanvas( doc, data.width, data.height, type );
            ctx = canvas.getContext( "2d" );

            var image = new Image();

            image.onload = function () {

                try {
                    ctx.drawImage( image, 0, 0 );
                    cb( canvas.toDataURL( type ) );
                } catch ( e ) {
                    drawToCanvas.apply( null, args );
                }

            };

            image.src = getSVGDataURL( data.content );

        }

    }

    function getSVGContent ( svgNode ) {

        var tmp = svgNode.ownerDocument.createElement( "div" ),
            start = [
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="',
                svgNode.getAttribute( "width" ),
                '" height="',
                svgNode.getAttribute( "height" ),
                '">'
            ];

        tmp.appendChild( svgNode.cloneNode( true ) );

        return tmp.innerHTML.replace( /<svg[^>]+?>/i, start.join( "" ) ).replace( /&nbsp;/g, '' );

    }

    function getSVGDataURL ( data ) {
        return "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent( data ) ) );
    }

    function getImageCanvas ( doc, width, height, type ) {

        var canvas = doc.createElement( "canvas" ),
            ctx = canvas.getContext( "2d" );

        canvas.width = width;
        canvas.height = height;

        if ( type !== "image/png" ) {
            ctx.fillStyle = "white";
            ctx.fillRect( 0, 0, canvas.width, canvas.height );
        }

        return canvas;

    }

    function drawToCanvas ( doc, data, type, cb ) {

        var canvas = getImageCanvas( doc, data.width, data.height, type );

        canvas.style.cssText = 'position: absolute; top: 0; left: 100000px; z-index: -1;';

        doc.body.appendChild( canvas );
        canvg( canvas, data.content );
        doc.body.removeChild( canvas );

        window.setTimeout( function () {
            cb( canvas.toDataURL( type ) );
        }, 50 );

    }

    function isChromeCore () {
        return window.navigator.userAgent.indexOf( "Chrome" ) !== -1;
    }

} );
