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
  const userProfile = document.querySelector("#intro");
  const filterInput = document.querySelector(".filter-repos");

  const url = "https://api.github.com/users/";

  const handleSearchSubmit = () => {
    fetchProfile();
    fetchRepos();
  };

  const fetchProfile = async () => {
    try {
      const res = await fetch(`${url}${usernameInput}`);
      const data = await res.json();
      if (data.id) {
        console.log("sucess Profile Fetch");
        console.log(data);
        setUserInfo(data);

        userProfile.classList.remove("hide");
        filterInput.classList.remove("hide");
        // userInfo.innerHTML = displayProfile(data);   //passing data to UI function
      } else {
        console.log("thiss");
        setUserInfo("");
        setRepoList([]);

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

      <DisplayRepos repos={repoList} />
    </div>
  );
}

export default App;

// filterInput.addEventListener("input", (e) => {
//   const search = e.target.value.toLowerCase();
//   const repos = document.querySelectorAll(".repo");

//   for (const repo of repos) {
//     const repoText = repo.innerText.toLowerCase();

//     if (repoText.includes(search)) {
//       repo.classList.remove("hide");
//     } else {
//       repo.classList.add("hide");
//     }
//   }
// });
