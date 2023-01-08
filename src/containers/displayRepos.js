import devicons from "./icons";

function DisplayRepo({ repos }) {
  const data = repos.data;
  console.log(repos);

  // return (
  //   <div>
  //     {repos.map((repo) => {
  //       <div key={repo.id}>rerepo.name</div>;
  //     })}
  //   </div>
  // );

  return (
    <div class="repo-list">
      {repos.map((repo) => (
        <li key={repo.id} className="repos">
          <h3>{repo.name}</h3>
          <br />
          <h2>Language Icon</h2>
          {/* <div>{devicons[repo.language]}</div> */}
          <div dangerouslySetInnerHTML={{ __html: devicons[repo.language] }} />
          <br />
          <br />
          <a href={repo.html_url}> View Repo </a>
        </li>
      ))}
    </div>
  );
}
export default DisplayRepo;
