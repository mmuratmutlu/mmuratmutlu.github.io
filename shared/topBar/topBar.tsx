import Head from 'next/head'
import styles from './topBar.module.css'

export default function TopBar() {
  return (
    <div className={styles.container}>
        <img className={styles.logo} src="/rocket.png"></img>
        <div className={styles.pagesWrapper} >
                <button className={[styles.pageButton,true&&styles.enableButton].join(' ')}>
                        <div className={[styles.pageButtonDot,true&&styles.enableDot].join(' ')}></div>
                        CASES
                </button>
                <button className={[styles.pageButton,false&&styles.enableButton].join(' ')}>
                        <div className={[styles.pageButtonDot,false&&styles.enableDot].join(' ')}></div>
                        SERVİCES
                </button>
                <button className={[styles.pageButton,false&&styles.enableButton].join(' ')}>
                        <div className={[styles.pageButtonDot,false&&styles.enableDot].join(' ')}></div>
                        RESUME
                </button>
                <button className={[styles.pageButton,false&&styles.enableButton].join(' ')}>
                        <div className={[styles.pageButtonDot,false&&styles.enableDot].join(' ')}></div>
                        ABOUT ME
                </button>
                <button className={[styles.pageButton,false&&styles.enableButton].join(' ')}>
                        <div className={[styles.pageButtonDot,false&&styles.enableDot].join(' ')}></div>
                        CONTACT
                </button>

        </div>
        <div className={styles.navButton} >

        </div>
    </div>
  )
}
