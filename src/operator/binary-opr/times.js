/**
 * 乘法运算操作符：×
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'TimesOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Times" );

            // 绘制符号图形
            this.addOperatorShape( new kity.Rect( 0, 20, 43, 3, 3 ).setAnchor( 22 ,22 ).rotate(45).fill( "black" ) );
            this.addOperatorShape( new kity.Rect( 20, 0, 3, 43, 3 ).setAnchor( 22 ,22 ).rotate(45).fill( "black" ) );

        }

    } );

} );
