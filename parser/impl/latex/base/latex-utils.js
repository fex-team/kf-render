/**
 * latex实现工具包
 */

define( function ( require, exports, module ) {

    return {

        toRPNExpression: require( "impl/latex/base/rpn" ),

        generateTree: require( "impl/latex/base/tree" )

    };

});