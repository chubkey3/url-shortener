import React from 'react'
import { NextPage } from 'next'
import {connect} from 'mongoose'
import url_model from '../models/url'
import redirect from 'nextjs-redirect'
import Link from 'next/link'
import styles from "../styles/Url.module.css"

const Url:NextPage = ({url}: any) => {
  url = JSON.parse(url)
  let Redirect = null;
  if (url) {
     Redirect = redirect(url.target)
  }

  return (
    <div className={styles.container}>
      {Redirect? <Redirect/> : <div><h1>This url does not exist.</h1><p>Click <Link href={'/'}><a style={{color: "blue"}}>here</a></Link> to add a shortened url</p></div>}
    </div>
  )
}

export async function getServerSideProps({ resolvedUrl }: any) {
  await connect('mongodb+srv://Chubkey:booman3000@images.v2rim.mongodb.net/?retryWrites=true&w=majority');
  
  const url = await url_model.findOne({url: resolvedUrl.slice(1)})
  
  return {props: {url: JSON.stringify(url)}}
}

export default Url;