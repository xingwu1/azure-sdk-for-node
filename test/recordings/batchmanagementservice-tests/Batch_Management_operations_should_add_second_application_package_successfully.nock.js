// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus2';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode1';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-westus2/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v2.0?api-version=2020-09-01')
  .reply(200, "{\"type\":\"Microsoft.Batch/batchAccounts/applications/versions\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-westus2/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v2.0\",\"name\":\"v2.0\",\"etag\":\"W/\\\"0x8D863DEB311CA45\\\"\",\"properties\":{\"storageUrl\":\"https://testaccountfornode1.blob.core.windows.net/app-my-application-id-ac88b1560ec74bcc9b2a60bdb3dfc690/v2.0?sv=2018-03-28&sr=b&sig=vWB2Vpv%2FAYnB5c4ZHfWwCWG65VPNMD%2Bha41Gt%2By%2B%2Be4%3D&st=2020-09-28T18%3A40%3A41Z&se=2020-09-28T22%3A45%3A41Z&sp=rw\",\"storageUrlExpiry\":\"2020-09-28T22:45:41.1166471Z\",\"state\":\"Pending\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '662',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Mon, 28 Sep 2020 18:45:41 GMT',
  etag: 'W/"0x8D863DEB311CA45"',
  'x-ms-correlation-request-id': '803b16a2-b27f-4294-9616-caa98ada3c26',
  'x-ms-request-id': '3186d55a-4fef-4ee2-bd3c-35b6cfaf1d0c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200928T184541Z:803b16a2-b27f-4294-9616-caa98ada3c26',
  date: 'Mon, 28 Sep 2020 18:45:41 GMT',
  connection: 'close' });
 return result; }]];