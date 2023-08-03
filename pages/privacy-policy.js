import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Marketing/Layout/Layout'
import PrivacyPolicyPage from '../components/PrivacyPolicyPage'


export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy">
      <PrivacyPolicyPage/>
    </Layout>
  )
}


