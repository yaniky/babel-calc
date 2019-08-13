const babel = require("@babel/core");

const result = babel.transform("setTimeout(function(){console.log(1)}, 1000/2/5)", {
    plugins: [
        require("./index")
    ]
});

console.log(result.code);