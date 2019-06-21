/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/mixins/property-accessors.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {dedupingMixin} from '../utils/mixin.js';

import {camelToDashCase, dashToCamelCase} from '../utils/case-map.js';

import {PropertiesChanged} from './properties-changed.js';

export {PropertyAccessors};


/**
 * Element class mixin that provides basic meta-programming for creating one
 * or more property accessors (getter/setter pair) that enqueue an async
 * (batched) `_propertiesChanged` callback.
 *
 * For basic usage of this mixin:
 *
 * -   Declare attributes to observe via the standard `static get
 *     observedAttributes()`. Use `dash-case` attribute names to represent
 *     `camelCase` property names.
 * -   Implement the `_propertiesChanged` callback on the class.
 * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to
 *     generate property accessors for each observed attribute. This must be
 *     called before the first instance is created, for example, by calling it
 *     before calling `customElements.define`. It can also be called lazily from
 *     the element's `constructor`, as long as it's guarded so that the call is
 *     only made once, when the first instance is created.
 * -   Call `this._enableProperties()` in the element's `connectedCallback` to
 *     enable the accessors.
 *
 * Any `observedAttributes` will automatically be
 * deserialized via `attributeChangedCallback` and set to the associated
 * property using `dash-case`-to-`camelCase` convention.
 */
declare function PropertyAccessors<T extends new (...args: any[]) => {}>(base: T): T & PropertyAccessorsConstructor & PropertiesChangedConstructor;

import {PropertiesChangedConstructor} from './properties-changed.js';

interface PropertyAccessorsConstructor {
  new(...args: any[]): PropertyAccessors;

  /**
   * Returns an attribute name that corresponds to the given property.
   * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
   *
   * @param property Property to convert
   * @returns Attribute name corresponding to the given property.
   */
  attributeNameForProperty(property: string): string;

  /**
   * Generates property accessors for all attributes in the standard
   * static `observedAttributes` array.
   *
   * Attribute names are mapped to property names using the `dash-case` to
   * `camelCase` convention
   */
  createPropertiesForAttributes(): void;
}

export {PropertyAccessorsConstructor};

interface PropertyAccessors extends PropertiesChanged {

  /**
   * Overrides PropertiesChanged implementation to save existing prototype
   * property value so that it can be reset.
   *
   * @param property Name of the property
   * @param readOnly When true, no setter is created
   *
   * When calling on a prototype, any overwritten values are saved in
   * `__dataProto`, and it is up to the subclasser to decide how/when
   * to set those properties back into the accessor.  When calling on an
   * instance, the overwritten value is set via `_setPendingProperty`,
   * and the user should call `_invalidateProperties` or `_flushProperties`
   * for the values to take effect.
   */
  _definePropertyAccessor(property: string, readOnly?: boolean): void;

  /**
   * Overrides PropertiesChanged implementation to initialize values for
   * accessors created for values that already existed on the element
   * prototype.
   */
  _initializeProperties(): void;

  /**
   * Overrides PropertiesChanged implemention to serialize objects as JSON.
   *
   * @param value Property value to serialize.
   * @returns String serialized from the provided property
   *     value.
   */
  _serializeValue(value: any): string|undefined;

  /**
   * Converts a string to a typed JavaScript value.
   *
   * This method is called by Polymer when reading HTML attribute values to
   * JS properties.  Users may override this method on Polymer element
   * prototypes to provide deserialization for custom `type`s.  Note,
   * the `type` argument is the value of the `type` field provided in the
   * `properties` configuration object for a given property, and is
   * by convention the constructor for the type to deserialize.
   *
   * @param value Attribute value to deserialize.
   * @param type Type to deserialize the string to.
   * @returns Typed value deserialized from the provided string.
   */
  _deserializeValue(value: string|null, type?: any): any;

  /**
   * Called at instance time with bag of properties that were overwritten
   * by accessors on the prototype when accessors were created.
   *
   * The default implementation sets these properties back into the
   * setter at instance time.  This method is provided as an override
   * point for customizing or providing more efficient initialization.
   *
   * @param props Bag of property values that were overwritten
   *   when creating property accessors.
   */
  _initializeProtoProperties(props: object|null): void;

  /**
   * Ensures the element has the given attribute. If it does not,
   * assigns the given value to the attribute.
   *
   * @param attribute Name of attribute to ensure is set.
   * @param value of the attribute.
   */
  _ensureAttribute(attribute: string, value: string): void;

  /**
   * Returns true if this library created an accessor for the given property.
   *
   * @param property Property name
   * @returns True if an accessor was created
   */
  _hasAccessor(property: string): boolean;

  /**
   * Returns true if the specified property has a pending change.
   *
   * @param prop Property name
   * @returns True if property has a pending change
   */
  _isPropertyPending(prop: string): boolean;
}
