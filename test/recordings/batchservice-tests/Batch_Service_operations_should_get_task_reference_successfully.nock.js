// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask?api-version=2020-09-01.12.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"HelloWorldNodeSDKTestTask\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask\",\"eTag\":\"0x8D860C437AADE38\",\"creationTime\":\"2020-09-24T19:58:29.1912411Z\",\"lastModified\":\"2020-09-24T19:58:33.6726584Z\",\"state\":\"active\",\"stateTransitionTime\":\"2020-09-24T19:58:33.6726584Z\",\"previousState\":\"completed\",\"previousStateTransitionTime\":\"2020-09-24T19:58:32.7456808Z\",\"commandLine\":\"ping 127.0.0.1 -n 20\",\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"scope\":\"pool\",\"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P7D\",\"maxTaskRetryCount\":3\r\n  },\"requiredSlots\":1,\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 24 Sep 2020 19:58:33 GMT',
  etag: '0x8D860C437AADE38',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '535d98bb-9b8f-42f4-b969-4f04a291d0ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 24 Sep 2020 19:58:34 GMT',
  connection: 'close' });
 return result; }]];