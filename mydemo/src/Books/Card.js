import React from "react";
import './card.css'


function Card({ book }) {
   
    if (!book) {
      return null;
    }
  
    return (
      <div className='items'>
        {book.map((item) => {
          let thumbnail =
            item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if (thumbnail !== undefined && amount !== undefined) {
            return (
              <div className='card' key={item.id}>
                <img src={thumbnail} alt='' />
                <div className='details'>
                  <h3 className='title'>{item.volumeInfo.title}</h3>
                  
                  <h4>{amount}</h4>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
  export default Card;
  