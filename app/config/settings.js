import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "",
  },
  staging: {
    apiUrl: "",
  },
  prod: {
    apiUrl: "",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
