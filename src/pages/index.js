import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';

import Layout from '../components/layout';
import ArticleItem from '../components/articleItem'
import ChipAuthor from '../components/ChipAuthor'
import ChipItem from '../components/ChipItem'

import styles from './index.module.scss';

const Index = () => {
  const [state, setState] = useState([])
  const [category, setCategory] = useState([])
  const [tag, setTag] = useState([])
  const host = [];
  const categoryhost = [];
  const taghost = [];

  useEffect(() => {
    const getMeta = () => {
      data.allMarkdownRemark.edges.map((edge, key) => {
        let passme = { author: edge.node.frontmatter.author, authorimg: edge.node.frontmatter.authorimg, key: key }
        return host.push(passme)
      })
      setState(host)

      data.allMarkdownRemark.edges.map((edge) => {
        return categoryhost.push(edge.node.frontmatter.category)
      })
      setCategory(categoryhost)

      data.allMarkdownRemark.edges.map((edge) => {
        edge.node.frontmatter.tags.map((edge) => {
          return taghost.push(edge)
        })
        return setTag(taghost)
      })
    }
    try {
      getMeta()
    } catch (err) {
    }
  }, []);


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
              authorimg
              category
              tags
              date(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    }
  `);

  const uniqueauthors = state.reduce((item, current) => {
    const x = item.find(item => item.author === current.author);
    if (!x) {
      return item.concat([current]);
    } else {
      return item;
    }
  }, []);

  return (
    <Layout>
      <Grid container spacing={1}>
        <Grid item md={8} xs={12} >
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return <ArticleItem slug={edge.node.fields.slug} title={edge.node.frontmatter.title} author={edge.node.frontmatter.author} key={i} />;
          })}
        </Grid>
        <Grid item md={4} xs={12} >
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <SearchIcon fontSize="large" />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="..." fullWidth />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginTop: '.5rem' }}>
              <h3>Authors</h3>
            </Grid>
            <Grid item xs={12}>
              {
                uniqueauthors.map((ua, i) => {
                  return <ChipAuthor author={ua.author} authorimg={ua.authorimg} key={i} />
                })
              }
            </Grid>
            <Grid item xs={12} style={{ marginTop: '.5rem' }}>
              <h3>Categories</h3>
            </Grid>
            <Grid item xs={12}>
              {
                category.map((item, i) => {
                  return <ChipItem tagval={item} key={i} />
                })
              }
            </Grid>
            <Grid item xs={12} style={{ marginTop: '.5rem' }}>
              <h3>Tags</h3>
            </Grid>
            <Grid item xs={12}>
              {
                tag.map((item, i) => {
                  return <ChipItem tagval={item} key={i} />
                })
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Index