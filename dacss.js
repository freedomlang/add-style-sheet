/*
 * Add a stylesheet rule to the document
 * @param {Array} rules Accepts an array of JSON-encoded declarations
 * @example
addStylesheetRules([
  ['h2', ['color', 'red'],['background-color', 'green', true]], 
  ['.myClass', ['background-color', 'yellow']]
]);
 */
function addStylesheetRules (rules) {
    // Create style element
    var styleEl = document.createElement('style');

    // Append style element to head
    document.head.appendChild(styleEl);

    // Grab style sheet
    var styleSheet = styleEl.sheet || styleEl.styleSheet;

    for (var i = 0, rl = rules.length; i < rl; i++) {
        var j = 1, rule = rules[i], selector = rules[i][0], propStr = '';
        // If the second argument of a rule is an array of arrays, correct our variables.
        if (Object.prototype.toString.call(rule[1][0]) === '[object Array]') {
            rule = rule[1];
            j = 0;
        }

        for (var pl = rule.length; j < pl; j++) {
            var prop = rule[j];
            propStr += prop[0] + ':' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
        }

        // Insert CSS Rule
        styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
    }

    return styleEl;
}

export default addStylesheetRules;