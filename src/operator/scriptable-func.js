/**
 * 可附加上下表函数操作符号
 * @abstruct
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SCRIPT_TYPE = require( "def/script-type" );

    return kity.createClass( 'SummationOperator', {

        base: require( "operator/operator" ),

        constructor: function ( operatorName ) {

            this.callBase( operatorName );

            this.shapOperator = null;
            this.shapeBox = null;

            this.addOperatorShape( this.generateOperator() );

        },

        applyOperand: function ( exp, sup, sub ) {

            var operatorShape = this.getOperatorShape(),
                padding = 5,
                expBox = exp.getRenderBox(),
                space = this.parentExpression.getSpace(),
                offset = {
                    x: space.width + 5,
                    y: space.height - expBox.height
                };

            // 水平偏移
            exp.translate( offset.x, 0 );

            if ( offset.y > 0 ) {
                exp.translate( 0, offset.y / 2 );
            } else {
                operatorShape.translate( 0, - offset.y / 2 );
            }

            // 整体偏移出padding位置
            this.parentExpression.translateElement( padding, padding );

            // 更新box的大小
            space.width = space.width + 5 + padding * 2 + expBox.width;
            space.height = Math.max( space.height, expBox.height ) + padding * 2;

            this.parentExpression.setBoxSize( space.width, space.height );

        },

        getOperatorShape: function () {
            throw new Error( 'getOperatorShape is abstract function' );
        },

        generateOperator : function () {

            var operator = this.getOperatorShape(),
                operatorGroup = new kity.Group(),
                box = new kity.Rect( 0, 0 , 0, 0 );

            this.shapOperator = operator;
            this.shapeBox = box;

            operatorGroup.addShape( box );
            operatorGroup.addShape( operator );

            return operatorGroup;

        },

        addedCall: function () {

            var operatorBox = null,
                padding = 10;

            if ( this.shapOperator.onOperatorShapeAdded ) {
                this.shapOperator.onOperatorShapeAdded();
            }

            // follow类型边框缩小一半
            if ( this.parentExpression.getScriptType() === SCRIPT_TYPE.FOLLOW ) {
                padding /= 2;
            }

            operatorBox = this.shapOperator.getRenderBox();

            this.shapeBox.setSize( operatorBox.width, operatorBox.height );
            this.shapOperator.translate( padding / 2, padding );

        }

    } );

} );
