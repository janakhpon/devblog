import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout';
import ArticleItem from '../components/articleItem'
import ChipAuthor from '../components/ChipAuthor'
import ChipItem from '../components/ChipItem'
import SearchItem from '../components/SearchItem'

import styles from './index.module.scss';

const Authors = () => {
    // const host = [];
    // const categoryhost = [];
    // const taghost = [];

    // useEffect(() => {
    //     const getMeta = () => {
    //         data.allMarkdownRemark.edges.map((edge, key) => {
    //             let passme = { author: edge.node.frontmatter.author, authorimg: edge.node.frontmatter.authorimg, key: key }
    //             return host.push(passme)
    //         })
    //         setState(host)

    //         data.allMarkdownRemark.edges.map((edge) => {
    //             return categoryhost.push(edge.node.frontmatter.category)
    //         })
    //         setCategory(categoryhost)

    //         data.allMarkdownRemark.edges.map((edge) => {
    //             edge.node.frontmatter.tags.map((edge) => {
    //                 return taghost.push(edge)
    //             })
    //             return setTag(taghost)
    //         })
    //     }
    //     try {
    //         getMeta()
    //     } catch (err) {
    //     }
    // }, []);


    console.log(window.history.state.author)
    const data = useStaticQuery(graphql`
        query QueryByAuthor($author: String) {
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
  `);

    return (
        <Layout>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12} className={styles.articlecontainer} id="articlepane">
                    {data.allMarkdownRemark.edges.map((edge, i) => {
                        console.log(edge)
                        return <p key={i}>Hello</p>
                    })}
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Authors