import AxiosClient from "./ClientApi";

const MusicApi = {
  getHomePage(params) {
    const baseURL = "https://music-player-pink.vercel.app/api/";
    const url = `home?page=1`;
    return AxiosClient.get(url, {
      baseURL,
    });
  },

  searchSong(params) {
    const baseURL = `https://api-kaito-music.vercel.app/api/`;
    const url = `search/?query=${params}&limit=10`;
    return AxiosClient.get(url, {
      baseURL,
    });
  },

  getZingChart(params) {
    const url =
      "chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1";
    return AxiosClient.get(url);
  },

  getAlbum(id = "LnxHyZGadciHJzitGTbHZnTLhzGXRaLkm") {
    // LnxHyZGadciHJzitGTbHZnTLhzGXRaLkm
    const url = `media/get-source?type=album&key=${id}`;
    return AxiosClient.get(url);
  },

  getDetailSong(code = "kmJHTZHNCVaSmSuymyFHLH") {
    // LnxHyZGadciHJzitGTbHZnTLhzGXRaLkm
    const url = `media/get-source?type=audio&key=${code}`;
    return AxiosClient.get(url);
  },

  getMvList() {
    const baseURL = "https://music-player-pink.vercel.app/api/";

    const url = `listMV?id=IWZ9Z08I&page=1&count=16`;
    return AxiosClient.get(url, {
      baseURL,
    });
  },

  getDetailArtist(nameArtist) {
    const baseURL = "https://music-player-pink.vercel.app/api/";

    const url = `artist?name=${nameArtist}`;
    return AxiosClient.get(url, {
      baseURL,
    });
  },
};

export default MusicApi;
