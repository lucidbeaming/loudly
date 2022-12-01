import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import { GetSongs, Song } from '../data/api'
import SongBlock from '../components/song'

function TrendingSongs() {
  const [playing, setPlaying] = useState<boolean>(false)
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    if (songs.length === 0) {
      GetSongs().then(res => {
        setSongs(res)
      })
    }
  }, [songs, setSongs])

  return (
    <div>
      <h2>Trending songs</h2>
      <Stack gap={3}>
        {songs.map((song, index) => (
          <Row key={index}>
            <SongBlock song={song} playing={playing} setPlaying={setPlaying} />
          </Row>
        ))}
      </Stack>
    </div>
  )
}

export default TrendingSongs
