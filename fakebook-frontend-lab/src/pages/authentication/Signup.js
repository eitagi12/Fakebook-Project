import React from "react";
import { Row, Form, Icon, Input, Col, Button, Radio } from "antd";
import logo from "../../images/logo.png";
import Axios from '../../config/api.service'
import { successCreateNotification } from "../../components/notification/notification"

class Signup extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        let payload = {
          username: value.username,
          password: value.password,
          first_name: value.firstname,
          last_name: value.lastname,
          profile_img_url: value.profile_img_url
        };
        Axios.post("/registerUser", payload)
          .then(result => {
            
            successCreateNotification()
            this.props.history.push("/login")
          })
          .catch(err => {
            console.error(err);
          });
          this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row type="flex" style={{ height: "100vh" }} align="middle">
        <Col span={24}>
          <Row type="flex" justify="center" align="middle">
            <Col
              md={8}
              sm={12}
              xs={24}
              type="flex"
              justify="center"
              align="middle"
            >
              <img
                src={logo}
                alt="Logo Fakebook"
                style={{ height: "100%", maxHeight: "300px" }}
              ></img>
            </Col>
          </Row>
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ marginTop: "40px" }}
          >
            <Col
              md={8}
              sm={12}
              xs={24}
              type="flex"
              justify="center"
              align="middle"
            >
              <Form
                onSubmit={this.handleSubmit}
                className="login-form"
                style={{ maxWidth: "400px", width: "100%" }}
              >
                <Row>
                  <Form.Item>
                    {getFieldDecorator("username", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your E-mail!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="E-mail"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your Password!"
                        }
                      ]
                    })(<Input.Password placeholder="Password" />)}
                  </Form.Item>

                  <Form.Item>
                    {getFieldDecorator("firstname", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your First name!"
                        }
                      ]
                    })(<Input placeholder="First name" />)}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("lastname", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your Last name!"
                        }
                      ]
                    })(<Input placeholder="Last name" />)}
                  </Form.Item>
                </Row>
                <Row type="flex" justify="center">
                  <Col md={8} sm={12} xs={24}>
                    <Form.Item>
                      <Button
                        
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Create
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Form.create()(Signup);
