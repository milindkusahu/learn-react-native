import "./GitHubProfile.css";

const GitHubProfile = ({ isLoading, data, error }) => {
  if (isLoading) {
    return <div className="status-screen">Loading...</div>;
  }

  if (error) {
    return <div className="status-screen">{error}</div>;
  }

  if (!data) {
    return <div className="status-screen">No data available</div>;
  }

  return (
    <div className="github-profile-root">
      <div className="github-profile-card">
        <div className="github-profile-avatar-wrapper">
          <img
            src={data.avatar_url}
            alt="Profile"
            className="github-profile-avatar"
          />
        </div>
        <h2 className="github-profile-name">{data.name}</h2>
        <p className="github-profile-username">@{data.login}</p>
        {data.bio && <p className="github-profile-bio">{data.bio}</p>}
        <div className="github-profile-stats">
          <div className="github-profile-stat">
            <div className="github-profile-stat-value">{data.followers}</div>
            <div className="github-profile-stat-label">Followers</div>
          </div>
          <div className="github-profile-stat">
            <div className="github-profile-stat-value">{data.following}</div>
            <div className="github-profile-stat-label">Following</div>
          </div>
          <div className="github-profile-stat">
            <div className="github-profile-stat-value">{data.public_repos}</div>
            <div className="github-profile-stat-label">Repos</div>
          </div>
        </div>
        <button
          className="github-profile-button"
          onClick={() => window.open(data.html_url, "_blank")}
        >
          Visit Profile
        </button>
      </div>
    </div>
  );
};

export default GitHubProfile;
