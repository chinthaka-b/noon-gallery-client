import Head from 'next/head'

export default function Header(props) {
  return(
    <div> 
      <Head>
        <title>Noon Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </div>
  )
}