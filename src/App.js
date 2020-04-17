import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="main">
      <header>
        <Typography variant="h3" color="textPrimary" align="center">
          which episode to watch again
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" align="center">
          random episodes from your favorite series
        </Typography>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;