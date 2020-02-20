import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout';
import ArticleItem from '../components/articleItem'
import ChipAuthor from '../components/ChipAuthor'
import ChipItem from '../components/ChipItem'
import SearchItem from '../components/SearchItem'

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
      <Grid container spacing={2}>
        <Grid item md={8} xs={12} className={styles.articlecontainer} id="articlepane">
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return <ArticleItem slug={edge.node.fields.slug} title={edge.node.frontmatter.title} date={edge.node.frontmatter.date} author={edge.node.frontmatter.author} authorimg={edge.node.frontmatter.authorimg} key={i} />;
          })}
        </Grid>
        <Grid item md={4} xs={12} id="optionspane">
          <Grid container>
            <Grid item xs={12} className={styles.searchSection}>
              <SearchItem />
            </Grid>
            <Grid item xs={12} className={styles.authorSection}>
              <h3>Authors</h3>
              {
                uniqueauthors.map((ua, i) => {
                  return <ChipAuthor author={ua.author} authorimg={ua.authorimg} key={i} />
                })
              }
            </Grid>
            <Grid item xs={12} className={styles.authorSection}>
              <h3>Categories</h3>
              {
                category.map((item, i) => {
                  return <ChipItem tagval={item} key={i} />
                })
              }
            </Grid>
            <Grid item xs={12} className={styles.authorSection} id="tagscroll">
              <h3>Tags</h3>
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