"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/no-update-multiple/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr");

require("marko/src/runtime/vdom/preserve-attrs");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><input" +
    marko_attr("value", input.defaultValue) +
    marko_attr("data-marko", {
      noupdate: [
        "value"
      ]
    }, false) +
    "><input" +
    marko_attr("value", input.defaultValue) +
    marko_attr("data-marko", {
      noupdate: [
        "value"
      ]
    }, false) +
    "></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/no-update-multiple/template.marko"
  };
