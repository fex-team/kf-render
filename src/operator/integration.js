/**
 * 积分操作符：∫
 */

define( function ( require ) {

    var kity = require( "kity" ),
        ScriptController = require( "operator/common/script-controller" );

    return kity.createClass( 'IntegrationOperator', {

        base: require( "operator/operator" ),

        constructor: function ( type ) {

            this.callBase( "Integration" );

            // 默认是普通单重积分
            this.opType = type || 1;

        },

        setType: function ( type ) {
            this.opType = type | 0;
        },

        // 重置类型
        resetType: function () {
            this.opType = 1;
        },

        applyOperand: function ( exp, sup, sub ) {

            var opShape = this.getOperatorShape(),
                padding = 3,
                expBox = exp.getFixRenderBox(),
                space = new ScriptController( this, opShape, sup, sub, {
                    supOffset: 3,
                    subOffset: -15
                } ).applySide(),
                diff = ( space.height + space.top - expBox.height ) / 2;

            opShape.translate( 0, space.top );
            sup.translate( 0, space.top );
            sub.translate( 0, space.top );

            if ( diff >= 0 ) {
                exp.translate( space.width + padding, diff );
            } else {
                diff = -diff;
                opShape.translate( 0, diff );
                sup.translate( 0, diff );
                sub.translate( 0, diff );
                exp.translate( space.width + padding, 0 );
            }

            this.parentExpression.expand( padding, padding * 2 );
            this.parentExpression.translateElement( padding, padding );

        },

        getOperatorShape : function () {

            var pathData = "M1.318,48.226c0,0,0.044,0.066,0.134,0.134c0.292,0.313,0.626,0.447,1.006,0.447c0.246,0.022,0.358-0.044,0.604-0.268   c0.782-0.782,1.497-2.838,2.324-6.727c0.514-2.369,0.938-4.693,1.586-8.448C8.559,24.068,9.9,17.878,11.978,9.52   c0.917-3.553,1.922-7.576,3.866-8.983C16.247,0.246,16.739,0,17.274,0c1.564,0,2.503,1.162,2.592,2.57   c0,0.827-0.424,1.386-1.273,1.386c-0.671,0-1.229-0.514-1.229-1.251c0-0.805,0.514-1.095,1.185-1.274   c0.022,0-0.291-0.29-0.425-0.379c-0.201-0.134-0.514-0.224-0.737-0.224c-0.067,0-0.112,0-0.157,0.022   c-0.469,0.134-0.983,0.939-1.453,2.234c-0.537,1.475-0.961,3.174-1.631,6.548c-0.424,2.101-0.693,3.464-1.229,6.727   c-1.608,9.185-2.949,15.487-5.006,23.756c-0.514,2.034-0.849,3.24-1.207,4.335c-0.559,1.698-1.162,2.95-1.811,3.799   c-0.514,0.715-1.385,1.408-2.436,1.408c-1.363,0-2.391-1.185-2.458-2.592c0-0.804,0.447-1.363,1.273-1.363   c0.671,0,1.229,0.514,1.229,1.251C2.503,47.757,1.989,48.047,1.318,48.226z",
                group = new kity.Group(),
                opGroup = new kity.Group(),
                opShape = new kity.Path( pathData ).fill( "black" ),
                opBox = new kity.Rect( 0, 0, 0, 0 ).fill( "transparent" ),
                tmpShape = null;

            opGroup.addShape( opShape );

            group.addShape( opBox );
            group.addShape( opGroup );

            this.addOperatorShape( group );

            for ( var i = 1; i < this.opType; i++ ) {
                tmpShape = new kity.Use( opShape ).translate( opShape.getWidth() / 2 * i, 0 );
                opGroup.addShape( tmpShape );
            }

            opGroup.scale( 1.6 );

            tmpShape = null;

            // 为操作符图形创建baseline和meanline方法
            group.getBaseline = function () {
                return opGroup.getFixRenderBox().height;
            };

            group.getMeanline = function () {
                return 10;
            };

            return group;

        }

    } );

} );
