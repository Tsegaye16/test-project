/** @jsxImportSource @emotion/react */
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  mainStatistics,
  statisticsItemStyle,
  statisticsHeaderStyle,
  statWrapper,
  statisticsItemHeaderStyle,
} from "../../styles/statLayoutStyle";

const Statistics: React.FC = () => {
  const {
    totalSongs,
    totalArtists,
    totalAlbums,
    totalGenres,
    genreCount,
    artistCount,
    albumCount,
  } = useSelector((state: RootState) => state.songs.statistics);

  return (
    <div css={mainStatistics}>
      <h2 css={statisticsHeaderStyle}>Statistics</h2>
      <div css={statWrapper}>
        <div css={statisticsItemStyle}>
          <div>Total Songs</div>
          <div>{totalSongs}</div>
        </div>
        <div css={statisticsItemStyle}>
          <div>Total Artists</div>
          <div>{totalArtists}</div>
        </div>
        <div css={statisticsItemStyle}>
          <div>Total Albums</div>
          <div>{totalAlbums}</div>
        </div>
        <div css={statisticsItemStyle}>
          <div>Total Genres</div>
          <div>{totalGenres}</div>
        </div>
      </div>
      <div css={statWrapper}>
        <div css={statisticsHeaderStyle}>Songs per Genre:</div>
        <div css={statisticsItemHeaderStyle}>
          <div>Genre</div>
          <div>No. Songs</div>
        </div>

        {Object.entries(genreCount).map(([genre, count]) => (
          <div css={statisticsItemStyle} key={genre}>
            <div>{genre}</div>
            <div>{count}</div>
          </div>
        ))}
      </div>
      <div css={statWrapper}>
        <div css={statisticsHeaderStyle}>Songs & Albums per Artist:</div>
        <div css={statisticsItemHeaderStyle}>
          <div>Artist</div>
          <div>No. Songs</div>
          <div>No. Albums</div>
        </div>
        {Object.entries(artistCount).map(([artist, { songs, albums }]) => (
          <div css={statisticsItemStyle} key={artist}>
            <div>{artist}</div>
            <div>Songs {songs}</div>
            <div>Albums {albums}</div>
          </div>
        ))}
      </div>
      <div css={statWrapper}>
        <div css={statisticsHeaderStyle}>Songs per Album:</div>
        <div css={statisticsItemHeaderStyle}>
          <div>Album</div>
          <div>No. Songs</div>
        </div>
        {Object.entries(albumCount).map(([album, count]) => (
          <div css={statisticsItemStyle} key={album}>
            <div>{album}</div>
            <div>{count} songs</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
