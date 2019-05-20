import React, {Component} from 'react';
import {Card,CardImg, CardBody,CardText,CardTitle,CardImgOverlay,Media} from 'reactstrap';

class DishDetail extends Component{
  constructor(props){
    super(props);

  }

  renderComments(comments){
    let commentsLayout="";
    if(comments!=null){
      commentsLayout = comments.map((comment)=>{
        return(<div><div className="col-12 p-0 mb-3">{comment.comment}</div><div className="col-12 p-0 mb-3">--{comment.author}{comment.date}</div></div>);
      });
    }else{
      commentsLayout=<div></div>;
    }
    return commentsLayout;
  }

  render(){
    return(
      <div className="row">
        <div  className="col-12 col-md-5 m-1">
        <Card>
        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
        <CardBody>
          <CardTitle>{this.props.dish.name}</CardTitle>
          <CardText>{this.props.dish.description}</CardText>
        </CardBody>
        </Card>
        </div>
        <div  className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
          <Media list className="m-0 p-0">
            {this.renderComments(this.props.dish.comments)}
          </Media>
        </div>
      </div>
    );
  }
}


export default DishDetail
