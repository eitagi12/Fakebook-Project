import React from 'react'
import { TOKEN } from '../../config/constants'
import { Row, Card, Col, Divider, Avatar, Input, Icon, Button, Upload } from 'antd'
import Axios from 'axios'

const { TextArea } = Input

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postStatus: "",
      fileList:[],
    }
  }

  handleCreatePost = (props) => {
    let payload = new FormData()
    payload.append('photoPost', this.state.fileList[0])
    payload.append('message',this.state.postStatus)
    Axios.post('/create-post',payload)
    .then(result => {
      console.log(result)
      console.log(props)
      this.props.fetchItem()
    })

  }

  render() {
    return (
      <Row type="flex" justify="center" style={{ paddingTop: '10px' }}>
        <Col span={24}>
          <Card type="inner" title="Create post">
            <Row>
              <Col span={4} style={{ paddingRight: '5px' }}>
                <Row type="flex" justify="center">
                  <Avatar src={this.props.avatarSrc} />
                </Row>
              </Col>
              <Col span={20}>
                <Row>
                  <TextArea
                    onChange={(e) => this.setState({ postStatus: e.target.value })}
                    placeholder="เขียนอะไรบางอย่างสิ"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                  />
                </Row>
                <Row type='flex' justify='end'>
                  <Button onClick={() => this.handleCreatePost()}>
                    Post
                </Button>
                </Row>
              </Col>
            </Row>
            <Divider style={{ marginBottom: '15px', marginTop: '15px' }} />
            <Row>
              <Upload
                action={"http://localhost:8080/upload"}
                headers={{ Authorization: `Bearer ${localStorage.getItem(TOKEN)}` }}
                name="image"
              >
                <Button>
                  <Icon type="picture" /> Picture
                </Button>
              </Upload>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
