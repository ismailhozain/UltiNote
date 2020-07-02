import Link from 'next/link'
import React from 'react'
import {Layout, Menu} from 'antd'
import {
    UserOutlined,
    MenuOutlined,

} from '@ant-design/icons'

//test github desktop
const {Header} = Layout
const {SubMenu} = Menu

class HomePage extends React.Component {
    render(){
    return(
        <Layout>
            <Menu style = {styles.nav}>
                <Menu.Item>
                    <Link href = '/'>
                        <a style = {styles.sideBar}><MenuOutlined style={{fontSize: '30px'}}/></a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href = '/'>
                        <a>UltiNote</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href = '/'>
                        <a style = {styles.pfp}><UserOutlined style={{fontSize: '30px'}}/></a>
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
        border: '2px solid rgba(124,132,113,1)',
        borderRadius: '32px',
        padding: '10px',
    },
    sideBar: {
        display: 'inline-block',
        float: 'left',
        width: 'auto',
        border: '2px solid rgba(124,132,113,1)',
        borderRadius: '8px',
        padding: '10px',
    },
    title: {

    }
}

