// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus2';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode1';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-westus2/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2020-09-01', '*')
  .reply(409, "{\"error\":{\"code\":\"RequestedDefaultVersionNotActive\",\"message\":\"The application package corresponding to the requested default version is not active.\\nRequestId:49c2595e-8650-4f87-b48e-4889c56a4301\\nTime:2020-09-28T18:45:43.6073973Z\",\"target\":\"BatchAccount\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '258',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': '220392f6-60ba-416b-973a-a2da0a0c0e46',
  'x-ms-request-id': '49c2595e-8650-4f87-b48e-4889c56a4301',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200928T184543Z:220392f6-60ba-416b-973a-a2da0a0c0e46',
  date: 'Mon, 28 Sep 2020 18:45:43 GMT',
  connection: 'close' });
 return result; }]];