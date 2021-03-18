import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Post from '../components/Post';
import PostForm from '../components/PostForm';

export default function Home({ posts }) {
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
              {posts.map(post => {
                const {content, date, index, id} = post;
                return (
                  <li key={id}>
                    <Post 
                      content={content} 
                      date={date} 
                      index={index} 
                      />
                  </li>
                )
              })}
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

export async function getStaticProps() {

  const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Posts`,{
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
    }
  })
  const { records } = await response.json();

  const posts = records.map( record => {
    return {
      id: record.id,
      ...record.fields
    }
  })

  return {
    props: {
      posts
    }
  }
}
