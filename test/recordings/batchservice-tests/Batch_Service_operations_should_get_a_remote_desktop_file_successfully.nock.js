// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvmps_7a072dabbdb7adc2b4e9e8f834417c39f21d329ad5fcb4e289196d8bb3e5bbb0_d/rdp?api-version=2020-09-01.12.0')
  .reply(200, "full address:s:52.185.164.205\r\nLoadBalanceInfo:s:Cookie: mstshash=TVM#TVM_IN_0", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '341ce507-794a-4106-805a-4c82c5df70cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 25 Sep 2020 22:46:22 GMT',
  connection: 'close' });
 return result; }]];