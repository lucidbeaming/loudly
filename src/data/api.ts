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
