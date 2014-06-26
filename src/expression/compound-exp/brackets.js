/**
 * 自动增长括号表达式
 */

define( function ( require ) {

    var kity = require( "kity" ),
        BracketsOperator = require( "operator/brackets" );

    return kity.createClass( 'BracketsExpression', {

        base: require( "expression/compound" ),

        /**
         * 构造函数调用方式：
         *  new Constructor( 左括号, 右括号, 表达式 )
         *  或者
         *  new Constructor( 括号, 表达式 ), 该构造函数转换成上面的构造函数，是： new Constructor( 括号, 括号, 表达式 )
         * @param left 左括号
         * @param right 右括号
         * @param exp 表达式
         */
        constructor: function ( left, right, exp ) {

            this.callBase();

            this.setFlag( "Brackets" );

            // 参数整理
            if ( arguments.length === 2 ) {
                exp = right;
                right = left;
            }

            this.leftSymbol = left;
            this.rightSymbol = right;

            this.setOperator( new BracketsOperator() );
            this.setOperand( exp, 0 );

        },

        getLeftSymbol: function () {
            return this.leftSymbol;
        },

        getRightSymbol: function () {
            return this.rightSymbol;
        }

    } );

} );
