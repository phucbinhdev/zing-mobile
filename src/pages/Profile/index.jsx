import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MusicApi from "../../api/MusicApi";
import Album from "../../components/Album";

function Profile() {
  const [Albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchSong = async () => {
      const albums = await MusicApi.getAlbum();
      console.log("albums", albums);
      setAlbums(albums);
    };

    fetchSong();
  }, []);

  return <Container className="p-2">profle</Container>;
}

export default Profile;
