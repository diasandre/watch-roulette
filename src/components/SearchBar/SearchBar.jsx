import React, { useState } from 'react';
import '../../style.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import availableTvShows from "../../constants/tvShowsConstants"
import { shuffleAndGo } from '../../helpers/randomEpisodeHelper';
import { Icon, Button } from '@material-ui/core';

const SearchBar = ({ }) => {
    const [selectedShow, setSelectedShow] = useState(null)

    const goToRandomEpisode = () => shuffleAndGo(selectedShow);

    return <div className="search-bar">
        <Autocomplete
            options={availableTvShows}
            getOptionLabel={option => option.name}
            onChange={(event, selectedOption) => setSelectedShow(selectedOption)}
            renderInput={(params) => (
                <TextField {...params} label="search" margin="normal" variant="outlined" />
            )}
        />
        <Button
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
            disabled={selectedShow == null}
            onClick={goToRandomEpisode}>
            GO
          </Button>
    </div>
}

export default SearchBar;