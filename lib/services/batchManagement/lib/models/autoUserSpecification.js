/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @summary Specifies the parameters for the auto user that runs a task on the
 * Batch service.
  *
 */
class AutoUserSpecification {
  /**
   * Create a AutoUserSpecification.
   * @property {string} [scope] The scope for the auto user. The default value
   * is Pool. If the pool is running Windows a value of Task should be
   * specified if stricter isolation between tasks is required. For example, if
   * the task mutates the registry in a way which could impact other tasks, or
   * if certificates have been specified on the pool which should not be
   * accessible by normal tasks but should be accessible by start tasks.
   * Possible values include: 'Task', 'Pool'
   * @property {string} [elevationLevel] The elevation level of the auto user.
   * The default value is nonAdmin. Possible values include: 'NonAdmin',
   * 'Admin'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AutoUserSpecification
   *
   * @returns {object} metadata of AutoUserSpecification
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AutoUserSpecification',
      type: {
        name: 'Composite',
        className: 'AutoUserSpecification',
        modelProperties: {
          scope: {
            required: false,
            serializedName: 'scope',
            type: {
              name: 'Enum',
              allowedValues: [ 'Task', 'Pool' ]
            }
          },
          elevationLevel: {
            required: false,
            serializedName: 'elevationLevel',
            type: {
              name: 'Enum',
              allowedValues: [ 'NonAdmin', 'Admin' ]
            }
          }
        }
      }
    };
  }
}

module.exports = AutoUserSpecification;
