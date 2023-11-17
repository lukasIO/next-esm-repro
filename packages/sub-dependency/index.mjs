export class Foo {
  working = true;
}

/* Comment this section out and compilation will start to work */
(function (module) {
  module.exports = { Bar: {} };
})({ exports: {} });
