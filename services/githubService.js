const axios = require("axios");

const analyzeGithubProfile = async (username) => {
  const userResponse = await axios.get(
    `https://api.github.com/users/${username}`
  );

  const repoResponse = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  const user = userResponse.data;
  const repos = repoResponse.data;

  let totalStars = 0;
  const languageCount = {};

  repos.forEach((repo) => {
    totalStars += repo.stargazers_count;

    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  const mostUsedLanguage =
    Object.keys(languageCount).length > 0
      ? Object.keys(languageCount).reduce((a, b) =>
          languageCount[a] > languageCount[b] ? a : b
        )
      : "N/A";

  const accountAge =
    new Date().getFullYear() -
    new Date(user.created_at).getFullYear();

  const profileScore =
    user.public_repos * 2 +
    user.followers * 3 +
    totalStars * 5;

  return {
    username: user.login,
    name: user.name,
    bio: user.bio,
    public_repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    total_stars: totalStars,
    most_used_language: mostUsedLanguage,
    profile_score: profileScore,
    account_age: accountAge,
    github_url: user.html_url
  };
};

module.exports = {
  analyzeGithubProfile
};