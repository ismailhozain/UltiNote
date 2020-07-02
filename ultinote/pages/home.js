import Link from 'next/link'
import React from 'react'
import {Layout, Menu, Button, Row, Col} from 'antd'
import {
    UserOutlined,
    MenuOutlined,

} from '@ant-design/icons'

const {Header, Sider} = Layout
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
                        <Link href = '/home'>
                            <a><UserOutlined style={{fontSize: '30px'}}/></a>
                        </Link>
                    </Col>
                </Row> 
            </Header> 
            <Layout>
            <Sider
                collapsedWidth = '0'
                collapsed={this.state.collapsed}
            >
            <Menu>
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
}

