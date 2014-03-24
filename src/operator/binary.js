/**
 * 二元操作符抽象类
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'BinaryOperator', {

        base: require( "operator/operator" ),

        setParentExpression: function ( exp ) {
            this.callBase( exp );
//            exp.setBoxSize( 27, 27 );
        }

    } );

} );