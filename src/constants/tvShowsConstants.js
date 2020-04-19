export const tvShows = {
    FRIENDS: "FRIENDS",
    GREYS_ANATOMY: "GREYS_ANATOMY",
    RICK_AND_MORTY: "RICK_AND_MORTY"
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
    },
    RICK_AND_MORTY: {
        id: 80014749,
        idName: tvShows.RICK_AND_MORTY,
        name: "Rick and morty",
        filename: "rick_and_morty_episodes_id"
    }
}

export default Object.values(tvShowsInfo);