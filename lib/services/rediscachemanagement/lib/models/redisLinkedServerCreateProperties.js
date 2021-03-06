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
 * Create properties for a linked server
 *
 */
class RedisLinkedServerCreateProperties {
  /**
   * Create a RedisLinkedServerCreateProperties.
   * @property {string} linkedRedisCacheId Fully qualified resourceId of the
   * linked redis cache.
   * @property {string} linkedRedisCacheLocation Location of the linked redis
   * cache.
   * @property {string} serverRole Role of the linked server. Possible values
   * include: 'Primary', 'Secondary'
   */
  constructor() {
  }

  /**
   * Defines the metadata of RedisLinkedServerCreateProperties
   *
   * @returns {object} metadata of RedisLinkedServerCreateProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RedisLinkedServerCreateProperties',
      type: {
        name: 'Composite',
        className: 'RedisLinkedServerCreateProperties',
        modelProperties: {
          linkedRedisCacheId: {
            required: true,
            serializedName: 'linkedRedisCacheId',
            type: {
              name: 'String'
            }
          },
          linkedRedisCacheLocation: {
            required: true,
            serializedName: 'linkedRedisCacheLocation',
            type: {
              name: 'String'
            }
          },
          serverRole: {
            required: true,
            serializedName: 'serverRole',
            type: {
              name: 'Enum',
              allowedValues: [ 'Primary', 'Secondary' ]
            }
          }
        }
      }
    };
  }
}

module.exports = RedisLinkedServerCreateProperties;
