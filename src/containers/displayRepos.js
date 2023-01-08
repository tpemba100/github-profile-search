function DisplayRepo({ repos }) {
  const data = repos.data;
  const filterInput = document.querySelector(".filter-repos");

  console.log(repos);

  const handleRepoSearch = (e) => {
    const search = e.target.value.toLowerCase();
    console.groupEnd(search);
  };

  filterInput.addEventListener("input", (e) => {
    const search = e.target.value.toLowerCase();
    const repos = document.querySelectorAll(".repo");

    for (const repo of repos) {
      const repoText = repo.innerText.toLowerCase();

      if (repoText.includes(search)) {
        repo.classList.remove("hide");
      } else {
        repo.classList.add("hide");
      }
    }
  });

  return (
    <div class="repos">
      <input
        type="text"
        class="filter-repos hide"
        placeholder="Search Repositories"
        // onChange={handleRepoSearch}
        onChange={(e) => handleRepoSearch(e.target.value)}
      />
      <ul class="repo-list">
        {repos.map((repo) => (
          <li key={repo.id} className="repo">
            <h3>{repo.name}</h3>
            <br />
            {repo.language}
            <br />
            <br />
            <a href={repo.html_url}> View Repo </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DisplayRepo;
