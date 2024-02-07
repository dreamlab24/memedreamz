import * as React from 'react'
import Layout from '../components/layout'

const Music = () => {
  return (
    <Layout pageTitle="music">
      <p>jam jam jam</p>
      <iframe style={{borderRadius: "12px", borderWidth: "none"}} src="https://open.spotify.com/embed/playlist/3sSibit9aRrJRf543tMWcg?utm_source=generator" width="100%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </Layout>
  )
}

export const Head = () => <title>music</title>

export default Music