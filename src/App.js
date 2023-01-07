import "./App.css";
import { useState } from "react";

function App() {
  // const usernameInput = "tpemba100";
  const [usernameInput, SetUsernameInput] = useState("");
  // const [loading, Setloading] = useState(true);
  const url = "https://api.github.com/users/";

  const handleSearchSubmit = () => {
    fetchProfile();
  };
  const fetchProfile = async () => {
    // loading.innerText = "Loading...";        ANOTHER LOADING STATE
    try {
      const res = await fetch(`${url}${usernameInput}`);
      const data = await res.json();
      if (data) {
        console.log(data);
        // userInfo.innerHTML = displayProfile(data);
      } else {
        console.log("thiss");
        // userInfo.innerText = "";
        // reposSection.innerText = "";
        // loading.innerHTML = `<h3 style = "color: red">Username Not Found!</h1>`;
      }
    } catch (error) {
      console.log("Error occured!");
      // loading.innerText = "";
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

      <section class="intro" id="intro"></section>

      <section class="repos hide">
        <input
          type="text"
          class="filter-repos hide"
          placeholder="Search Repositories"
        />
        <ul class="repo-list"></ul>
      </section>

      <div id="loading"></div>
    </div>
  );
}

export default App;
