/**
 * 星号操作符：/star
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'StarOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Star" );

            var operatorGroup = new kity.Group();

            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).fill( "black" ));
            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).rotate(72).fill( "black" ));
            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).rotate(144).fill( "black" ));
            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).rotate(216).fill( "black" ));
            operatorGroup.addShape(new kity.Path( "M19,20l-1,-15c0-2,4-2,4-0l-1,15z").setAnchor(20,20).rotate(292).fill( "black" ));

            // 绘制符号图形
            this.addOperatorShape( operatorGroup );

        }

    } );

} );
