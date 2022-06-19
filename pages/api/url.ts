import url_model from '../../models/url'
import { connect } from 'mongoose'

function getString(length = 5){
  var k = ""
  for (var i = 0; i<length; i++){
      var m = Math.round(65+ Math.random()*57)
      
      while (91 <= m && m <= 96){
          m = Math.round(65+ Math.random()*57)
      }
          
      k += String.fromCharCode(m)
  }
  
  return k;
}

async function db_connect() {
  await connect('mongodb+srv://Chubkey:booman3000@images.v2rim.mongodb.net/?retryWrites=true&w=majority'); 
}

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  url: String
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await db_connect();

  const url = new url_model({
    url: getString(),
    target: req.body.url
  })

  await url.save();

  res.status(200).json({url: req.headers.host + '/' + url.url})
}
