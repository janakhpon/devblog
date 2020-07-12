import React from 'react';
import { graphql } from 'gatsby';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
// import Avatar from '@material-ui/core/Avatar'
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import Layout from '../components/layout';
import SEO from '../components/seo'
// import ChipTag from '../components/ChipTag'

export const query = graphql`
query($author: String) {
    allMarkdownRemark (filter: {frontmatter: { author: {eq: $author }}}){
    edges {
        node {
        frontmatter {
            author
            authorimg
            category
            date
            draft
            layout
            tags
            title
        }
        }
    }
    }
}
`;

const AuthorList = ({ data }) => {
  return (
    <Layout>
      <SEO title="suprise idiots!" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-start" m={1} p={1}>
            <Box p={1}>
              {/* <Avatar alt={data.markdownRemark.frontmatter.author} src={data.markdownRemark.frontmatter.authorimg} className={styles.avatar} />
              <h3>{data.markdownRemark.frontmatter.author}</h3>
              <Link to={`/`}>
                <ChevronLeftIcon className={styles.menuicon} />
              </Link> */}
                {data.allMarkdownRemark.edges.map((edge, i) => {
                        return <p>Haha</p>;
                    })}
            </Box>
          </Box>
          {/* <Box display="flex" justifyContent="center">
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
          </Box> */}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AuthorList;
