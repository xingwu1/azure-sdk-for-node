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
 * @class
 * Initializes a new instance of the WebhookReceiver class.
 * @constructor
 * A webhook receiver.
 *
 * @member {string} name The name of the webhook receiver. Names must be unique
 * across all receivers within an action group.
 * 
 * @member {string} serviceUri The URI where webhooks should be sent.
 * 
 */
function WebhookReceiver() {
}

/**
 * Defines the metadata of WebhookReceiver
 *
 * @returns {object} metadata of WebhookReceiver
 *
 */
WebhookReceiver.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'WebhookReceiver',
    type: {
      name: 'Composite',
      className: 'WebhookReceiver',
      modelProperties: {
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        serviceUri: {
          required: true,
          serializedName: 'serviceUri',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = WebhookReceiver;