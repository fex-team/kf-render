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
            this.setBoxSize( 67, 63 );
            this.operatorShape.translate( 10, 10 );

        }

    } );

} );