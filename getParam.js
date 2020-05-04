'use strict';

const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-2'
})

const parameterStore = new AWS.SSM()

const getParam = param => {
  return new Promise((res, rej) => {
    parameterStore.getParameter({
      Name: param,
      WithDecryption: true
    }, (err, data) => {
        if (err) {
          return rej(err)
        }
        return res(data)
    })
  })
}

module.exports.get = async (event, context) => {
  const param = await getParam('gmailpassword')
  console.log('PARAM', param);
  return {
    statusCode: 200,
    body: JSON.stringify(param)
  };
};
