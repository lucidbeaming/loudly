interface Genre {
  id: number,
  name: string
}

interface Artist {
  id: string,
  name: string,
  artist_name?: string,
  muted?: boolean,
  place?: string,
  country?: string,
  followers?: number,
  follows?: number,
  liked?: number,
  releases?: number,
  favorites?: number,
  description?: string,
  profile_image_path?: string,
  cover_image_path?: string,
  favorite_genres?: Genre[],
  created?: Date,
  location?: string,
  social_accounts?: string[],
  video_shout_out_count?: number,
  external_songs_count?: number,
  external_videos_count?: number,
  crews?: string[]
}

export interface Song {
  id: string,
  name: string,
  seo_name?: string,
  artist: Artist,
  artist_name?: string,
  duration?: number,
  bpm?: number,
  likes: number,
  faves?: number,
  plays?: number,
  reposts?: number,
  comments?: number,
  description?: string,
  tags?: string[],
  source_info?: string,
  cover_image_path: string,
  cover_image_aspect_ratio?: string,
  music_file_path: string,
  music_file_mimetype: string,
  song_genres?: Genre[],
  song_release?: Date,
  mix_packs?: string[],
  linked_crews?: string[]
}

export async function GetSongs(): Promise<Array<Song>> {
        const response = await fetch('https://api-stg.jam-community.com/song/trending')
        return await response.json()
}

export async function LikeSong(songid: string): Promise<any> {
    const AuthorizedUrl: string = "https://api-stg.jam-community.com/interact/like?apikey=" + process.env.REACT_APP_LOUDLY_KEY
               
    const response = await fetch(AuthorizedUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({'id': songid}).toString()
     })
    return await response.json()
}
