/**
 * 空操作符
 * 该操作符并不是真正意义上的不占用绘图空间， 而是占用非常小的一个空间
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'EmptyOperator', {

        base: require( "operator/operator" ),

        constructor: function () {

            this.callBase( "Empty" );

            // 绘制符号图形
            this.addOperatorShape( new kity.Rect( 0, 0, 0.001, 27 ).fill( "transparent" ) );

        }

    } );

} );
