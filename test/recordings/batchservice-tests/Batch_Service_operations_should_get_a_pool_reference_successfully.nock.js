// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1?api-version=2020-09-01.12.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools/@Element\",\"id\":\"nodesdktestpool1\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D860C249A45285\",\"lastModified\":\"2020-09-24T19:44:44.8352901Z\",\"creationTime\":\"2020-09-24T19:43:01.6580447Z\",\"state\":\"active\",\"stateTransitionTime\":\"2020-09-24T19:43:01.6580447Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2020-09-24T19:44:24.2075904Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":3,\"targetDedicatedNodes\":3,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n      \"autoUser\":{\r\n        \"scope\":\"pool\",\"elevationLevel\":\"nonadmin\"\r\n      }\r\n    },\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"userAccounts\":[\r\n    {\r\n      \"name\":\"nonAdminUser\",\"elevationLevel\":\"nonadmin\",\"windowsUserConfiguration\":{\r\n        \"loginMode\":\"interactive\"\r\n      }\r\n    }\r\n  ],\"certificateReferences\":[\r\n    \r\n  ],\"metadata\":[\r\n    {\r\n      \"name\":\"foo2\",\"value\":\"bar2\"\r\n    }\r\n  ],\"taskSlotsPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"osVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 24 Sep 2020 19:44:44 GMT',
  etag: '0x8D860C249A45285',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '43d28a99-7ff0-40ff-8bec-8321f3dd30b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 24 Sep 2020 19:51:25 GMT',
  connection: 'close' });
 return result; }]];