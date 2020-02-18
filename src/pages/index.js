import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

import Layout from '../components/layout';
import styles from './index.module.scss';

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              author
              date(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Grid container spacing={1}>
        <Grid item md={8} xs={12} >

          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper className="paperclass" style={{ boxShadow: 'none', textDecoration: 'none' }}>
                    <h3>
                      <Link to={`/blog${edge.node.fields.slug}`}>
                        {edge.node.frontmatter.title} by {edge.node.frontmatter.author}
                      </Link>
                    </h3>
                  </Paper>
                </Grid>
              </Grid>
            );
          })}


        </Grid>
        <Grid item md={4} xs={12} >
          <Grid container>
            <Grid xs={12}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <SearchIcon fontSize="large" />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="..." fullWidth />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: '2rem' }}>
              {
                ''
              }
            </Grid>
            <Grid item={12}>
              <Chip
                avatar={<Avatar alt="Janakh Pon" src="https://avatars3.githubusercontent.com/u/42414925?s=460&v=4" />}
                label="Janakh Pon"
                variant="outlined"
              />
              <Chip
                avatar={<Avatar alt="Janakh Pon" src="https://avatars3.githubusercontent.com/u/42414925?s=460&v=4" />}
                label="Janakh Pon"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};


export default Index