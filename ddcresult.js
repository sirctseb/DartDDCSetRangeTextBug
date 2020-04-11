define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const demo = Object.create(dart.library);
  const $createElement = dartx.createElement;
  demo.main = function main() {
    let element = html.InputElement._check(html.document[$createElement]("input"));
    element.setRangeText("This One", {start: 1, end: 2, selectionMode: "start"});
  };
  dart.trackLibraries("ddcresult", {
    "demo.dart": demo
  }, {
  }, null);
  // Exports:
  return {
    demo: demo
  };
});

//# sourceMappingURL=ddcresult.js.map
