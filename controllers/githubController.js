const githubService = require("../services/githubService");
const profileModel = require("../models/profileModel");

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const profile =
      await githubService.analyzeGithubProfile(username);

    await profileModel.saveProfile(profile);

    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getAllProfiles = async (req, res) => {
  try {
    const profiles =
      await profileModel.getAllProfiles();

    res.json(profiles);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getSingleProfile = async (req, res) => {
  try {
    const { username } = req.params;

    // Check if profile already exists in DB
    let profile =
      await profileModel.getProfileByUsername(username);

    // If not, fetch from GitHub and save
    if (!profile) {
      const githubProfile =
        await githubService.analyzeGithubProfile(username);

      await profileModel.saveProfile(githubProfile);

      profile =
        await profileModel.getProfileByUsername(username);
    }

    res.json(profile);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile
};