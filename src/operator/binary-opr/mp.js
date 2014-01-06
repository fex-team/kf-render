/**
 * 上减下加操作符：∓
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'MpOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Mp" );

            // 绘制符号图形
            this.addOperatorShape( new kity.Rect( 0, 0, 43, 3, 3 ).fill( "black" ) );
            this.addOperatorShape( new kity.Rect( 0, 20, 43, 3, 3 ).fill( "black" ) );
            this.addOperatorShape( new kity.Rect( 20, 0, 3, 43, 3 ).fill( "black" ) );

        }

    } );

} );
