import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import tvShowService from "../../services/tvShowService";

const SearchBar = ({ }) => {
    const [popularShows, setPopularShows] = useState([]);

    const fetchData = async () => {
        const { tv_shows } = await tvShowService.getPopularShows();
        setPopularShows(tv_shows)
    }

    const formatOption = option => {
        return typeof option === "string" ? option : option.name;
    }

    useEffect(() => {
        fetchData();
    }, [])

    return <div style={{ width: 400, margin: "0 auto" }}>
        <Autocomplete
            freeSolo
            options={popularShows}
            getOptionLabel={formatOption}
            onChange={(event, selectedOption) => console.log(selectedOption)}
            renderInput={(params) => (
                <TextField {...params} label="search" margin="normal" variant="outlined" />
            )}
        />
    </div>
}

export default SearchBar;