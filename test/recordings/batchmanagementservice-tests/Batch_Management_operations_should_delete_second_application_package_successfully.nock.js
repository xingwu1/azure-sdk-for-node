// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus2';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode1';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-westus2/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v2.0?api-version=2020-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '0a3f6e1b-1935-4315-845f-477e17bc5568',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-deletes': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'b07e5357-ecca-49d3-aa3d-d15d5bac61f2',
  'x-ms-routing-request-id':
   'WESTUS:20200928T184546Z:b07e5357-ecca-49d3-aa3d-d15d5bac61f2',
  date: 'Mon, 28 Sep 2020 18:45:45 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];