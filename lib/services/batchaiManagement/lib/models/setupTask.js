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

const models = require('./index');

/**
 * Specifies a setup task which can be used to customize the compute nodes of
 * the cluster.
 *
 */
class SetupTask {
  /**
   * Create a SetupTask.
   * @member {string} commandLine Command Line to start Setup process.
   * @member {array} [environmentVariables] Collection of environment settings.
   * @member {boolean} [runElevated] Specifies whether to run the setup task in
   * elevated mode. The default value is false.  Default value: false .
   * @member {string} stdOutErrPathPrefix The path where the Batch AI service
   * will upload the stdout and stderror of setup task.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SetupTask
   *
   * @returns {object} metadata of SetupTask
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SetupTask',
      type: {
        name: 'Composite',
        className: 'SetupTask',
        modelProperties: {
          commandLine: {
            required: true,
            serializedName: 'commandLine',
            type: {
              name: 'String'
            }
          },
          environmentVariables: {
            required: false,
            serializedName: 'environmentVariables',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EnvironmentSettingElementType',
                  type: {
                    name: 'Composite',
                    className: 'EnvironmentSetting'
                  }
              }
            }
          },
          runElevated: {
            required: false,
            serializedName: 'runElevated',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          stdOutErrPathPrefix: {
            required: true,
            serializedName: 'stdOutErrPathPrefix',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SetupTask;