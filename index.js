var postcss = require('postcss');

var propsList = require('./data/props');
var valuesList = require('./data/values');

module.exports = postcss.plugin('azerbaijani', function (options) {

  return function (css) {

    options = options || {};

    // walking through rules
    css.walkRules(function (rule) {

      rule.walkDecls(function (decl, i) {

        var engProp = propsList[decl.prop];
        var engValue = propsList[decl.prop];

        if (engProp !== undefined) {

          decl.prop = decl.prop.replace(decl.prop, engProp);

        }

        Object.keys(valuesList).map(function (azValue) {

          if (decl.value.indexOf(azValue) !== -1) {

            decl.value = decl.value.replace(azValue, valuesList[azValue]);

          }

        });

      });

    });

  }

});