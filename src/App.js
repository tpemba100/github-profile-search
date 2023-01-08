import "./App.css";
import { useState } from "react";
import DisplayProfile from "./containers/DisplayProfile";
import DisplayRepos from "./containers/DisplayRepos";

function App() {
  // const usernameInput = "tpemba100";
  const [usernameInput, SetUsernameInput] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [repoList, setRepoList] = useState([]);
  // const [loading, Setloading] = useState(true);
  const url = "https://api.github.com/users/";

  const handleSearchSubmit = () => {
    fetchProfile();
    fetchRepos();
    console.log(usernameInput);
    console.log(userInfo);
    console.log(repoList);
  };

  const fetchProfile = async () => {
    try {
      const res = await fetch(`${url}${usernameInput}`);
      const data = await res.json();
      if (data) {
        console.log("sucess Profile Fetch");
        console.log(data);
        setUserInfo(data);
        // userInfo.innerHTML = displayProfile(data);   //passing data to UI function
      } else {
        console.log("thiss");
        // userInfo.innerText = "";     seting everything to EMPTY
        // reposSection.innerText = "";
        // loading.innerHTML = `<h3 style = "color: red">Username Not Found!</h1>`; //error message
      }
    } catch (error) {
      console.log("Error occured!");
      // loading.innerText = "";
    }
  };

  const fetchRepos = async () => {
    try {
      const res = await fetch(`${url}${usernameInput}/repos`);
      const data = await res.json();
      setRepoList(data);
      console.log("sucess Repo Fetch");
      console.log(data);
    } catch (error) {
      console.log(error);
      // loading.innerText = "";
      // setLoading(false);
    }
  };

  return (
    <div class="container">
      <h1 class="main-title">Github Profile Search</h1>
      <small>Search for user in Github with their username. </small>
      <small>Type the username below!</small>
      <div class="input-container">
        <input
          type="text"
          id="search-username"
          placeholder="Search Username"
          onChange={(e) => SetUsernameInput(e.target.value)}
        />
        <button class="searchBtn" id="search-Btn" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>
      <DisplayProfile profile={userInfo} />
      {/* </section> */}
      <DisplayRepos repos={repoList} />
    </div>
  );
}

export default App;
