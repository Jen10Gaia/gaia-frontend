import Head from 'next/head'
import Image from 'next/image'
import AboutPage from '../components/AboutPage'

import Layout from '../components/Marketing/Layout/Layout'


export default function About() {
  return (
    <Layout title="About Us">
      <AboutPage/>
    </Layout>
  )
}


