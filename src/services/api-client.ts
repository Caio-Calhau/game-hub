import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "51009ea417ce438e90ac17aef6ada3f7",
  },
});
