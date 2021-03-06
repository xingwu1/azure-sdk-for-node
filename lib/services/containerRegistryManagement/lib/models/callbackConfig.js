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
 * The configuration of service URI and custom headers for the webhook.
 *
 */
class CallbackConfig {
  /**
   * Create a CallbackConfig.
   * @property {string} serviceUri The service URI for the webhook to post
   * notifications.
   * @property {object} [customHeaders] Custom headers that will be added to
   * the webhook notifications.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CallbackConfig
   *
   * @returns {object} metadata of CallbackConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CallbackConfig',
      type: {
        name: 'Composite',
        className: 'CallbackConfig',
        modelProperties: {
          serviceUri: {
            required: true,
            serializedName: 'serviceUri',
            type: {
              name: 'String'
            }
          },
          customHeaders: {
            required: false,
            serializedName: 'customHeaders',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CallbackConfig;
