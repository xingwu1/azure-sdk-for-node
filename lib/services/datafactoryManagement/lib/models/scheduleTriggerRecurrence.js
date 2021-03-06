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
 * The workflow trigger recurrence.
 *
 */
class ScheduleTriggerRecurrence {
  /**
   * Create a ScheduleTriggerRecurrence.
   * @member {string} [frequency] The frequency. Possible values include:
   * 'NotSpecified', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Year'
   * @member {number} [interval] The interval.
   * @member {date} [startTime] The start time.
   * @member {date} [endTime] The end time.
   * @member {string} [timeZone] The time zone.
   * @member {object} [schedule] The recurrence schedule.
   * @member {array} [schedule.minutes] The minutes.
   * @member {array} [schedule.hours] The hours.
   * @member {array} [schedule.weekDays] The days of the week.
   * @member {array} [schedule.monthDays] The month days.
   * @member {array} [schedule.monthlyOccurrences] The monthly occurrences.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ScheduleTriggerRecurrence
   *
   * @returns {object} metadata of ScheduleTriggerRecurrence
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ScheduleTriggerRecurrence',
      type: {
        name: 'Composite',
        additionalProperties: {
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'ObjectElementType',
                type: {
                  name: 'Object'
                }
            }
          }
        },
        className: 'ScheduleTriggerRecurrence',
        modelProperties: {
          frequency: {
            required: false,
            serializedName: 'frequency',
            type: {
              name: 'String'
            }
          },
          interval: {
            required: false,
            serializedName: 'interval',
            type: {
              name: 'Number'
            }
          },
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          timeZone: {
            required: false,
            serializedName: 'timeZone',
            type: {
              name: 'String'
            }
          },
          schedule: {
            required: false,
            serializedName: 'schedule',
            type: {
              name: 'Composite',
              additionalProperties: {
                type: {
                  name: 'Dictionary',
                  value: {
                      required: false,
                      serializedName: 'ObjectElementType',
                      type: {
                        name: 'Object'
                      }
                  }
                }
              },
              className: 'RecurrenceSchedule'
            }
          }
        }
      }
    };
  }
}

module.exports = ScheduleTriggerRecurrence;
