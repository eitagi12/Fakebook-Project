import React from 'react'
import { Row, Divider, Col, Tabs } from 'antd'
import HeadFakebook from '../components/author/HeadFakebook'
import FriendsList from '../components/friend/FriendsList';
import FriendsRequest from '../components/friend/FriendsRequest';
import { connect } from 'react-redux'

const { TabPane } = Tabs;

class Friend extends React.Component {
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
          <Col md={12} sm={16} xs={20}>
            <Tabs defaultActiveKey="1" style={{ width: '100%' }}>
              <TabPane tab="Friends List" key="1">
                <FriendsList />
              </TabPane>
              <TabPane tab="Friends Requests" key="2">
                <FriendsRequest />
              </TabPane>
            </Tabs>
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

export default connect(mapStateToProps, null)(Friend)