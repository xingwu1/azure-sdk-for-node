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
 * Initializes a new instance of the GcmCredentialProperties class.
 * @constructor
 * Description of a NotificationHub GcmCredential.
 * @member {string} [gcmEndpoint] Gets or sets the GCM endpoint.
 * 
 * @member {string} [googleApiKey] Gets or sets the Google API key.
 * 
 */
function GcmCredentialProperties() {
}

/**
 * Defines the metadata of GcmCredentialProperties
 *
 * @returns {object} metadata of GcmCredentialProperties
 *
 */
GcmCredentialProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GcmCredentialProperties',
    type: {
      name: 'Composite',
      className: 'GcmCredentialProperties',
      modelProperties: {
        gcmEndpoint: {
          required: false,
          serializedName: 'gcmEndpoint',
          type: {
            name: 'String'
          }
        },
        googleApiKey: {
          required: false,
          serializedName: 'googleApiKey',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = GcmCredentialProperties;