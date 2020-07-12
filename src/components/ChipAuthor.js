import React from 'react';
import { Link } from 'gatsby'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

import styles from './ChipAuthor.module.scss'

const ChipAuthor = ({ author, authorimg }) => {
    return (
        <>
            <Link
                to={`/authors/`}
                className="categories__list-item-link"
                state={{author: author}}
            >
                <Chip
                    avatar={<Avatar alt={author} src={authorimg} />}
                    label={author}
                    clickable
                    variant="outlined"
                    className={styles.author}
                />
            </Link>
        </>
    )
}

export default ChipAuthor