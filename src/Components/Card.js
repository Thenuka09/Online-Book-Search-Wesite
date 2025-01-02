import React, { useState } from 'react'
import './card.css'
import Model from './Model';

export default function Card({bookData}) {
    console.log(bookData)

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    //ensure book is an arry
    // if (!Array.isArray(bookData)) {
    //     console.error("Expected an array but got:", bookData);
    //     return null; // Or return a fallback UI if desired
    // }


  return (

    <>
    {
        bookData.map((item)=>{
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let title = item.volumeInfo.title;
            let amount = item.saleInfo.saleability;

            if(thumbnail!==undefined){
                return(
                    <>
                    <div className="card" onClick={() => { setShow(true); setItem(item); }}>
                        <img src={thumbnail}alt="The book" />
                         <div className="bottomDetails">
                            <h3 className="title">{title}</h3>
                            <span className="amount">{amount}</span>
                        </div>
                    </div>

                    {/* Call the Model Component */}
                    <Model show={show} item={bookItem} onClose={()=>setShow(false)}/>
                    </>
                )
            }
      
        })
    }

        
    </>
    )
            
        
  
}