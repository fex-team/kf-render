/**
 * 操作符抽象类
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'Operator', {

        base: require( "signgroup" ),

        constructor: function ( operatorName ) {

            this.callBase();

            // 操作符名称
            this.operatorName = operatorName;

            // 操作符图形
            this.operatorShape = new kity.Group();

            // 操作符边框, 根据具体的操作符， 可调用setBoxSize接口自定义大小
            this.box = new kity.Rect( 0, 0, 0, 0 ).fill( "transparent" );

            this.addShape( this.box );
            this.addShape( this.operatorShape );

        },

        applyOperand: function () {

            throw new Error( 'applyOperand is abstract' );

        },

        setBoxSize: function ( w, h ) {

            return this.box.setSize( w, h );

        },

        setBoxWidth: function ( w ) {

            return this.box.setWidth( w );

        },

        setBoxHeight: function ( h ) {

            return this.box.setHeight( h );

        },

        // 提供给具体实现类附加其绘制的操作符图形的接口
        addOperatorShape: function ( shpae ) {

            return this.operatorShape.addShape( shpae );

        }

    } );

} );