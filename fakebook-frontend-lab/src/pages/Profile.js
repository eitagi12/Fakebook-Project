import React from 'react'
import HeadFakebook from '../components/author/HeadFakebook'
import { Row, Col, Divider } from 'antd'
import PostList from '../components/post/PostList'
import { connect } from 'react-redux'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
    }
  }

  componentDidMount() {
    // Lab
  }

  render() {
    return (
      <Col>
        <Row type="flex" justify="center">
          <HeadFakebook
            imageSrc={this.props.user.profilePic}
            name={this.props.user.name}
          />
        </Row>
        <Row type="flex" justify="center">
          <Col md={18} sm={20} xs={22}>
            <Divider />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col md={12} sm={16} xs={24}>
            <PostList
              postList={this.state.postList}
              owner={this.state.owner}
            />
          </Col>
        </Row>
      </Col>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Profile)