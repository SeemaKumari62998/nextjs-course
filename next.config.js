const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if ((phase = PHASE_DEVELOPMENT_SERVER)) {
    return {
      env: {
        mongodb_username: "seema",
        mongodb_password: "seema123",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site_dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "seema",
      mongodb_password: "seema123",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
