/**
 * 操作符列表
 */

define( function ( require, exports, module ) {

    var scriptHandler = require( "impl/latex/handler/script" ),
        funcHandler = require( "impl/latex/handler/func" ),
        TYPE = require( "impl/latex/define/type" );

    return {

        "+": {
            name: "addition"
        },
        "-": {
            name: "subtraction"
        },
        "times": {
            name: "multiplication"
        },
        "div": {
            name: "division"
        },
        "cdot": {
            name: "dot"
        },
        "cdots": {
            name: "dots"
        },
        "ldots": {
            name: "dots",
            callFn: {
                setType: [ "ldots" ]
            }
        },
        "vdots": {
            name: "dots",
            callFn: {
                setType: [ "vdots" ]
            }
        },
        "ddots": {
            name: "dots",
            callFn: {
                setType: [ "ddots" ]
            }
        },
        "*": {
            name: "asterisk"
        },
        "pm": {
            name: "plus-minus"
        },
        "mp": {
            name: "minus-plus"
        },

        // 关系函数， 比较
        "<": {
            name: "lt"
        },
        ">": {
            name: "gt"
        },
        "leq": {
            name: "leq"
        },
        "geq": {
            name: "geq"
        },
        "sim": {
            name: "sim"
        },
        "simeq": {
            name: "simeq"
        },
        "approx": {
            name: "approx"
        },
        "li": {
            name: "li"
        },
        "ge": {
            name: "ge"
        },
        "=": {
            name: "eq"
        },
        "equiv": {
            name: "equiv"
        },

        // 关系函数， 集合
        "cap": {
            name: "cap"
        },
        "cup": {
            name: "cup"
        },
        "subset": {
            name: "subset"
        },
        "supset": {
            name: "supset"
        },
        "subseteq": {
            name: "subseteq"
        },
        "supseteq": {
            name: "supseteq"
        },
        "in": {
            name: "in"
        },
        "ni": {
            name: "ni"
        },
        "sqsupset": {
            name: "sqsupset"
        },
        "sqsubset": {
            name: "sqsubset"
        },
        "sqsupseteq": {
            name: "sqsupseteq"
        },
        "sqsubseteq": {
            name: "sqsubseteq"
        },
        "sqcap": {
            name: "sqcap"
        },
        "sqcup": {
            name: "sqcup"
        },

        // 关系函数， 逻辑
        "wedge": {
            name: "wedge"
        },
        "vee": {
            name: "vee"
        },
        "mid": {
            name: "mid"
        },

        // 关系函数， 否定
        // TODO 需补充

        "^": {
            name: "superscript",
            type: TYPE.OP,
            handler: scriptHandler,
            priority: 3
        },
        "_": {
            name: "subscript",
            type: TYPE.OP,
            handler: scriptHandler,
            priority: 3
        },
        "frac": {
            name: "fraction",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/fraction" )
        },
        "sqrt": {
            name: "radical",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/sqrt" )
        },
        "sum": {
            name: "summation",
            type: TYPE.FN,
            handler: require( "impl/latex/handler/summation" )
        },
        "int": {
            name: "integration",
            type: TYPE.FN,
            handler: require( "impl/latex/handler/integration" )
        }

    };

} );