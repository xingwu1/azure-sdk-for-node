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
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2020-09-01.12.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 24 Sep 2020 20:02:17 GMT',
  etag: '0x8D860C4BD55A546',
  location:
   'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7e1f89d8-ad89-425e-890d-017c9d765c32',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  date: 'Thu, 24 Sep 2020 20:02:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask?api-version=2020-09-01.12.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"ApplicationPacakgeReferenceTask\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask\",\"eTag\":\"0x8D860C4BD55A546\",\"creationTime\":\"2020-09-24T20:02:17.928839Z\",\"lastModified\":\"2020-09-24T20:02:17.928839Z\",\"state\":\"active\",\"stateTransitionTime\":\"2020-09-24T20:02:17.928839Z\",\"commandLine\":\"cmd /c echo hello world\",\"applicationPackageReferences\":[\r\n    {\r\n      \"applicationId\":\"my_application_id\"\r\n    }\r\n  ],\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"scope\":\"pool\",\"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P7D\",\"maxTaskRetryCount\":3\r\n  },\"requiredSlots\":1,\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 24 Sep 2020 20:02:17 GMT',
  etag: '0x8D860C4BD55A546',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '534963ba-5269-496a-9e5f-a902546948a2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 24 Sep 2020 20:02:18 GMT',
  connection: 'close' });
 return result; }]];