/**
 * 字符与pathdata映射
 */

define( function ( require, exports, module ) {

    return {

        // number
        0: require( "char/data/number/0" ),
        1: require( "char/data/number/1" ),
        2: require( "char/data/number/2" ),
        3: require( "char/data/number/3" ),
        4: require( "char/data/number/4" ),
        5: require( "char/data/number/5" ),
        6: require( "char/data/number/6" ),
        7: require( "char/data/number/7" ),
        8: require( "char/data/number/8" ),
        9: require( "char/data/number/9" ),

        // character
        a: require( "char/data/character/a" ),
        b: require( "char/data/character/b" ),
        c: require( "char/data/character/c" ),
        d: require( "char/data/character/d" ),
        e: require( "char/data/character/e" ),
        f: require( "char/data/character/f" ),
        g: require( "char/data/character/g" ),
        h: require( "char/data/character/h" ),
        i: require( "char/data/character/i" ),
        j: require( "char/data/character/j" ),
        k: require( "char/data/character/k" ),
        l: require( "char/data/character/l" ),
        m: require( "char/data/character/m" ),
        n: require( "char/data/character/n" ),
        o: require( "char/data/character/o" ),
        p: require( "char/data/character/p" ),
        q: require( "char/data/character/q" ),
        r: require( "char/data/character/r" ),
        s: require( "char/data/character/s" ),
        t: require( "char/data/character/t" ),
        u: require( "char/data/character/u" ),
        v: require( "char/data/character/v" ),
        w: require( "char/data/character/w" ),
        x: require( "char/data/character/x" ),
        y: require( "char/data/character/y" ),
        z: require( "char/data/character/z" ),

        // symbol
        "(": require( "char/data/symbol/lparentheses" ),
        ")": require( "char/data/symbol/rparentheses" ),
        "-": require( "char/data/symbol/negative" ),
        "+": require( "char/data/symbol/positive" ),
        "|": require( "char/data/symbol/vertical" ),
        "/": require( "char/data/symbol/slash" ),
        "!": require( "char/data/symbol/exclamation" ),
        "[": require( "char/data/symbol/lbrackets" ),
        "]": require( "char/data/symbol/rbrackets" ),
        ":": require( "char/data/symbol/colon" ),
        "'": require( "char/data/symbol/quotation" ),
        "<": require( "char/data/symbol/lt" ),
        ">": require( "char/data/symbol/gt" ),
        ".": require( "char/data/symbol/point" )

    };

} );