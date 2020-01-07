import { notification, Icon } from 'antd'
import React from 'react'

const successCreateNotification = () => {
    notification.open({
      message: 'Created Successful',
      icon: <Icon type="check" style={{ color: '#108ee9' }} />,
    });
  };

  export {successCreateNotification}