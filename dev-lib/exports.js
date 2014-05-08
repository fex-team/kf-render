/**
 * 模块暴露
 */

( function ( global ) {

    var oldGetRenderBox = kity.Shape.getRenderBox;

    kity.extendClass(kity.Shape, {
        getFixRenderBox: function () {
            return this.getRenderBox( this.container.container );
        }
    });

    define( 'kf.start', function ( require ) {

        global.kf = {

            // base
            Formula: require( "formula" ),
            Operator: require( "operator/operator" ),

            // expression
            Expression: require( "expression/expression" ),
            CompoundExpression: require( "expression/compound" ),
            TextExpression: require( "expression/text" ),
            EmptyExpression: require( "expression/empty" ),
            CombinationExpression: require( "expression/compound-exp/combination" ),
            FunctionExpression: require( "expression/compound-exp/func" ),

            FractionExpression: require( "expression/compound-exp/binary-exp/fraction" ),
            IntegrationExpression: require( "expression/compound-exp/integration" ),
            RadicalExpression: require( "expression/compound-exp/binary-exp/radical" ),
            ScriptExpression: require( "expression/compound-exp/script" ),
            SuperscriptExpression: require( "expression/compound-exp/binary-exp/superscript" ),
            SubscriptExpression: require( "expression/compound-exp/binary-exp/subscript" ),
            SummationExpression: require( "expression/compound-exp/summation" ),

            // Brackets expressoin
            BracketsExpression: require( "expression/compound-exp/brackets" )

        };

    } );

    // build环境中才含有use
    try {
        use( 'kf.start' );
    } catch ( e ) {
    }

} )( this );
