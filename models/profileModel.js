const db = require("../config/db");

const saveProfile = async (profile) => {
  const query = `
    INSERT INTO github_profiles
    (
      username,
      name,
      bio,
      public_repos,
      followers,
      following,
      total_stars,
      most_used_language,
      profile_score,
      account_age,
      github_url
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      bio = VALUES(bio),
      public_repos = VALUES(public_repos),
      followers = VALUES(followers),
      following = VALUES(following),
      total_stars = VALUES(total_stars),
      most_used_language = VALUES(most_used_language),
      profile_score = VALUES(profile_score),
      account_age = VALUES(account_age),
      github_url = VALUES(github_url)
  `;

  await db.execute(query, [
    profile.username,
    profile.name,
    profile.bio,
    profile.public_repos,
    profile.followers,
    profile.following,
    profile.total_stars,
    profile.most_used_language,
    profile.profile_score,
    profile.account_age,
    profile.github_url
  ]);
};

const getAllProfiles = async () => {
  const [rows] = await db.execute(
    "SELECT * FROM github_profiles ORDER BY analyzed_at DESC"
  );

  return rows;
};

const getProfileByUsername = async (username) => {
  const [rows] = await db.execute(
    "SELECT * FROM github_profiles WHERE username=?",
    [username]
  );

  return rows[0];
};

module.exports = {
  saveProfile,
  getAllProfiles,
  getProfileByUsername
};