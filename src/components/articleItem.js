import React from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import styles from './articleItem.module.scss';

const ArticleItem = ({ slug, title, author }) => {
    return (
        <Grid container spacing={2} className={styles.articleItem}>
            <Grid item xs={12}>
                <Paper className={styles.paperclass} style={{ boxShadow: 'none', textDecoration: 'none' }}>
                    <h3>
                        <Link to={`/article${slug}`}>
                            {title} by {author}
                        </Link>
                    </h3>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ArticleItem;
