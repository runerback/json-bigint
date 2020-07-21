const json_stringify = require('./lib/stringify.js').stringify;
const json_parse = require('./lib/parse.js');

module.exports = function (options = {
    strict: false, // not being strict means do not generate syntax errors for "duplicate key"
    storeAsString: false, // toggles whether the values should be stored as BigNumber (default) or a string
    alwaysParseAsBig: false, // toggles whether all numbers should be Big
    useNativeBigInt: false, // toggles whether to use native BigInt instead of bignumber.js
    protoAction: "error",
    constructorAction: "error",
}) {
    return {
        parse: json_parse(options),
        stringify: json_stringify
    }
};

module.exports.parse = module.exports().parse;
module.exports.stringify = json_stringify;