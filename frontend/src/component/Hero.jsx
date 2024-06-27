import React from 'react'

const Hero = ({
    title,imageUrl
}) => {
  return (
    <div className='hero container'>
        <div className="banner">
            <h1>
                {title}
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus. Et molestie ac feugiat sed lectus. Non sodales neque sodales ut etiam sit amet nisl purus. Rhoncus est pellentesque elit ullamcorper. Quam elementum pulvinar etiam non quam lacus. Tortor id aliquet lectus proin nibh nisl condimentum. Donec ultrices tincidunt arcu non sodales neque sodales. In tellus integer feugiat scelerisque varius morbi. Ullamcorper dignissim cras tincidunt lobortis feugiat. Vitae congue mauris rhoncus aenean vel.
            </p>
        </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className="animated-image"/>
            <span>
                <img src="/Vector.png" alt="vector" />
            </span>
        </div>
    </div>
  )
}

export default Hero