import React from 'react';
import Nocover from '../img/nocover.jpg';
import '../style.css';

const ListItem = ({item, onBookSelected}) => {

    if (typeof item.isbn !== 'undefined') {
        return(
            <div className = 'books__item-short'>
                <img src={`http://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg?default=false`} alt='img'/>
                <div className = 'books__item-bottom'>
                    <div className = 'books__item-char'>название</div>
                    <div className = 'books__item-text'>{item.title}</div>
                    <div className = 'books__item-char'>автор</div>
                    <div className = 'books__item-text'>{item.author_name}</div>
                </div>
                <button className = 'books__item-button' onClick={onBookSelected}>подробнее</button>
            </div>
        );
    }  else {
        return(
            <div className = 'books__item-short'>
                <img src={Nocover} alt='img'/>
                <div className = 'books__item-bottom'>
                    <div className = 'books__item-char'>название</div>
                    <div className = 'books__item-text'>{item.title}</div>
                    <div className = 'books__item-char'>автор</div>
                    <div className = 'books__item-text'>{item.author_name}</div>
                </div>
                <button className = 'books__item-button' onClick={onBookSelected}>подробнее</button>
            </div>
        )
    }
};

export default ListItem;