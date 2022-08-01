import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "./Repository.module.css";

const Repository = ({ repo }) => {
  let current_Date = new Date().getTime()
  let lastUpdatedTime = new Date(repo.updated_at).getTime()
  console.log(current_Date);
  console.log(Date(current_Date - lastUpdatedTime));
  // console.log(repo.updated_at);
  return (
    <section className={styles.repo_container}>
      <div className={styles.header}>
        <h1>
          <a href={repo.html_url}>{repo.name}</a>
        </h1>
        <span>Public</span>
      </div>
      <div className={styles.aside}>
        <button className={styles.star_container}>
          <a href="/">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
            >
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            <p>Star</p>
          </a>
        </button>
        <button className={styles.down}>
          <AiFillCaretDown />
        </button>
      </div>
      <div className={styles.info}>
        {repo.language && <span className={styles.language_color}></span>}
        <p>{repo.language}</p>
        <p> Updated 2 days ago</p>
      </div>
    </section>
  );
};

export default Repository;
