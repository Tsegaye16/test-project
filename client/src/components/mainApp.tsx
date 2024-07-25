/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSearch, FaPlus } from "react-icons/fa";
import {
  songContainerStyle,
  songHeaderStyle,
  songListStyle,
  songItemStyle,
  songInfoStyle,
  actionBarStyle,
  searchInputStyle,
  popupOverlayStyle,
  popupContentStyle,
} from "../styles/mainAppStyle";
import {
  buttonStyle,
  addButtonStyle,
  seeDetailsButtonStyle,
} from "../styles/buttonStyle";
import { Song } from "../data/data";
import Statistics from "./statics/statLayout";
import AddSong from "./addSong";
import UpdateSong from "./updateSong";
import { GET_SONGS } from "../redux/types/type";
import { useDispatch, useSelector } from "react-redux";

const SongList: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [isSeeMore, setIsSeeMore] = useState<boolean>(false);
  const [isAddNewSong, setIsAddNewSong] = useState<boolean>(false);
  const [isUpdateSong, setIsUpdateSong] = useState<boolean>(false);

  const handleSeeMoreToggle = () => setIsSeeMore(!isSeeMore);
  const handleAddNewSongToggle = () => setIsAddNewSong(!isAddNewSong);
  const handleUpdateSongToggle = () => setIsUpdateSong(!isUpdateSong);

  const songs = useSelector((state: { songs: Song[] }) => state.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_SONGS }); // Dispatch the action to fetch songs
  }, [dispatch]);

  return (
    <div css={songContainerStyle}>
      <div css={actionBarStyle}>
        {/* <div css={searchInputStyle}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div> */}
        <button css={addButtonStyle} onClick={handleAddNewSongToggle}>
          <FaPlus />
          Add New Song
        </button>
        <button css={seeDetailsButtonStyle} onClick={handleSeeMoreToggle}>
          See Details
        </button>
      </div>

      <div css={songHeaderStyle}>
        <div>Artist</div>
        <div>Title</div>
        <div>Album</div>
        <div>Genre</div>
        <div>Action</div>
      </div>
      <div css={songListStyle}>
        {songs.length > 0 ? (
          songs.map((song: Song, index: number) => (
            <div
              css={songItemStyle}
              key={song.id}
              onMouseEnter={() => setHoveredIndex(song.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div css={songInfoStyle}>
                <div>{song.artist}</div>
              </div>
              <div>{song.title}</div>
              <div>{song.album}</div>
              <div>{song.genre}</div>
              <div>
                <button css={buttonStyle} onClick={handleUpdateSongToggle}>
                  <FaEdit />
                </button>
                <button css={buttonStyle}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No songs available</div>
        )}
      </div>

      {isSeeMore && (
        <div css={popupOverlayStyle} onClick={handleSeeMoreToggle}>
          <div css={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <Statistics songsData={songs} />
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
      {isUpdateSong && (
        <div css={popupOverlayStyle} onClick={handleUpdateSongToggle}>
          <div css={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <UpdateSong />
            {/* <button onClick={handlePopupToggle}>Close</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SongList;
