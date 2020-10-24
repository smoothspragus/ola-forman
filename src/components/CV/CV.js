import React from 'react'

import { Link, graphql } from 'gatsby'


const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
      <i
        src={'https://www.youtube.com/watch?v=J3Fh4CfQdx8&ab_channel=AllGoodFilm'}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
  export default Video