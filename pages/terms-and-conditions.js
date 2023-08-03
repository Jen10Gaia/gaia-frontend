import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Marketing/Layout/Layout'
import TermsAndConditions from '../components/TermsAndConditions'


export default function TermsAndConditionsPage() {
  return (
    <Layout title="Terms and Conditions">
        <TermsAndConditions/>
    </Layout>
  )
}


