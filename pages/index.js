import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Page from '../components/page'
import '../css/styles.css'

const Home = () => {
  let btnPress = false
  
  return (

  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />
    <Page/>
  </div>
)}

export default Home
