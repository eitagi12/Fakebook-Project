import React from 'react'
import HeadFakebook from '../components/author/HeadFakebook'
import { Row, Col, Divider, Input, Icon, Button, Form } from 'antd'

export default class ChangePassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageSrc: "",
      name: ""
    }
  }

  handleSubmit = () => {
    // Lab
  }

  render() {
    return (
      <Row>
        <Col>
          <Row type="flex" justify="center">
            <HeadFakebook
              imageSrc={this.state.imageSrc}
              name={this.state.name}
            />
          </Row>
          <Row type="flex" justify="center">
            <Col md={18} sm={20} xs={22}>
              <Divider />
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle" style={{ marginTop: '40px' }}>
            <Col md={8} sm={12} xs={24} type="flex" justify="center" align="middle">
              <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: '400px', width: '100%' }}>
                <Row>
                  <Form.Item>
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Old Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="New Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Confirm New password"
                    />
                  </Form.Item>
                </Row>
                <Row type="flex" justify="center">
                  <Col md={8} sm={12} xs={24}>
                    <Form.Item>
                      <Button block type="primary" htmlType="submit" className="login-form-button">
                        Change password
                    </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}