import React, { useRef, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { PauseCircleFill, PlayCircleFill, HandThumbsUp, HandThumbsUpFill } from 'react-bootstrap-icons'
import { LikeSong } from '../data/api'

interface passedProps {
  setPlaying: Function, 
  id: string, 
  playing: string, 
  file: string,
  type: string
}

function SoundPlayer({ setPlaying, id, playing, file, type}: passedProps) {
  const [liked, setLiked] = useState<boolean>(false)
  const [paused, setPaused] = useState<boolean>(false)
  const audioInstance = useRef<HTMLAudioElement>(null)

  const play = () => {
    const allPlayers = document.getElementsByTagName('audio')
    const playersArray = [...allPlayers]
    playersArray.map(player => {
      player.pause()
      return null
    })
    audioInstance?.current?.play()
    setPlaying(id)
  }

  const pause = () => {
    audioInstance?.current?.pause()
    setPlaying('')
  }

  const togglePlay = () => {
    if (!audioInstance?.current?.paused) {
      pause()
    } else {
      play()
    }
    setPaused(!paused)
  }

  const toggleLike = () => {
    if (!liked) {
      LikeSong(id).then(res => {
          console.log("Liked " + id)
          // Output for demo only. Production would use account methods.
      })
    }
    setLiked(!liked)
  }

  useEffect(() => {
    if (audioInstance?.current?.paused) {
      setPaused(true)
    }
  }, [playing])

  return (
    <div className="song-player">
      <audio ref={audioInstance}>
        <source src={ file } type={ type } />
        Your browser does not support the audio tag.
      </audio>
      <ButtonGroup aria-label="Audio tools">
        <Button variant="primary" onClick={togglePlay}>{paused ? <PlayCircleFill /> : <PauseCircleFill />}</Button>
        <Button variant="primary" onClick={toggleLike}>{liked ? <HandThumbsUpFill /> : <HandThumbsUp />}</Button>
      </ButtonGroup>
    </div>
  )
}


export default SoundPlayer
