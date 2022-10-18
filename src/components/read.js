import React from "react";
import { Books } from "./books";
import axios from "axios";

//Adding the eport class
export class Read extends React.Component {

    //Life Cycle hook element 
    //gets fired when component is drawn
    componentDidMount() {
        
        //url we are going too 
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
            .then((response) => {
                this.setState({ books: response.data })
            })

            //Catch Method
            .catch((error)=>{
                console.log(error); //error handling
            })

    }

    //Got this from online using the link
    //holds data in json data, 
    //Here we have an array of object 

    state = {
        //Creating Arrays Called Book
        //empty array in json
        books: [

        ]
    };
    //books needs to be passed down using javascript here 
    //Render Items
    render() {
        return (
            <div>
                <h3>Hello From my read Component</h3>
            //HTML Component
            
                <Books books={this.state.books}></Books>
            </div>
        )
    }
}
