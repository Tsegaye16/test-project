/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { FaPlay, FaEdit, FaTrash, FaSearch, FaPlus } from "react-icons/fa";
import {
  songContainerStyle,
  songHeaderStyle,
  songListStyle,
  songItemStyle,
  songInfoStyle,
  album,
  actionBarStyle,
  searchInputStyle,
  mainBody,
  popupOverlayStyle,
  popupContentStyle,
} from "../styles/mainAppStyle";
import {
  buttonStyle,
  addButtonStyle,
  seeDetailsButtonStyle,
} from "../styles/buttonStyle";
import { songsData, Song } from "../data/data";
import Statistics from "./statics/statLayout";
import AddSong from "./addSong";

const songsPerPage = 10;

const SongList: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [isSeeMore, setIsSeeMore] = useState<boolean>(false);
  const [isAddNewSong, setIsAddNewSong] = useState<boolean>(false);

  // Filter songs based on search Artist alphabetically
  const getFilteredSongs = (): Song[] => {
    return songsData.sort((a, b) => a.artist.localeCompare(b.artist));
  };
  const handleSeeMoreToggle = () => {
    setIsSeeMore(!isSeeMore);
  };
  const handleAddNewSongToggle = () => {
    setIsAddNewSong(!isAddNewSong);
  };

  return (
    <div css={songContainerStyle}>
      <div css={actionBarStyle}>
        <div css={searchInputStyle}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button css={addButtonStyle} onClick={handleAddNewSongToggle}>
          <FaPlus />
          Add New Song
        </button>
        <button css={seeDetailsButtonStyle} onClick={handleSeeMoreToggle}>
          See Details
        </button>
      </div>

      <div css={mainBody}>
        <div css={songHeaderStyle}>
          <div>Artist</div>
          <div>Title</div>
          <div>Album</div>
          <div>Genre</div>
          <div>Action</div>
        </div>
        <div css={songListStyle}>
          {getFilteredSongs().map((song, index) => (
            <div
              css={songItemStyle}
              key={song.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div css={songInfoStyle}>
                {hoveredIndex === index ? <FaPlay /> : ""}
                <img src={song.image} alt={song.title} />
                <div className="text">
                  <div css={album}>{song.album}</div>
                  <div>{song.artist}</div>
                </div>
              </div>
              <div>{song.title}</div>
              <div>{song.album}</div>
              <div>{song.genre}</div>
              <div>
                <button css={buttonStyle}>
                  <FaEdit />
                </button>
                <button css={buttonStyle}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isSeeMore && (
        <div css={popupOverlayStyle} onClick={handleSeeMoreToggle}>
          <div css={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <Statistics />
            {/* <button onClick={handlePopupToggle}>Close</button> */}
          </div>
        </div>
      )}
      {isAddNewSong && (
        <div css={popupOverlayStyle} onClick={handleAddNewSongToggle}>
          <div css={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <AddSong />
            {/* <button onClick={handlePopupToggle}>Close</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SongList;
