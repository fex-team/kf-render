/**
 * jquery
 */

define( function ( require, exports, module ) {

    if ( !window.jQuery ) {
        throw new Error( 'Missing jQuery' );
    }

    return window.jQuery;

} );