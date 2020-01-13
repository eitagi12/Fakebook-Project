import React from 'react'
import { Row, Col, Button, Avatar } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import Axios from 'axios'

export default class CreateComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentText: "",     
    }
  }



handleComment=(postId)=>()=>{
  let payload = new FormData();
  payload.append('message',this.state.commentText)
  console.log(payload)
  Axios.post('/create-comment/'+postId,payload)
    .then(result => {
      console.log(result)
      this.props.fetchData()
      console.log(this.state.commentText)
    })

    
}

  render() {
    return (
      <Row type="flex" align="middle" justify="center" style={{ marginTop: '20px' }}>
        <Col md={2} sm={2} xs={4}>
          <Row type="flex" align="middle" justify="end">
            <Avatar src={this.props.owner.profilePic} />
          </Row>
        </Col>
        <Col md={16} sm={10} xs={10} style={{ marginLeft: '10px', marginRight: '10px' }}>
          <TextArea onChange={ e => this.setState({commentText: e.target.value})} rows={1} />
        </Col>
        <Col md={5} sm={5} xs={5}>
          <Button type="primary" onClick={this.handleComment(this.props.postId)}>
            Comment
          </Button>
        </Col>
      </Row>
    )
  }
}