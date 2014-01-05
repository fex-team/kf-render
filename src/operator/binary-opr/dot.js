/**
 * 点积操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'DotOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Dot" );

            // 绘制符号图形
            this.addOperatorShape( new kity.Circle( 10, 21.5, 3 ).fill( "black" ) );
            this.setBoxSize( 20, 43 );

        }

    } );

} );
