import React, {Component} from 'react';
import Nocover from '../img/nocover.jpg';
import Spinner from './Spinner';

export default class Modal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            img: null
        };
    }

    render() {
        let img = {Nocover};
        const {bookItem, active, modalChange} = this.props;
        if (typeof bookItem.isbn !== 'undefined') {
            return (
                <div className={active ? 'modal active' : 'modal'} onClick={modalChange}>
                    <div className='modal__content' onClick={e => e.stopPropagation()}>
                            <img src={`http://covers.openlibrary.org/b/isbn/${bookItem.isbn[0]}-L.jpg?default=false`} alt='img'/>
                            <div className='content'>
                                <div className = 'books__item-char'>название</div>
                                <div className = 'books__item-text'>{bookItem.title}</div>
                                <div className = 'books__item-char'>автор</div>
                                <div className = 'books__item-text'>{bookItem.author_name}</div>
                                <div className = 'books__item-char'>год выпуска</div>
                                <div className = 'books__item-text'>{bookItem.first_publish_year}</div>
                                <button onClick={modalChange}>закрыть</button>
                            </div>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div className={active ? 'modal active' : 'modal'}/>
            </div>
        );
    }
}