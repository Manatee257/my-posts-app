import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Post from '../components/Post';
import PostForm from '../components/PostForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MANATEE
        </h1>
        <div className={styles.topDiv}>
          <div className={styles.leftDiv}>
            <ul className={styles.posts}>
              <li>
                <Post 
                  content="wowwow!" 
                  date="2021/03/20" 
                  index="4" 
                  />
              </li>
              <li>
                <Post 
                  content="This is the third post." 
                  date="2021/03/19" 
                  index="3" 
                  />
              </li>
              <li>
                <Post 
                  content="This is the second post." 
                  date="2021/03/18" 
                  index="2" 
                  />
              </li>
              <li>
                <Post 
                  content="This is the first post." 
                  date="2021/03/17" 
                  index="1" 
                  />
              </li>
            </ul>
          </div>
          <div className={styles.rightDiv}>
                <div className={styles.rectangle}></div>
                <p className={styles.floatText}>WEEEEEEEB<br/>
                SITE<br/>
                ETC.<br/>
                </p>
                
          </div>
        </div>
        <form>
          <PostForm/>
        </form>

      </main>
    </div>
  )
}
