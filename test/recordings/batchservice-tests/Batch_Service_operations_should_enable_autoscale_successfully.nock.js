// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/enableautoscale?api-version=2020-09-01.12.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 24 Sep 2020 19:58:20 GMT',
  etag: '0x8D860C430046344',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '57fcda26-9f38-4781-9ae8-3a64b2f57e70',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/enableautoscale',
  date: 'Thu, 24 Sep 2020 19:58:20 GMT',
  connection: 'close' });
 return result; }]];