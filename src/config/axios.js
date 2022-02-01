import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

instance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "1f6658cf100e97d23c745a37ef1f8651";
  return config;
});
export default instance;
