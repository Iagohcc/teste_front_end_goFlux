import axios from "axios";

const api = axios.create({
  baseURL: "http://developers.music-story.com/developers/genre",
});

export default api;