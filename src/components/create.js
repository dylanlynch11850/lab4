import React from "react";

export class Create extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangedBookTitle = this.onChangedBookTitle.bind(this);
        this.onChangedBookCover = this.onChangedBookCover.bind(this);
        this.onChangedBookAuthor = this.onChangedBookAuthor.bind(this);

        this.state = {
            title: '',
            cover: '',
            author: ''
        }
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);
        this.setState({
            title: '',
            cover: '',
            author: '',

        })
    }

    onChangedBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangedBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    onChangedBookAuthor(e) {
        this.setState({
        author: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3> Hello From my Create component</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangedBookTitle}
                        />
                        </div>

<div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangedBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangedBookAuthor}
                        />
                    </div>


                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}