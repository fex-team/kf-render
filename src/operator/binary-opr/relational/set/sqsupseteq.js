/**
 * "⊒"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SqsupseteqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M14.881,14.905c0,0.792-0.072,0.864-0.84,0.864H0.84c-0.408,0-0.84,0-0.84-0.48s0.48-0.48,0.864-0.48h13.057V2.833H0.84   c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h13.201c0.768,0,0.84,0.072,0.84,0.864V14.905z M14.281,19.466   c0.408,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84c-0.408,0-0.84,0-0.84-0.48s0.504-0.48,0.864-0.48H14.281z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Sqsupseteq" );

            opShape.translate( 5.5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
