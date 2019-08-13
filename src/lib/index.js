const babelTypes = require("@babel/types");

function replaceExpressionToNumericLiteral(path) {
    const node = path.node;

    let result;

    if (node.left.type === "NumericLiteral" && node.right.type === "NumericLiteral") {
        switch (node.operator) {
        case "*": {
            result = node.left.value * node.right.value;
            break;
        }
        case "+": {
            result = node.left.value + node.right.value;
            break;
        }
        case "-": {
            result = node.left.value - node.right.value;
            break;
        }
        case "/": {
            result = node.left.value / node.right.value;
            break;
        }
        case "%": {
            result = node.left.value % node.right.value;
            break;
        }
        default: {
            break;
        }
        }
    }
    if (result || result === 0) {
        path.replaceWith(babelTypes.numericLiteral(result));
    }
}

module.exports = function() {
    return {
        visitor: {
            BinaryExpression: {
                // enter(path) {
                //     replaceExpressionToNumericLiteral(path);
                // },
                exit(path) {
                    replaceExpressionToNumericLiteral(path);
                }
            }
        }
    };
};