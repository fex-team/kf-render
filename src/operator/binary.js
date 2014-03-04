/**
 * 二元操作符抽象类
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'BinaryOperator', {

        base: require( "operator/operator" ),

        constructor: function ( operatorName ) {

            this.callBase( operatorName );

            // box
            this.setBoxSize( 27, 27 );
//            this.operatorShape.translate( 10, 10 );

        },

        // 清理操作符的偏移
        clearTransform: function () {
            this.operatorShape.setTransform( new kity.Matrix( 1, 0, 0, 1, 0, 0 ) );
        }

    } );

} );