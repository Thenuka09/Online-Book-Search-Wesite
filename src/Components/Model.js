import React from 'react'
import './model.css'

export default function Model({show,item, onClose}) {

    if(!show){
        return null;
    }

    // Store the image of the Book in the thumbnail variable
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
        <div className="overlay">

            <div className="overlay-inner">
                <button className="close" onClick={onClose}><i class="fa-regular fa-circle-xmark"></i></button>
                <div className="inner-box">
                    <img src={thumbnail} alt="" />
                    <div className="info">
                        <h1 className='title'>{item.volumeInfo.title}</h1>
                        <h3 className='author'>{item.volumeInfo.authors}</h3>
                        <h4 className='publication'>{item.volumeInfo.publisher}<span className='date'> {item.volumeInfo.publishedDate}</span></h4> <br/>
                        <span className="ratings">Ratings: {item.volumeInfo.averageRating}</span> <br/>
                        <a href={item.volumeInfo.previewLink} target='blank'><button>More</button></a>
                    </div>
                </div>

                <h4 className="description">{item.volumeInfo.description}</h4>

            </div>

        </div>
    </>
  )
}
