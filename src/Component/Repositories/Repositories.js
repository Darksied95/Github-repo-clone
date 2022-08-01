import React from 'react'
import Repository from '../Repository/Repository'
import styles from "./Repositories.module.css"

const Repositories = ({ repos }) => {
    return (
        <div className={styles.repos_wrapper}>
            {repos.map(repo => <Repository repo={repo} key={repo.id} />)}
        </div>
    )
}

export default Repositories