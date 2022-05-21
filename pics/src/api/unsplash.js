import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID jTPv-_x4gI-AmHik7GisI0qwip6a3P6LPL3NadIHLFU",
  },
});
