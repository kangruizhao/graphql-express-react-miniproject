import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { gql } from "apollo-boost";
import { Query, Mutation } from 'react-apollo';
const ADD_MESSAGE = gql`


  mutation createMessage($input: MessageInput){
         createMessage(input:$input){
           author
           content
         }
  }


`;
class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {author:'',content: '' };

    this.handleChangeOfInformation = this.handleChangeOfInformation.bind(this);
    this.handleChangeOfAuthor = this.handleChangeOfAuthor.bind(this);

  }
  handleChangeOfInformation(event) {
    this.setState({content: event.target.value});
  }
  handleChangeOfAuthor(event) {
    this.setState({author: event.target.value});
  }


  render() {
    return (
      <Mutation mutation={ADD_MESSAGE}>
       {(createMessage) => (
  <form>
 <div className="form-group">
   <label htmlfor="information">Information</label>
   <input type="text" class="form-control" onChange={this.handleChangeOfInformation}/>
 </div>
 <div className="form-group">
   <label htmlfor="author">Author</label>
   <input type="text" className="form-control" id="author" placeholder="Password" onChange={this.handleChangeOfAuthor}/>
 </div>
 <button type="button" className="btn btn-primary" onClick={e => {
              e.preventDefault();
                 var input={content:this.state.content,author:this.state.author};
                 //console.log(input);
            createMessage({variables:{input:input}});
            }}>Submit</button>
</form>
)}
</Mutation>
    );
  }
}

export default FormComponent;
