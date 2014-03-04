/**
 * 加法操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'AdditionOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Addition" );

            // 绘制符号图形
            this.addOperatorShape( new kity.Rect( 5, 13, 17, 1, 1 ).fill( "black" ) );
            this.addOperatorShape( new kity.Rect( 13, 5, 1, 17, 1 ).fill( "black" ) );

        }

    } );

} );
