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
 * @summary A reference to an Azure Virtual Machines Marketplace Image or a
 * Shared Image Gallery Image. To get the list of all Azure Marketplace Image
 * references verified by Azure Batch, see the 'List Supported Images'
 * operation.
  *
 */
class ImageReference {
  /**
   * Create a ImageReference.
   * @property {string} [publisher] The publisher of the Azure Virtual Machines
   * Marketplace Image. For example, Canonical or MicrosoftWindowsServer.
   * @property {string} [offer] The offer type of the Azure Virtual Machines
   * Marketplace Image. For example, UbuntuServer or WindowsServer.
   * @property {string} [sku] The SKU of the Azure Virtual Machines Marketplace
   * Image. For example, 18.04-LTS or 2019-Datacenter.
   * @property {string} [version] The version of the Azure Virtual Machines
   * Marketplace Image. A value of 'latest' can be specified to select the
   * latest version of an Image. If omitted, the default is 'latest'.
   * @property {string} [virtualMachineImageId] The ARM resource identifier of
   * the Shared Image Gallery Image. Compute Nodes in the Pool will be created
   * using this Image Id. This is of the form
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageDefinitionName}/versions/{VersionId}
   * or
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageDefinitionName}
   * for always defaulting to the latest image version. This property is
   * mutually exclusive with other ImageReference properties. The Shared Image
   * Gallery Image must have replicas in the same region and must be in the
   * same subscription as the Azure Batch account. If the image version is not
   * specified in the imageId, the latest version will be used. For information
   * about the firewall settings for the Batch Compute Node agent to
   * communicate with the Batch service see
   * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageReference
   *
   * @returns {object} metadata of ImageReference
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageReference',
      type: {
        name: 'Composite',
        className: 'ImageReference',
        modelProperties: {
          publisher: {
            required: false,
            serializedName: 'publisher',
            type: {
              name: 'String'
            }
          },
          offer: {
            required: false,
            serializedName: 'offer',
            type: {
              name: 'String'
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          virtualMachineImageId: {
            required: false,
            serializedName: 'virtualMachineImageId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageReference;
