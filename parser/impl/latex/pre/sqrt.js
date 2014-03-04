/**
 * “开方”预处理器
 */
define( function ( require ) {

    return function ( input ) {

        return input.replace( /\\sqrt\s*((?:\[[^\]]*\])?)/g, function ( match, exponent ) {

            return "\\sqrt{" + exponent.replace( /^\[|\]$/g, "" ) + "}";

        } );

    };

} );