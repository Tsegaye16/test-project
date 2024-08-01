/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSearch, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
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
  // labelStyle,
  // selectStyle,
  confirmationOverlayStyle,
  confirmationPopupStyle,
} from "../styles/mainAppStyle";
import {
  deleteButtonStyle,
  editButtonStyle,
  addButtonStyle,
  seeDetailsButtonStyle,
  confirmationButtonStyle,
  cancelButtonStyle,
} from "../styles/buttonStyle";
import Statistics from "./statics/statLayout";
import SongForm from "./songForm";
import { Song } from "../types/songsType";
import { GET_SONGS, DELETE_SONG_BY_ID } from "../types/actionType";
import Pagination from "./pagination";

const SongList: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [isSeeMore, setIsSeeMore] = useState<boolean>(false);
  const [isAddNewSong, setIsAddNewSong] = useState<boolean>(false);
  const [isUpdateSong, setIsUpdateSong] = useState<boolean>(false);
  const [songToUpdate, setSongToUpdate] = useState<Song | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [sortAttribute, setSortAttribute] = useState<string>("artist");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isDeleteConfirm, setIsDeleteConfirm] = useState<Boolean>(false);
  const [songToDelete, setSongToDelete] = useState<Song | null>(null);

  const dispatch = useDispatch();

  const handleSeeMoreToggle = () => setIsSeeMore(!isSeeMore);
  const handleAddNewSongToggle = () => setIsAddNewSong(!isAddNewSong);
  const handleUpdateSongToggle = () => setIsUpdateSong(!isUpdateSong);

  const handleDeleteConfirmation = (song: Song) => {
    setSongToDelete(song);
    setIsDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (songToDelete) {
      dispatch({ type: DELETE_SONG_BY_ID, payload: songToDelete._id });
      setSongToDelete(null);
      setIsDeleteConfirm(false);
    }
  };

  const cancelDelete = () => {
    setSongToDelete(null);
    setIsDeleteConfirm(false);
  };

  const handleEdit = (song: Song) => {
    setSongToUpdate(song);
    handleUpdateSongToggle();
  };

  const handleSortChange = (attribute: string) => {
    if (sortAttribute === attribute) {
      // Toggle sort order if the same attribute is clicked
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      // Set new attribute and default to ascending order
      setSortAttribute(attribute);
      setSortOrder("asc");
    }
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

  useEffect(() => {
    dispatch({
      type: GET_SONGS,
      payload: { currentPage, pageSize, sortAttribute, sortOrder },
    }); // Dispatch the action to fetch songs with current page
  }, [dispatch, currentPage, pageSize, sortAttribute, sortOrder]);

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
              <th onClick={() => handleSortChange("artist")}>
                Artist{" "}
                {sortAttribute === "artist" &&
                  (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSortChange("title")}>
                Title{" "}
                {sortAttribute === "title" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSortChange("album")}>
                Album{" "}
                {sortAttribute === "album" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSortChange("genre")}>
                Genre{" "}
                {sortAttribute === "genre" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
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
                      onClick={() => handleDeleteConfirmation(song)}
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
            <SongForm onClose={handleAddNewSongToggle} />
          </div>
        </div>
      )}
      {isUpdateSong && (
        <div css={popupOverlayStyle} onClick={handleUpdateSongToggle}>
          <div css={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <SongForm song={songToUpdate} onClose={handleUpdateSongToggle} />
          </div>
        </div>
      )}
      {isDeleteConfirm && (
        <div css={confirmationOverlayStyle} onClick={cancelDelete}>
          <div
            css={confirmationPopupStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this song?</p>
            <button css={confirmationButtonStyle} onClick={confirmDelete}>
              Yes, Delete
            </button>
            <button css={cancelButtonStyle} onClick={cancelDelete}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongList;
