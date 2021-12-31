import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Heaven</title>
        <meta name="description" content="Pizza Ordering App Coded by Y.N.Jayasekara" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  )
}
