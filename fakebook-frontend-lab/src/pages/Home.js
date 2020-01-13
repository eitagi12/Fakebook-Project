import React from 'react'
import { Row, Col } from 'antd'
import PostList from '../components/post/PostList'
import CreatePost from '../components/post/CreatePost'
import Axios from '../config/api.service'
import { connect } from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: {},
      postList: []
    }
  }


  fetchData = () => {
    Axios.get('/feed',{
      user_id: this.props.user.id
    }).then(result => {
      this.setState({
        postList: result.data
      })
      
      console.log(result.data)
    })
  };


  componentDidMount() {
    this.fetchData();
    // var intervalId = setInterval(this.fetchData, 60000);
    // // store intervalId in the state so it can be accessed later:
    // this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <Row type="flex" justify="center">
        <Col md={12} sm={16} xs={24}>
          <Row>
            <CreatePost avatarSrc={this.state.owner.profilePic} fetchItem={this.fetchData}/>
          </Row>
          <Row>
            <PostList
              postList={this.state.postList} owner={this.state.owner}
              fetchData={this.fetchData}
            />
          </Row>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Home)
