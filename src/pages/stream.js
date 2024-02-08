import React, { useRef } from 'react';
import Layout from '../components/layout'
import { TwitchEmbed } from 'react-twitch-embed';


const Stream = () => {

const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  
const handleReady = (e) => {
    embed.current = e;
  };

  return (
    <Layout pageTitle="stream">
        <TwitchEmbed video="1671871320" autoplay muted withChat darkMode={false} hideControls onVideoReady={handleReady} />
    </Layout>
  )
}

export const Head = () => <title>stream</title>

export default Stream