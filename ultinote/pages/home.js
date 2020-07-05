import Link from 'next/link'
import React from 'react'
import {Layout, Menu, Button, Row, Col, Breadcrumb} from 'antd'
import {
    UserOutlined,
    MenuOutlined,

} from '@ant-design/icons'

const {Header, Sider, Content} = Layout
const {SubMenu} = Menu

class HomePage extends React.Component {
    state = {
        collapsed: true,
    }

    toggleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
          });
    }

    render(){
    return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sider 
                    collapsed={this.state.collapsed} 
                    onCollapse={this.onCollapse}
                    collapsedWidth = '0'
                >
                <Menu mode = 'inline'>
                    <Menu.Item>
                        <h1>sucker</h1>
                    </Menu.Item>
                    <Menu.Item>
                        <h1>sucker</h1>
                    </Menu.Item> 
                    <Menu.Item>
                        <h1>sucker</h1>
                    </Menu.Item>
                </Menu>
                </Sider>
            <Layout>
            <Header style = {{backgroundColor: 'white',}}>
                <Row>
                    <Col span={2}>
                        <Button onClick={this.toggleCollapse}>
                            <MenuOutlined style={{fontSize: '30px'}}/>
                        </Button>
                    </Col>
                    <Col span={2}  style={styles.title}>
                        <Link href = '/home'>
                            <a>UltiNote</a>
                        </Link>
                    </Col>
                    <Col span={1} offset={19}>
                        <Menu>
                            <SubMenu key="sub1" icon={<UserOutlined style={{fontSize: '30px'}}/>} title="User">
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row> 
            </Header>
            <Content style = {styles.content}>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
            </Content>
            </Layout>
        </Layout>  
    )
    }
}

export default HomePage

const styles = {
    nav: {
        
    },
    sideBar: {
       
    },
    title: {
        fontFamily: 'verdana', 
        fontSize: '24px',
    },
    pfp: {
    },
    content: {
        margin: '10px',
        padding: '10px',
        backgroundColor: 'white',
    }
}

