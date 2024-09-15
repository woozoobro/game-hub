import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd7a78211c5b648a09c0c6f38bca00aa6'
  }
})