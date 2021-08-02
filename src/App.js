import React, {Component} from 'react';
import './App.css';
import ItemsList from './components/ItemsList';
import Search from './components/Search';
import Modal from './components/Modal';
import './style.css';

export default class App extends Component {
	    constructor(props) {
        super(props);
        this.state = {
			input: '',
			selectedBook: [],
			modal: false
        };
		this.searchBooks = this.searchBooks.bind(this);
		this.onBookSelected = this.onBookSelected.bind(this);
		this.onModalClosed = this.onModalClosed.bind(this);
    }

	searchBooks(value) {
		this.setState({
			input: value
		})
	}

	onBookSelected(item){
		this.setState({
			selectedBook: item,
			modal: true
		})
	}

	onModalClosed(){
		this.setState({
			modal: false
		})
	}

	render () {
		return (
			<div className='App'>
				<main>
					<div className='container'>
						<Search
							onSearch={this.searchBooks}
						/>
						<ItemsList
							search = {this.state.input}
							onBookSelected = {this.onBookSelected}
						/>
					</div>
				</main>
				<Modal 
					bookItem={this.state.selectedBook}
					modalChange={this.onModalClosed}
					active={this.state.modal}
				/>
			</div>
		);
	}
}