import React from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import styles from './articleItem.module.scss';

const ArticleItem = ({ slug, title, author, authorimg, date }) => {
    return (
        <Grid container spacing={2} className={styles.articleItem}>
            <Grid item xs={8}>
                <Avatar alt={author} src={authorimg} className={styles.avatar} />
                <h4>{author}</h4>
                <Link to={`/article${slug}`} className={styles.linkstyle}>
                    {title}
                </Link>
            </Grid>
            <Grid item xs={4}>
                <p>{date}</p>
            </Grid>
            <Grid item xs={12}>
                <h1>{``}</h1>
            </Grid>
        </Grid>
    );
};

export default ArticleItem;
