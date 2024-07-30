/** @jsxImportSource @emotion/react */
import React from "react";
import { calculateStatistics } from "./statCcalculation"; // Update import if needed
import {
  mainStatistics,
  statisticsItemStyle,
  statisticsHeaderStyle,
  statWrapper,
  statisticsItemHeaderStyle,
} from "../../styles/statLayoutStyle";
import { Song } from "../../types/songsType";

interface StatisticsProps {
  songsData: Song[];
}

const StatisticsItem = ({ label, value }: { label: string; value: number }) => (
  <div css={statisticsItemStyle}>
    <div>{label}</div>
    <div>{value}</div>
  </div>
);

const StatisticsList = ({
  title,
  items,
}: {
  title: string;
  items: [string, number][];
}) => (
  <div css={statWrapper}>
    <div css={statisticsHeaderStyle}>{title}</div>
    <div css={statisticsItemHeaderStyle}>
      <div>{title.split(" ")[2]}</div>
      <div>No. Songs</div>
    </div>
    {items.map(([key, value]) => (
      <div css={statisticsItemStyle} key={key}>
        <div>{key}:</div>
        <div>{value}</div>
      </div>
    ))}
  </div>
);

const ArtistStatistics = ({
  artistCount,
}: {
  artistCount: Record<string, { songs: number; albums: Set<string> }>;
}) => (
  <div css={statWrapper}>
    <div css={statisticsHeaderStyle}>Songs & Albums per Artist:</div>
    <div css={statisticsItemHeaderStyle}>
      <div>Artist</div>
      <div>No. Songs</div>
      <div>No. Albums</div>
    </div>
    {Object.entries(artistCount).map(([artist, { songs, albums }]) => (
      <div css={statisticsItemStyle} key={artist}>
        <div>{artist}:</div>
        <div>Songs: {songs}</div>
        <div>Albums: {albums.size}</div>
      </div>
    ))}
  </div>
);

const Statistics: React.FC<StatisticsProps> = ({ songsData }) => {
  const {
    totalSongs,
    totalArtists,
    totalAlbums,
    totalGenres,
    genreCount,
    artistCount,
    albumCount,
  } = calculateStatistics(songsData);

  return (
    <div css={mainStatistics}>
      <h2 css={statisticsHeaderStyle}>Statistics</h2>
      {!totalSongs ? (
        <h3>No songs available</h3>
      ) : (
        <>
          <div css={statWrapper}>
            <StatisticsItem label="Total Songs" value={totalSongs} />
            <StatisticsItem label="Total Artists" value={totalArtists} />
            <StatisticsItem label="Total Albums" value={totalAlbums} />
            <StatisticsItem label="Total Genres" value={totalGenres} />
          </div>
          <StatisticsList
            title="Songs per Genre:"
            items={Object.entries(genreCount)}
          />
          <ArtistStatistics artistCount={artistCount} />
          <StatisticsList
            title="Songs per Album:"
            items={Object.entries(albumCount)}
          />
        </>
      )}
    </div>
  );
};

export default Statistics;
