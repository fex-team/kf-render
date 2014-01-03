/**
 * 乘法运算操作符：·
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'CdotOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Cdot" );

            // 绘制符号图形
            this.addOperatorShape( new kity.Circle( 22, 22, 3 ).fill( "black" ) );

        }

    } );

} );
