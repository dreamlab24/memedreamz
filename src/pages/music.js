import * as React from 'react'
import Layout from '../components/layout'

const Music = () => {
  return (
    <Layout pageTitle="music">
      <p>jam jam jam</p>
      <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/artist/3wAsRG2v0vEEywUsUZ0Pjq?utm_source=generator" width="100%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/3sSibit9aRrJRf543tMWcg?utm_source=generator&theme=0" width="100%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/album/0L6XbPNU80ewUNlhBCM3cn?utm_source=generator" width="100%" height="352"  allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/album/2B4p2SFUxTWSBSZATPMlGF?utm_source=generator" width="100%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </Layout>
  )
}

export const Head = () => <title>music</title>

export default Music