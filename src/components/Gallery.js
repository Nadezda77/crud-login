import React from 'react';
import Gallery from 'react-photo-gallery';
import Menu from "./Menu";


const photos = [
  {
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/1600x1200',
    srcSet: [
      'https://source.unsplash.com/2ShvY8Lf6l0/500x375 500w',
      'https://source.unsplash.com/2ShvY8Lf6l0/800x600 800w',
      'https://source.unsplash.com/2ShvY8Lf6l0/1024x768 1024w',
      'https://source.unsplash.com/2ShvY8Lf6l0/1600x1200 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/1200x1600',
    srcSet: [
      'https://source.unsplash.com/qDkso9nvCg0/375x500 375w',
      'https://source.unsplash.com/qDkso9nvCg0/600x800 600w',
      'https://source.unsplash.com/qDkso9nvCg0/768x1024 768w',
      'https://source.unsplash.com/qDkso9nvCg0/1200x1600 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/PpOHJezOalU/1600x1200',
    srcSet: [
      'https://source.unsplash.com/PpOHJezOalU/500x375 500w',
      'https://source.unsplash.com/PpOHJezOalU/800x600 800w',
      'https://source.unsplash.com/PpOHJezOalU/1024x768 1024w',
      'https://source.unsplash.com/PpOHJezOalU/1600x1200 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  }
]

class Galerija extends React.Component {
  render(){
    return(
      <div>
        <Menu/>
        <br/>
        <Gallery photos={photos} />
      </div>
    ); 
  }
}

export default Galerija