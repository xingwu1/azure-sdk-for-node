/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

export interface TrustedExternalTenant {
  /**
   * GUID representing an external tenant.
  */
  value?: string;
}

export interface AzureSku {
  /**
   * SKU name. Possible values include: 'KC8', 'KC16', 'KS8', 'KS16', 'D13_v2', 'D14_v2', 'L8',
   * 'L16'
  */
  name: string;
  /**
   * SKU capacity.
  */
  capacity?: number;
}

export interface AzureCapacity {
  /**
   * Scale type. Possible values include: 'automatic', 'manual', 'none'
  */
  scaleType: string;
  /**
   * Minimum allowed capacity.
  */
  minimum: number;
  /**
   * Maximum allowed capacity.
  */
  maximum: number;
  /**
   * The default capacity that would be used.
  */
  default: number;
}

export interface AzureResourceSku {
  /**
   * Resource Namespace and Type.
  */
  resourceType?: string;
  /**
   * The SKU details.
  */
  sku?: AzureSku;
  /**
   * The SKU capacity.
  */
  capacity?: AzureCapacity;
}

export interface DatabaseStatistics {
  /**
   * The database size - the total size of compressed data and index in bytes.
  */
  size?: number;
}

/**
 * Class representing an event hub connection validation.
*/
export interface EventHubConnectionValidation {
  /**
   * The name of the event hub connection.
  */
  eventhubConnectionName?: string;
  /**
   * The resource ID of the event hub to be used to create a data connection.
  */
  eventHubResourceId: string;
  /**
   * The event hub consumer group.
  */
  consumerGroup: string;
  /**
   * The table where the data should be ingested. Optionally the table information can be added to
   * each message.
  */
  tableName?: string;
  /**
   * The mapping rule to be used to ingest the data. Optionally the mapping information can be
   * added to each message.
  */
  mappingRuleName?: string;
  /**
   * The data format of the message. Optionally the data format can be added to each message.
   * Possible values include: 'MULTIJSON', 'JSON', 'CSV'
  */
  dataFormat?: string;
}

export interface Resource extends BaseResource {
  /**
   * Fully qualified resource Id for the resource. Ex -
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  */
  readonly id?: string;
  /**
   * The name of the resource
  */
  readonly name?: string;
  /**
   * The type of the resource. Ex- Microsoft.Compute/virtualMachines or
   * Microsoft.Storage/storageAccounts.
  */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM tracked top level resource
*/
export interface TrackedResource extends Resource {
  /**
   * Resource tags.
  */
  tags?: { [propertyName: string]: string };
  /**
   * The geo-location where the resource lives
  */
  location: string;
}

/**
 * Class representing a Kusto cluster.
*/
export interface Cluster extends TrackedResource {
  /**
   * An ETag of the resource created.
  */
  readonly etag?: string;
  /**
   * The SKU of the cluster.
  */
  sku: AzureSku;
  /**
   * The state of the resource. Possible values include: 'Creating', 'Unavailable', 'Running',
   * 'Deleting', 'Deleted', 'Stopping', 'Stopped', 'Starting'
  */
  readonly state?: string;
  /**
   * The provisioned state of the resource. Possible values include: 'Running', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed'
  */
  readonly provisioningState?: string;
  /**
   * The cluster URI.
  */
  readonly uri?: string;
  /**
   * The cluster data ingestion URI.
  */
  readonly dataIngestionUri?: string;
  /**
   * The cluster's external tenants.
  */
  trustedExternalTenants?: TrustedExternalTenant[];
}

/**
 * Class representing an update to a Kusto cluster.
*/
export interface ClusterUpdate extends Resource {
  /**
   * Resource tags.
  */
  tags?: { [propertyName: string]: string };
  /**
   * Resource location.
  */
  location?: string;
  /**
   * An ETag of the resource updated.
  */
  readonly etag?: string;
  /**
   * The SKU of the cluster.
  */
  sku?: AzureSku;
  /**
   * The state of the resource. Possible values include: 'Creating', 'Unavailable', 'Running',
   * 'Deleting', 'Deleted', 'Stopping', 'Stopped', 'Starting'
  */
  readonly state?: string;
  /**
   * The provisioned state of the resource. Possible values include: 'Running', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed'
  */
  readonly provisioningState?: string;
  /**
   * The cluster URI.
  */
  readonly uri?: string;
  /**
   * The cluster data ingestion URI.
  */
  readonly dataIngestionUri?: string;
  /**
   * The cluster's external tenants.
  */
  trustedExternalTenants?: TrustedExternalTenant[];
}

/**
 * Class representing a Kusto database.
*/
export interface Database extends TrackedResource {
  /**
   * An ETag of the resource created.
  */
  readonly etag?: string;
  /**
   * The provisioned state of the resource. Possible values include: 'Running', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed'
  */
  readonly provisioningState?: string;
  /**
   * The number of days data should be kept before it stops being accessible to queries.
  */
  softDeletePeriodInDays: number;
  /**
   * The number of days of data that should be kept in cache for fast queries.
  */
  hotCachePeriodInDays?: number;
  /**
   * The statistics of the database.
  */
  statistics?: DatabaseStatistics;
}

/**
 * Class representing an update to a Kusto database.
*/
export interface DatabaseUpdate extends Resource {
  /**
   * Resource location.
  */
  location?: string;
  /**
   * An ETag of the resource updated.
  */
  readonly etag?: string;
  /**
   * The provisioned state of the resource. Possible values include: 'Running', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed'
  */
  readonly provisioningState?: string;
  /**
   * The number of days data should be kept before it stops being accessible to queries.
  */
  softDeletePeriodInDays: number;
  /**
   * The number of days of data that should be kept in cache for fast queries.
  */
  hotCachePeriodInDays?: number;
  /**
   * The statistics of the database.
  */
  statistics?: DatabaseStatistics;
}

export interface DatabasePrincipal {
  /**
   * Database principal role. Possible values include: 'Admin', 'Ingestor', 'Monitor', 'User',
   * 'UnrestrictedViewers', 'Viewer'
  */
  role: string;
  /**
   * Database principal name.
  */
  name: string;
  /**
   * Database principal type. Possible values include: 'App', 'Group', 'User'
  */
  type: string;
  /**
   * Database principal fully qualified name.
  */
  fqn?: string;
  /**
   * Database principal email if exists.
  */
  email?: string;
  /**
   * Application id - relevant only for application principal type.
  */
  appId?: string;
}

/**
 * The resource model definition for a ARM proxy resource. It will have everything other than
 * required location and tags
*/
export interface ProxyResource extends Resource {
}

/**
 * Class representing an update to event hub connection.
*/
export interface EventHubConnectionUpdate extends ProxyResource {
  /**
   * Resource location.
  */
  location?: string;
  /**
   * The resource ID of the event hub to be used to create a data connection.
  */
  eventHubResourceId: string;
  /**
   * The event hub consumer group.
  */
  consumerGroup: string;
  /**
   * The table where the data should be ingested. Optionally the table information can be added to
   * each message.
  */
  tableName?: string;
  /**
   * The mapping rule to be used to ingest the data. Optionally the mapping information can be
   * added to each message.
  */
  mappingRuleName?: string;
  /**
   * The data format of the message. Optionally the data format can be added to each message.
   * Possible values include: 'MULTIJSON', 'JSON', 'CSV'
  */
  dataFormat?: string;
}

/**
 * Class representing an event hub connection.
*/
export interface EventHubConnection extends ProxyResource {
  /**
   * Resource location.
  */
  location?: string;
  /**
   * The resource ID of the event hub to be used to create a data connection.
  */
  eventHubResourceId: string;
  /**
   * The event hub consumer group.
  */
  consumerGroup: string;
  /**
   * The table where the data should be ingested. Optionally the table information can be added to
   * each message.
  */
  tableName?: string;
  /**
   * The mapping rule to be used to ingest the data. Optionally the mapping information can be
   * added to each message.
  */
  mappingRuleName?: string;
  /**
   * The data format of the message. Optionally the data format can be added to each message.
   * Possible values include: 'MULTIJSON', 'JSON', 'CSV'
  */
  dataFormat?: string;
}

export interface EventHubConnectionValidationResult {
  /**
   * A message which indicates a problem in event hub connection validation.
  */
  errorMessage?: string;
}

/**
 * The list Kusto database principals operation request.
*/
export interface DatabasePrincipalListRequest {
  /**
   * The list of Kusto database principals.
  */
  value?: DatabasePrincipal[];
}

/**
 * The list Kusto event hub connection validation result.
*/
export interface EventHubConnectionValidationListResult {
  /**
   * The list of Kusto event hub connection validation errors.
  */
  value?: EventHubConnectionValidationResult[];
}

export interface ClusterCheckNameRequest {
  /**
   * Cluster name.
  */
  name: string;
}

export interface DatabaseCheckNameRequest {
  /**
   * Database name.
  */
  name: string;
}

export interface CheckNameResult {
  /**
   * Specifies a Boolean value that indicates if the name is available.
  */
  nameAvailable?: boolean;
  /**
   * The name that was checked.
  */
  name?: string;
  /**
   * Message indicating an unavailable name due to a conflict, or a description of the naming rules
   * that are violated.
  */
  message?: string;
}

/**
 * @summary The object that describes the operation.
*/
export interface OperationDisplay {
  /**
   * @summary Friendly name of the resource provider.
  */
  provider?: string;
  /**
   * @summary The operation type.
   * @description For example: read, write, delete.
  */
  operation?: string;
  /**
   * @summary The resource type on which the operation is performed.
  */
  resource?: string;
  /**
   * @summary The friendly name of the operation.
  */
  description?: string;
}

/**
 * @summary A REST API operation
*/
export interface Operation {
  /**
   * @summary The operation name.
   * @description This is of the format {provider}/{resource}/{operation}.
  */
  name?: string;
  /**
   * @summary The object that describes the operation.
  */
  display?: OperationDisplay;
  /**
   * @summary The intended executor of the operation.
  */
  origin?: string;
  /**
   * @summary Properties of the operation.
  */
  properties?: any;
}

/**
 * The resource model definition for a Azure Resource Manager resource with an etag.
*/
export interface AzureEntityResource extends Resource {
  /**
   * Resource Etag.
  */
  readonly etag?: string;
}

/**
 * The list Kusto clusters operation response.
*/
export interface ClusterListResult extends Array<Cluster> {
}

/**
 * List of available SKUs for a new Kusto Cluster.
*/
export interface ListSkusResult extends Array<AzureSku> {
}

/**
 * List of available SKUs for an existing Kusto Cluster.
*/
export interface ListResourceSkusResult extends Array<AzureResourceSku> {
}

/**
 * The list Kusto databases operation response.
*/
export interface DatabaseListResult extends Array<Database> {
}

/**
 * The list Kusto database principals operation response.
*/
export interface DatabasePrincipalListResult extends Array<DatabasePrincipal> {
}

/**
 * The list Kusto event hub connections operation response.
*/
export interface EventHubConnectionListResult extends Array<EventHubConnection> {
}

/**
 * @summary Result of the request to list REST API operations. It contains a list of operations and
 * a URL nextLink to get the next set of results.
*/
export interface OperationListResult extends Array<Operation> {
  /**
   * @summary The URL to get the next set of operation list results if there are any.
  */
  nextLink?: string;
}