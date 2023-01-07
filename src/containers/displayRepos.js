const displayRepos = (repos) => {
  reposSection.classList.remove("hide");
  filterInput.classList.remove("hide");
  console.log(repos);
  for (const repo of repos) {
    const listItem = document.createElement("li");
    listItem.classList.add("repo");
    listItem.innerHTML = `
    <h3>${repo.name}</h3>
    <br />
    <div>${devicons[repo.language]}</div>
    <br />
    <br />
    <a href = ${repo.html_url} > View Repo </>
    `;
    repoList.append(listItem);
  }
};

export default displayRepos;
