import { FaHeart,FaShareAlt,FaThumbsUp } from 'react-icons/fa';


import styles from './Post.module.scss';

const Post = ( { content , date , index }) => {
    return (
        <>
        <h3 className={styles.h3}>
              Post {index}
            </h3>
            <ul className={styles.postsMeta}>
                <li className={styles.postsLable}>                    
                    Test · {date}
                </li>
                <li className={styles.postsLable}>
                    <FaThumbsUp/>
                    <FaHeart/>
                    <FaShareAlt/>
                </li>
            </ul>
            <p className={styles.postsContent}>
                {content}
            </p>
            <div className={styles.contentRect}></div>
            <div className={styles.contentRect}></div>
            <div className={styles.contentRect}></div>
        </>
    )
}

export default Post;