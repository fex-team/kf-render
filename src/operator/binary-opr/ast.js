/**
 * 乘法操作符：*
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'AstOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Ast" );

            var operatorGroup = new kity.Group();

            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).fill( "black" ));
            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).rotate(60).fill( "black" ));
            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).rotate(120).fill( "black" ));
            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).rotate(180).fill( "black" ));
            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).rotate(240).fill( "black" ));
            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).rotate(300).fill( "black" ));

            // 绘制符号图形
            this.addOperatorShape( operatorGroup );

        }

    } );

} );
