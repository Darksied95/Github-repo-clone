import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineTwitter } from "react-icons/ai";
import styles from "./Profile.module.css";

const Profile = ({ profile }) => {
  return (
    <section className={styles.container}>
      <div className={styles.house}>
        <div className={styles.image_container}>
          <img
            src={profile.avatar_url}
            alt="profile-pics"
            className={styles.profile_picture}
          />
          <button className={styles.image_button}>
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
              ></path>
            </svg>
            <p>Set Status</p>
          </button>
        </div>
        <h1>
          {profile.name} <br />
          <span>{profile.login}</span>
        </h1>
      </div>
      <input
        type="search"
        placeholder="Set status"
        className={styles.searchbar}
      />
      <p className={styles.bio}>{profile.bio}</p>
      <button className={styles.button}>Edit profile</button>
      <div>
        <div className={styles.follows}>
          <svg
            text="muted"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
          >
            <path
              fillRule="evenodd"
              d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
            ></path>
          </svg>
          <p>
            <span>{profile.followers}</span> followers
          </p>
          <span className={styles.dot}>.</span>
          <p>
            <span>{profile.following}</span> following
          </p>
        </div>
        <div className={styles.locations}>
          <div>
            <GoLocation />
            <p>{profile.location}</p>
          </div>
          <div>
            <AiOutlineTwitter />
            <p>@{profile.twitter_username}</p>
          </div>
        </div>
      </div>
      <div className={styles.test}></div>
    </section>
  );
};

export default Profile;
