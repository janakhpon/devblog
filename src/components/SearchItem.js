import React from 'react';
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import TextField from '@material-ui/core/TextField'

import styles from './SearchItem.module.scss'

const SearchItem = () => {
    return (
        <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                <SearchIcon fontSize="large" />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" label="search for context" fullWidth />
            </Grid>
        </Grid>
    )
}

export default SearchItem