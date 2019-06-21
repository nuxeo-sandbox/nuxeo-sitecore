/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-input-error.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {PaperInputAddonBehavior} from './paper-input-addon-behavior.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * `<paper-input-error>` is an error message for use with
 * `<paper-input-container>`. The error is displayed when the
 * `<paper-input-container>` is `invalid`.
 *
 *     <paper-input-container>
 *       <input pattern="[0-9]*">
 *       <paper-input-error slot="add-on">Only numbers are
 * allowed!</paper-input-error>
 *     </paper-input-container>
 *
 * ### Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--paper-input-container-invalid-color` | The foreground color of the error | `--error-color`
 * `--paper-input-error` | Mixin applied to the error | `{}`
 */
interface PaperInputErrorElement extends PaperInputAddonBehavior, LegacyElementMixin, HTMLElement {

  /**
   * True if the error is showing.
   */
  readonly invalid: boolean|null|undefined;

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   *
   * @param state     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update(state: {inputElement?: Element|null, value?: string, invalid: boolean}): void;
}

export {PaperInputErrorElement};

declare global {

  interface HTMLElementTagNameMap {
    "paper-input-error": PaperInputErrorElement;
  }
}