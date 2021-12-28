import AxiosClient from "./ClientApi";

const MusicApi = {
  getAll(params) {
    const url = "";
    return AxiosClient.get(url);
  },

  getZingChart(params) {
    const url =
      "chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1";
    return AxiosClient.get(url);
  },
};

export default MusicApi;
