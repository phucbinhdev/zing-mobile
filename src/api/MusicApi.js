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

  getAlbum(id = "LnxHyZGadciHJzitGTbHZnTLhzGXRaLkm") {
    // LnxHyZGadciHJzitGTbHZnTLhzGXRaLkm
    const url = `media/get-source?type=album&key=${id}`;
    return AxiosClient.get(url);
  },

  getDetalSong(id = "kmJHTZHNCVaSmSuymyFHLH") {
    // LnxHyZGadciHJzitGTbHZnTLhzGXRaLkm
    const url = `media/get-source?type=audio&key=${id}`;
    return AxiosClient.get(url);
  },

  testapi() {
    // LnxHyZGadciHJzitGTbHZnTLhzGXRaLkm
    const url = `https://music-player-pink.vercel.app/api/song?id=ZUUUEEIE`;
    return AxiosClient.get(url);
  },
};

export default MusicApi;
