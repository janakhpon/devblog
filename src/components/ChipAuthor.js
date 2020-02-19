import React from 'react';
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

import styles from './ChipAuthor.module.scss'

const ChipAuthor = ({ author, authorimg }) => {
    return (
        <>
            <Chip
                avatar={<Avatar alt={author} src={authorimg} />}
                label={author}
                variant="outlined"
            />
        </>
    )
}

export default ChipAuthor