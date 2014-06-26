/**
 * jquery
 */

define( function () {

    if ( !window.jQuery ) {
        throw new Error( 'Missing jQuery' );
    }

    return window.jQuery;

} );