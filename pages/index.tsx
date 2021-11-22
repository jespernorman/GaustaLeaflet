import type { NextPage } from 'next'
import dynamic from "next/dynamic"
import Head from 'next/head'
import Image from 'next/image'

const Map = dynamic(() => import("./Component/MapComponent"), { ssr:false })

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <p>Hej tjabba tjenixen</p>
    <Map />
    </>
  )
}

export default Home
// import dynamic from "next/dynamic";
// import type { NextPage } from 'next'
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import React, { useEffect, useState } from 'react';
// const Map = dynamic(() => import("./Component/MapComponent"), { ssr:false })
// import 'leaflet/dist/leaflet.css'
// import 'leaflet/dist/leaflet.js'





 
// const Home: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Gausta map app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <div className="mapofgausta">
//           <Map />
//         </div>
//       </main>
//     </div>
//   )
// }

// export default Home



// {/* <main className={styles.main}>
//             <div>
//               <h1>Gausta berget! </h1>
//             </div>
//             < MapComponent />
//             < Home />
//       </main> */}