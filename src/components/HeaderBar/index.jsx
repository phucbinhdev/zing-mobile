import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MusicApi from "../../api/MusicApi";
import Avatar from "../Avatar";
import Searchbar from "../SearchBar";
import SearchLoading from "./components/SearchLoading";
import SearchResult from "./components/SearchResult";
import "./style.scss";

function HeaderBar() {
  const [searchSong, setSearchSong] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const HandleSearchSong = async (keySearch) => {
    if (keySearch !== "") {
      try {
        setisLoading(true);
        const res = await MusicApi.searchSong(keySearch);
        setSearchSong(res);
      } finally {
        setisLoading(false);
      }
    } else {
      setSearchSong([]);
    }
  };

  return (
    <Container
      className="position-fixed topbar"
      style={{
        zIndex: 99,
        backdropFilter: 1,
      }}
      // onBlur={() => setOpen(false)}
    >
      tao ne{searchSong?.length}
      <div className="d-flex">
        <Avatar />
        <Searchbar searchSongFn={HandleSearchSong} />
      </div>
      {isLoading ? <SearchLoading /> : <SearchResult result={searchSong} />}
    </Container>
  );
}

export default HeaderBar;
