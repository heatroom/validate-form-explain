var classes = require('classes');

/**
 * Expose `plugin`.
 */

module.exports = plugin;


/**
 * Apply a plugin to the message adapters.
 *
 * @param {Validator} validator
 */

function plugin (validator) {
  var adapter = validator.adapter;
  var el = adapter.el;
  var valid = adapter.valid;
  var invalid = adapter.invalid;
  var clear = adapter.clear;

  validator.valid(function (view) {
    valid.apply(adapter, arguments);
    var input = el(view);
    classes(input).remove('error');
  });

  /**
   * When invalid, add class `error`.
   *
   * @param {Element} el
   * @param {String} message
   */

  validator.invalid(function (view) {
    invalid.apply(adapter, arguments);
    var input = el(view);
    classes(input).add('error');
  });

};
