/**
 * 负正操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'MinusPlusOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Mp" );


            // 绘制符号图形
            this.addOperatorShape( new kity.Path( pathData ).fill( "black" ).translate( 5, 2 ) );

        }

    } );

} );
