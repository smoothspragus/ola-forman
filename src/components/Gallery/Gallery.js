import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, CardWrap, ProjectCard} from './Gallery.styles'
import FsLightbox from 'react-image-lightbox'
import "react-image-lightbox/style.css"
const Gallery = ({ imageArr}) => {
  const [show, toggleShow] = useState(false)
  const [imageIndex, setImageIndex] = useState(-1)
  const lightboxArr = imageArr.map(img => img.node.childImageSharp.fluid.src)
 

  
  return (
    <>
      <Grid>       
        {imageArr.map((img, index) => <CardWrap onClick={() => setImageIndex(index)}> <ProjectCard fluid={img.node.childImageSharp.fluid} />  </CardWrap>)}
      </Grid>
      {imageIndex !== -1 &&  (
        <FsLightbox 
          mainSrc={lightboxArr[imageIndex]}
          nextSrc={lightboxArr[(imageIndex + 1) % lightboxArr.length]}
          prevSrc={lightboxArr[(imageIndex + lightboxArr.length - 1) % lightboxArr.length]}
          onCloseRequest={() => setImageIndex(-1)}
          onMovePrevRequest={() =>  setImageIndex((imageIndex + lightboxArr.length - 1) % lightboxArr.length)}
          onMoveNextRequest={() => setImageIndex((imageIndex + 1) % lightboxArr.length)}
          />
      )}
    </>
  )
}

Gallery.propTypes = {
  imageArr: PropTypes.array.isRequired,

}

export default Gallery
