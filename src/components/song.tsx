import React, { useState, useEffect } from 'react'
import { LikeSong, Song } from '../data/api'
import SoundPlayer from '../components/audio'

function SongBlock(props: any) {

  return (
    <div className="song-block">
      <div className="song-thumb">
        <img src={ props.song.cover_image_path } alt="Album artwork" width="150" />
      </div>
      <div className="song-meta">
        <h3>{ props.song.name }</h3>

        <SoundPlayer 
          file={ props.song.music_file_path } 
          type={ props.song.music_file_mimetype }
          id={ props.song.id }
          playing={ props.playing }
          setPlaying={ props.setPlaying }
        />
      
      </div>
    </div>
  )
}

export default SongBlock
