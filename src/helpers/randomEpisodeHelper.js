import database from "../constants/data"
import Chance from "chance";

const goToUrl = url => {
    window.open(url, "_blank");
}

const mountUrl = (episode) => {
    return `https://www.netflix.com/watch/${episode.id}`;
}

export const shuffleAndGo = (tvShow) => {
    const episodes = database[tvShow.idName]
    const randomEpisodeNumber = Chance().integer({ min: 1, max: episodes.length })
    const episodeInfo = episodes[randomEpisodeNumber];
    const url = mountUrl(episodeInfo);
    goToUrl(url);
}