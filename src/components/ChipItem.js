import React from 'react';
import Chip from '@material-ui/core/Chip'

import styles from './ChipItem.module.scss'

const ChipItem = ({ tagval }) => {
    return (
        <Chip
            label={tagval}
            variant="outlined"
            clickable
            color="primary"
            className={styles.chip}
        />
    )
}

export default ChipItem