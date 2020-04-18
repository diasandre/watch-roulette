export const tvShows = {
    FRIENDS: "FRIENDS",
    GREYS_ANATOMY: "GREYS_ANATOMY"
}

export const tvShowsInfo = {
    FRIENDS: {
        id: 70153404,
        idName: tvShows.FRIENDS,
        name: "Friends",
        filename: "friends_episodes_id"
    },
    GREYS_ANATOMY: {
        id: 70140391,
        idName: tvShows.GREYS_ANATOMY,
        name: "Grey's Anatomy",
        filename: "greys_anatomy_episodes_id"
    }
}

export default Object.values(tvShowsInfo);