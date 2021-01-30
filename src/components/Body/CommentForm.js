import React, {Component} from "react";
import {Form, Input, Button} from "reactstrap";

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            author : "",
            rating : "",
            comment : "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeInputHandle = this.changeInputHandle.bind(this);
    }

    changeInputHandle = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit =event => {
        //console.log(this.props);
        this.props.addComment(this.props.photoId, this.state.author, this.state.rating, this.state.comment,);
        this.setState({
            
                author : "",
                rating : "",
                comment : "",
            
        });
        event.preventDefault();
    }
    
    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.changeInputHandle}
                    placeholder="Your Name" 
                    required
                    />
                    <br />
                    <Input
                    type="select"
                    name="rating"
                    value={this.state.rating} 
                    onChange={this.changeInputHandle}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                    type="textarea"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.changeInputHandle}
                    required
                    placeholder="Your Comment"
                     />
                    <br />
                    <Button type="submit" >Submit Comment</Button>
                </Form>
            </div>
        );
    }
}

export default CommentForm;