import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react'



const Home: NextPage = () => {
  const [url, setUrl] = useState("")

  const copy = () => {
    navigator.clipboard.writeText(url);
  }

  const submit: any = (e: any) => {
    e.preventDefault()

    let k = e.target["0"].value;

    if (k.slice(0, 8) != 'https://'){
      k = 'https://' + k;
    }

    axios.post('/api/url', {url: k})
    .then((res) => setUrl(res.data.url))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Monkey URL</title>
        <meta name="description" content="Shorten URLs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Monkey URL!</a>
        </h1>

        <p className={styles.description}>
          A fast and simple URL shortener.
        </p>
        <h2>Get Started By Adding A Link Below</h2>
        <div className={styles.input_container}>
          
          <form onSubmit={submit}>
            <label>URL</label>
            <input type={'text'}/>
            <input type={'submit'}/>
          </form>
        </div>
        {url && <div className={styles.output_container}><p>Your shortened URL</p><code><a href={'/'+url.split('/')[1]}>{url}</a></code><button onClick={copy}>Copy</button></div>}
      </main>
    </div>
  )
}

export default Home
