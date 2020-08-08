import React, { useState, useEffect } from "react";
import "../../style.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { shuffleAndGo } from "../../helpers/randomEpisodeHelper";
import { Icon, Button } from "@material-ui/core";
import { listAllTvShows } from "../../services/apiService";

const SearchBar = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [tvShows, setTvShows] = useState([]);

  const goToRandomEpisode = () => shuffleAndGo(selectedShow);

  const fetchTvShows = async () => {
    const { data } = await listAllTvShows();
    setTvShows(data);
  };

  useEffect(() => {
    fetchTvShows();
  }, []);

  return (
    <div className="search-bar">
      <Autocomplete
        options={tvShows}
        getOptionLabel={(option) => option.title}
        onChange={(event, selectedOption) => setSelectedShow(selectedOption)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="search"
            margin="normal"
            variant="outlined"
          />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        disabled={selectedShow == null}
        onClick={goToRandomEpisode}
      >
        GO
      </Button>
    </div>
  );
};

export default SearchBar;
