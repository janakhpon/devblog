import React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import styles from './SearchItem.module.scss'

const useStyles = makeStyles({
    underline: {
        // normal style
        "&::before": {
            borderBottom: "1px solid #06D648"
        },
        // hover style
        "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid #DFEF4C"
        },
        // focus style
        "&::after": {
            borderBottom: "3px solid red"
        },

        background: 'transparent',
        color: '#ffffff',
    },
    formLabel: {
        color: '#ffffff',
        '&.Mui-focused': {
            color: '#d90429'
        }
    },
})

const SearchItem = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={0} className={styles.container} >
            <Grid item xs={12}>
                <TextField id="input-with-icon-grid" label="search for context" fullWidth InputProps={{ className: classes.underline }} InputLabelProps={{ className: classes.formLabel }} className={styles.searchbox} />
            </Grid>
        </Grid>
    )
}

export default SearchItem