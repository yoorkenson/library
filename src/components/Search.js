import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.state.text);
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
            >
                <input
                    type='text'
                    placeholder='Введите книгу'
                    onChange={this.onValueChange}
                />
                <button
                    type='submit'  
                >
                Поиск
                </button>
            </form>
        )
    }
}