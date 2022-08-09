import { useState, useEffect } from "react"
import axios from "axios";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Repositories from "../Repositories/Repositories";
import SearchRepo from "../SearchRepo/SearchRepo";
import styles from "./MainBody.module.css";

const MainBody = () => {
  const [repos, setRepos] = useState([]);
  const [profileDetails, setProfileDetails] = useState({})

  async function getReposAndProfileDetails() {
    const { data: profile } = await axios.get("https://api.github.com/users/darksied95")
    const { data: repos } = await axios.get("https://api.github.com/users/darksied95/repos")
    console.table(profile);
    console.table(repos)
    const updatedReposWithCorrectLanguage = repos.map(async (repo) => {
      const { data } = await axios.get(repo.languages_url)
      return { ...repo, language: Object.keys(data)[0] }
    })
    const updatedRepos = await Promise.all(updatedReposWithCorrectLanguage
    )
    updatedRepos.sort((a, b) => b.updated_at.localeCompare(a.updated_at))
    setRepos(updatedRepos);
    setProfileDetails(profile)
  }
  useEffect(() => {
    getReposAndProfileDetails()
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Profile profile={profileDetails} />
      </div>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.search}>
        <SearchRepo />
      </div>
      <div className={styles.repo}>
        <Repositories repos={repos} />
      </div>

    </div>
  );
};

export default MainBody;
<div></div>;
