// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2020-09-01.12.0&maxresults=-5')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidQueryParameterValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"Value for one of the query parameters specified in the request URI is invalid.\\nRequestId:bc115f43-128a-4270-9902-1574ff1d1bbd\\nTime:2020-09-24T19:58:24.4219037Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"QueryParameterName\",\"value\":\"maxresults\"\r\n    },{\r\n      \"key\":\"QueryParameterValue\",\"value\":\"-5\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"MaxResults cannot be less than 1\"\r\n    }\r\n  ]\r\n}", { 'content-length': '614',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'bc115f43-128a-4270-9902-1574ff1d1bbd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 24 Sep 2020 19:58:24 GMT',
  connection: 'close' });
 return result; }]];