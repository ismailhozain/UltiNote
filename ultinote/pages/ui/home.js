import Link from 'next/link'
import React from 'react'
import {Layout, Menu} from 'antd'
import {
    UserOutlined
} from '@ant-design/icons'

const {Header} = Layout
const {SubMenu} = Menu

class HomePage extends React.Component {
    render(){
    return(
        <Layout>
            <Menu style = {styles.nav}>
                <Menu.Item key = 'alipay'>
                    <Link href = '/'>
                        <a>UltiNote</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key = 'alipay'>
                    <Link href = '/'>
                        <a style = {styles.pfp}><UserOutlined width = '200px'/></a>
                    </Link>
                </Menu.Item>
            </Menu>
            <h1>
                <Link href="/api/hello">
                    <a>API Page</a>
                </Link>
            </h1>
             
        </Layout>    
    )
    }
}

export default HomePage

const styles = {
    nav: {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        boxSizing: 'inherit',
        overflow: 'hidden',
        display: 'block',
    },
    pfp: {
        display: 'inline-block',
        float: 'right',
        width: '30px',
        border: '3px solid #73AD21',
        padding: '10px',
    },
}
