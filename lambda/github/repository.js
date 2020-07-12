const axios = require('axios');
const querystring = require('querystring');
require('dotenv').config();

const statusCode = 200

const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers": "Content-Type"
};

export function handler (event, context, callback) {
    console.log(event.queryStringParameters['name'])
    if(event.httpMethod !== 'GET' || !event.queryStringParameters) {
        callback(null, {
          statusCode,
          headers,
          body: ''
        });
    }

    const data = event.queryStringParameters;
    if(
        !data.name
      ) {
    
        console.error('Required information is missing.');
    
        callback(null, {
          statusCode,
          headers,
          body: JSON.stringify({status: 'missing-information'})
        });
    
        return;
    }

    axios.get('https://api.github.com/repos/burhanahmeed/'+data.name, {
        headers: {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        }
    }).then(data => {
        callback(null, {
            statusCode,
            headers,
            body: JSON.stringify(
                {
                    data: data.data
                }
            )
        });
    }).catch(err => {
        console.log(err)
    })
}