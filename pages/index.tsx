import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TopBar from '../shared/topBar/topBar'
import Image from 'next/image'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar/>

      <main className={styles.main}>
        <div style={{width:'6vw',height:'6vw',position:'absolute',top:'10%',bottom:'90%'}} className={styles.round}/>
        <div style={{width:'3vw',height:'3vw',position:'absolute',top:'40%',right:'20%'}} className={styles.round}/>
        <div style={{width:'3vw',height:'3vw',position:'absolute',bottom:'30%',right:'80%'}} className={styles.round}/>
        <div style={{width:'9vw',height:'9vw',position:'absolute',bottom:'5%',right:'50%'}} className={styles.round}/>
        <div style={{top:'10%',left:'25%'}} className={styles.talkingBalloon}>
          <span className={styles.wave}>👋</span>
          <div className={styles.textContainer}>
            <h5>Selam, Ben</h5>
            <h3>Murat</h3>
          </div>
         </div>
         <img style={{width:'15vw'}} src="/me.jpeg" className={styles.myphoto}></img>

         <div style={{top:'30%',left:'15%',flexDirection:'column'}} className={styles.talkingBalloon}>
         <img style={{width:'150px',paddingBottom:'5px'}} src="/mern.png"></img>
          <div className={styles.textContainer}>
            <h3>MERN Stack Geliştiricisiyim.</h3>
          </div>
         </div>

        <div className={styles.frame}>
          <div className={styles.round}>
          
          </div>
       </div>

      
     
      </main>

    </div>
  )
}
