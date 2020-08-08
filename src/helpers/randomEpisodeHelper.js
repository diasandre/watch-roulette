import { getRandom } from "../services/apiService";

const goToUrl = (url) => {
  window.open(url, "_blank");
};

const mountUrl = (episodeId) => {
  return `https://www.netflix.com/watch/${episodeId}`;
};

export const shuffleAndGo = async ({ id }) => {
  const {
    data: { id: episodeId },
  } = await getRandom(id);
  const url = mountUrl(episodeId);
  goToUrl(url);
};
