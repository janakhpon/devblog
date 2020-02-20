import React from 'react';
import { graphql } from 'gatsby';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

import Layout from '../components/layout';
import SEO from '../components/seo'
import ChipTag from '../components/ChipTag'
import styles from './blogPost.module.scss'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        authorimg
        title
        date(formatString: "MMMM Do, YYYY")
        category
        tags
      }
      html
    }
  }
`;

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <Grid container spacing={2}  className={styles.container}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-start" m={1} p={1}>
            <Box p={1}>
              <Avatar alt={data.markdownRemark.frontmatter.author} src={data.markdownRemark.frontmatter.authorimg} className={styles.avatar} />
            </Box>
            <Box p={1}>
              <h3>{data.markdownRemark.frontmatter.author}</h3>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box p={1}>
              <h2>{data.markdownRemark.frontmatter.title}</h2>
            </Box>
          </Box>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
          <Box display="flex" justifyContent="center" alignContent="flex-start">
            <Box>
              <p>.........</p>
            </Box>
          </Box>
          <h4>Category : {data.markdownRemark.frontmatter.category}</h4>
          <h4>Published at : {data.markdownRemark.frontmatter.date}</h4>
          <Box display="flex" justifyContent="center">
            {
              data.markdownRemark.frontmatter.tags.map((item, i) => {
                return <ChipTag tagval={item} key={i} className={styles.tagchip} />
              })
            }
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default BlogPost;
