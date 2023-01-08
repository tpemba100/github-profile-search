export default function DisplayProfile({ profile }) {
  console.log(profile);
  return (
    <div class="intro" id="intro">
      <div class="user-info" id="user-info">
        <figure>
          <h2>profile</h2>
          <img alt="user avatar" src={profile.avatar_url} />
        </figure>
        <div>
          <h2>
            <a href={profile.html_url}>
              <strong>{profile.name}</strong>
            </a>
            &nbsp;<strong class="username">@{profile.login}</strong>
          </h2>
          <p>{profile.bio}</p>
          <p>
            <strong class="blue">Location: </strong>
            {profile.location}
          </p>
          <p>
            <strong class="blue">Repos: </strong>
            {profile.public_repos}
            <strong class="blue">Followers: </strong>
            {profile.followers}
            <strong class="blue">Following: </strong>
            {profile.following}
          </p>
        </div>
      </div>
    </div>
  );
}
