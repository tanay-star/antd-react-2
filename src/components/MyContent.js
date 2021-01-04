import React from 'react'
//importing ant components
import { Card, Col, Row } from 'antd'
import { Tag } from 'antd'
import { ShareAltOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { UserOutlined, CalendarFilled } from '@ant-design/icons'

const MyContent = () => {
  return (
    <Row gutter={16}>
      <Col md={15}>
        <Card
          bordered={true}
          style={{ width: '99%', boxShadow: '1px 1px 5px #cdd0cb' }}
        >
          <Row>
            <Col md={4}>
              <p>Job Details</p>
            </Col>
            <Col md={4}>
              <Tag color="#87d068">Shipping</Tag>
            </Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4} style={{ textAlign: 'right' }}>
              <Avatar size="small" icon={<UserOutlined />} />
            </Col>
            <Col
              md={4}
              style={{
                textAlign: 'right',
              }}
            >
              {' '}
              John Doe
              <ShareAltOutlined style={{ marginLeft: '5px' }} />
            </Col>
          </Row>

          <Row>
            <Col md={4} style={{ color: 'darkgrey' }}>
              Deliverables
            </Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4} style={{ textAlign: 'right', color: 'darkgrey' }}>
              Post Date
            </Col>
          </Row>

          <Row>
            <Col md={4} style={{ fontWeight: 'bold' }}>
              CCTV CAM
            </Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4} style={{ textAlign: 'right', paddingRight: '5px' }}>
              <CalendarFilled />
            </Col>
            <Col md={4} style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Tue, Jul 21 2020
            </Col>
          </Row>

          <Row style={{ marginTop: '5px' }}>
            <Col md={4} style={{ color: 'darkgrey' }}>
              Instructions
            </Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4} style={{ color: 'darkgrey' }}>
              10.00 am-1hr
            </Col>
          </Row>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Card>
      </Col>

      <Col md={9}>
        <Card
          size="small"
          title="Customer Details"
          extra={<a href="#">More</a>}
          style={{ width: '100%', boxShadow: '1px 1px 5px #cdd0cb' }}
        >
          <Row>
            <Col md={4}>
              <Avatar size="small" icon={<UserOutlined />} />
            </Col>
            <Col md={4} style={{ fontSize: '12px' }}>
              <p>Created by</p>
            </Col>
          </Row>

          <Row style={{ marginTop: '-14px' }}>
            <Col md={4}></Col>
            <Col md={8} style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Ulfic nelson
            </Col>
          </Row>

          <Row style={{ marginTop: '15px' }}>
            <Col md={4}>
              <Avatar size="small" icon={<UserOutlined />} />
            </Col>
            <Col md={4} style={{ fontSize: '12px' }}>
              <p>Created by</p>
            </Col>
          </Row>

          <Row style={{ marginTop: '-14px' }}>
            <Col md={4}></Col>
            <Col md={8} style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Ulfic nelson
            </Col>
            <Col md={4}></Col>
            <Col md={8} style={{ color: 'darkgrey', fontSize: '10px' }}>
              Last checked 8mins ago
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default MyContent
