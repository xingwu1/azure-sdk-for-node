// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'eastus2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0b1f6471-1bf0-4dda-aec3-cb9272f09590';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DatalakeStore?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '21eb5a84-53a9-4334-9831-ee844e8e330a',
  'x-ms-correlation-request-id': '21eb5a84-53a9-4334-9831-ee844e8e330a',
  'x-ms-routing-request-id': 'WESTUS:20170623T223145Z:21eb5a84-53a9-4334-9831-ee844e8e330a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:31:45 GMT',
  connection: 'close',
  'content-length': '1226' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DatalakeStore?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '21eb5a84-53a9-4334-9831-ee844e8e330a',
  'x-ms-correlation-request-id': '21eb5a84-53a9-4334-9831-ee844e8e330a',
  'x-ms-routing-request-id': 'WESTUS:20170623T223145Z:21eb5a84-53a9-4334-9831-ee844e8e330a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:31:45 GMT',
  connection: 'close',
  'content-length': '1226' });
 return result; }]];