import { getRandom } from "../services/apiService";

const goToUrl = (url) => {
  window.open(url, "_blank");
};

const mountUrl = (type, episodeId) => {
  if(type === 'NETFLIX') {
    return `https://www.netflix.com/watch/${episodeId}`;
  }

  if(type === 'PRIME') {
    return `https://www.primevideo.com/region/na/detail/${episodeId}/?autoplay=1&t=0`;
  }

};

export const shuffleAndGo = async ({ id }) => {
  const {
    data,
  } = await getRandom(id);
  const { id: episodeId } = data[0];
  const url = mountUrl(episodeId);
  goToUrl(url);
};
