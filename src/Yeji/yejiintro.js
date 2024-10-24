export function Intro() {
    const style = {
        borderRadius: "12px",
      }

    return (
        <div>
            <h1>임예지</h1>
            <h1>2002년 1월 15일 생</h1>
            <h1>요즘 자주 듣는 노래</h1>
            <iframe style={style} src="https://open.spotify.com/embed/album/3OaW4df1SA62k0arNpn6bK?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Firstalbum"></iframe>
            <iframe style={style} src="https://open.spotify.com/embed/track/4nNZ4ra9sJnsdixXELkfW5?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="firstSong"></iframe>
            <iframe style={style}  src="https://open.spotify.com/embed/album/6aPyqaE53xagYyLIYZjB1e?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Secondalbum"></iframe>
        </div>
    )
}
