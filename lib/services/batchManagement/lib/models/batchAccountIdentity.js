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
 * The identity of the Batch account, if configured. This is only used when the
 * user specifies 'Microsoft.KeyVault' as their Batch account encryption
 * configuration.
 *
 */
class BatchAccountIdentity {
  /**
   * Create a BatchAccountIdentity.
   * @property {string} [principalId] The principal id of the Batch account.
   * This property will only be provided for a system assigned identity.
   * @property {string} [tenantId] The tenant id associated with the Batch
   * account. This property will only be provided for a system assigned
   * identity.
   * @property {string} type The type of identity used for the Batch account.
   * Possible values include: 'SystemAssigned', 'None'
   */
  constructor() {
  }

  /**
   * Defines the metadata of BatchAccountIdentity
   *
   * @returns {object} metadata of BatchAccountIdentity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BatchAccountIdentity',
      type: {
        name: 'Composite',
        className: 'BatchAccountIdentity',
        modelProperties: {
          principalId: {
            required: false,
            readOnly: true,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            readOnly: true,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'SystemAssigned', 'None' ]
            }
          }
        }
      }
    };
  }
}

module.exports = BatchAccountIdentity;
