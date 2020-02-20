import React from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout';
import SEO from '../components/seo'
import styles from './404.module.scss'

const NotFound = () => {
  return (
    <Layout>
      <SEO title={404} />
      <Grid container>
        <Grid item xs={12}>
          <h1>Page not found</h1>
          <p>Oops! The page you are looking for has been removed or relocated.</p>
          <p>
            <Link to="/" className={styles.goback}>Go Back</Link>
          </p>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NotFound;
