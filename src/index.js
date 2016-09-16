'use strict';

const css = require('css');

module.exports = function (source) {
  const ast = css.parse(source);
  const selectors = ast.stylesheet.rules.reduce(rules2selectors, {});
  return selectors;
}

function rules2selectors(selectors, rule) {
  if ( !isRule(rule) ) return selectors;
  const styles = rule.declarations.reduce(declarations2styles, {});
  const selector = rule.selectors.reduce( createMapSelectors(styles), {} );

  return deepMerge( selectors, rule.selectors.reduce( createMapSelectors(styles), {} ) );
}

function deepMerge(a, b) {
  for (let key in b) {
    if ( !(key in a) ) {
      a[key] = b[key];
    } else {
      Object.assign(a[key], b[key]);
    }
  }
  return a;
}

function declarations2styles(styles, declaration) {
  if ( !isDeclaration(declaration) ) return styles;
  styles[declaration.property] = declaration.value;
  return styles;
}

function createMapSelectors(styles) {
  return (selectors, selector) => {
    selectors[selector] = styles;
    return selectors;
  };
}

function isRule(rule) {
  return rule.type === 'rule';
}

function isDeclaration(declaration) {
  return declaration.type === 'declaration';
}
