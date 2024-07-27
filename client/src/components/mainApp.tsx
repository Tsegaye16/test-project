/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSearch, FaPlus } from "react-icons/fa";
import {
  songContainerStyle,
  tableStyle,
  tableHeaderStyle,
  tableRowStyle,
  tableCellStyle,
  searchInputStyle,
  tableContainer,
  actionBarStyle,
  popupOverlayStyle,
  popupContentStyle,
} from "../styles/mainAppStyle";

import {
  deleteButtonStyle,
  editButtonStyle,
  addButtonStyle,
  seeDetailsButtonStyle,
} from "../styles/buttonStyle";
import Statistics from "./statics/statLayout";
import AddSong from "./addSong";
import { Song } from "../types/songsType";
import UpdateSong from "./updateSong";
import { GET_SONGS, DELETE_SONG_BY_ID } from "../types/actionType";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./pagination";

const SongList: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [isSeeMore, setIsSeeMore] = useState<boolean>(false);
  const [isAddNewSong, setIsAddNewSong] = useState<boolean>(false);
  const [isUpdateSong, setIsUpdateSong] = useState<boolean>(false);
  const [songToUpdate, setSongToUpdate] = useState<Song | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const handleSeeMoreToggle = () => setIsSeeMore(!isSeeMore);
  const handleAddNewSongToggle = () => setIsAddNewSong(!isAddNewSong);

  const handleDelete = (id: string) => {
    dispatch({ type: DELETE_SONG_BY_ID, payload: id });
  };

  const handleUpdateSongToggle = () => {
    setIsUpdateSong(!isUpdateSong);
  };

  const handleEdit = (song: Song) => {
    setSongToUpdate(song);
    handleUpdateSongToggle();
  };

  const songs = useSelector(
    (state: { songs: { songs: Song[]; totalCount: number } }) =>
      state.songs.songs
  );
  const totalCount = useSelector(
    (state: { songs: { songs: Song[]; totalCount: number } }) =>
      state.songs.totalCount
  );
  const page = Math.ceil(totalCount / pageSize);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SONGS, payload: { currentPage, pageSize } }); // Dispatch the action to fetch songs with current page
  }, [dispatch, currentPage, pageSize]);

  // Filter
  const filteredSongs = songs.filter((song) =>
    [song.artist, song.title, song.album, song.genre].some((attr) =>
      attr.toLowerCase().includes(searchText.toLowerCase())
    )
  );

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
      <div css={tableContainer}>
        <table css={tableStyle}>
          <thead css={tableHeaderStyle}>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Album</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSongs.length > 0 ? (
              filteredSongs.map((song: Song) => (
                <tr css={tableRowStyle} key={song._id}>
                  <td css={tableCellStyle}>{song.artist}</td>
                  <td css={tableCellStyle}>{song.title}</td>
                  <td css={tableCellStyle}>{song.album}</td>
                  <td css={tableCellStyle}>{song.genre}</td>
                  <td css={tableCellStyle}>
                    <button
                      css={editButtonStyle}
                      onClick={() => handleEdit(song)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      css={deleteButtonStyle}
                      onClick={() => handleDelete(song._id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} css={tableCellStyle}>
                  No songs available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={page}
          pageSize={pageSize}
          onPageChange={(page: any) => setCurrentPage(page)}
          onPageSizeChanged={(pageSize: number) => setPageSize(pageSize)}
        />
      </div>

      {isSeeMore && (
        <div css={popupOverlayStyle} onClick={handleSeeMoreToggle}>
          <div css={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <Statistics songsData={songs} />
          </div>
        </div>
      )}
      {isAddNewSong && (
        <div css={popupOverlayStyle} onClick={handleAddNewSongToggle}>
          <div css={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <AddSong onClose={handleAddNewSongToggle} />
          </div>
        </div>
      )}
      {isUpdateSong && (
        <div css={popupOverlayStyle} onClick={handleUpdateSongToggle}>
          <div css={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <UpdateSong song={songToUpdate} onClose={handleUpdateSongToggle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SongList;
