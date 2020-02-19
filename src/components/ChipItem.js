import React from 'react';
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

import styles from './ChipItem.module.scss'

const ChipItem = ({ author }) => {
    return (
        <>
            <Chip
                size="medium"
                label={author}
                variant="outlined"
            />
        </>
    )
}

export default ChipItem