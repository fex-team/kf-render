/**
 * “开方”预处理器
 */
define( function ( require ) {

    return function ( input ) {

        return input.replace( /\\(i+)nt(\b|[^a-zA-Z])/g, function ( match, sign, suffix ) {

            return "\\int "+ sign.length + suffix;

        } );

    };

} );