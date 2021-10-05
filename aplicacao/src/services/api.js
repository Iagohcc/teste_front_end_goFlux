import axios from "axios";

const api = axios.create({
  baseURL: "http://api.music-story.com/en/",
});

export default api;