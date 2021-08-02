import React, { Component } from 'react';
import ListItem from './ListItem';
import Spinner from './Spinner';
import '../style.css';


export default class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            items: []
        };
    }

    componentDidMount() {
        this.updateBooks();
    }

    componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.search) {
            this.updateBooks();
        }
    }


    updateBooks() {
        const {search} = this.props;
        if (search === '') {
            return;
        }
        this.setState({
            isLoaded: false
        });
        fetch(`http://openlibrary.org/search.json?q=${search}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.docs
                });
                console.log(this.state.items)
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <Spinner/>
        } else {
            return (
                <div className='books__wrapper'>
                    {items.map(item => (
                        <ListItem
                        key = {item.key}
                        item={item}
                        onBookSelected={() => this.props.onBookSelected(item)}
                        />
                    ))}
                </div>
            )
        }
    }
}