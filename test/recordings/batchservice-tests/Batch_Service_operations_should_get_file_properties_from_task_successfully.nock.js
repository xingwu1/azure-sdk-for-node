// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .head('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stderr.txt?api-version=2020-09-01.12.0')
  .reply(200, "", { 'content-length': '0',
  'content-type': 'text/plain',
  'last-modified': 'Thu, 24 Sep 2020 20:00:26 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '911ec8fc-41da-4a8b-9fca-1612afb26cfd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Thu, 24 Sep 2020 20:00:26 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url':
   'https%3A%2F%2Fbatchtestnodesdk.japaneast.batch.azure.com%2Fjobs%2FHelloWorldJobNodeSDKTest%2Ftasks%2FHelloWorldNodeSDKTestTask2%2Ffiles%2Fstderr.txt',
  date: 'Thu, 24 Sep 2020 20:00:33 GMT',
  connection: 'close' });
 return result; }]];