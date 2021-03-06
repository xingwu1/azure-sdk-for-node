// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/terminate?api-version=2020-09-01.12.0')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Thu, 24 Sep 2020 19:58:32 GMT',
  etag: '0x8D860C4371D6C28',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '913f0464-2041-4022-8d9a-98290699e10c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/terminate',
  date: 'Thu, 24 Sep 2020 19:58:32 GMT',
  connection: 'close' });
 return result; }]];