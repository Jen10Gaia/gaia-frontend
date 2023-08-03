import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Marketing/Layout/Layout'
import Landing from '../components/Landing'


export default function Home() {
  return (
    <Layout title="Welcome to Global Access Immigration Agency">
      <Landing/>
    </Layout>
  )
}
