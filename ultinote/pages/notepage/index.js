import Link from 'next/link'
import React from 'react'
import {Layout, Menu, Button, Row, Col} from 'antd'

const {SubMenu} = Menu

class HomePage extends React.Component {
    state = {
        collapsed: true,
    }
    render(){
    return(
       <div>
        <head>
            <title>Ultinote</title>
        </head>
        <main>
            <div className="navbarWrapper">
                <Menu className="navbar">
                    <Menu.Item>
                        <Button className="navbutton"><u>A</u></Button>
                        <Button className="navbutton"><u>U</u></Button>
                        <Button className="navbutton"><b>B</b></Button>
                        <Button className="navbutton"><i>I</i></Button>
                    </Menu.Item>
                </Menu>
            </div>
            <div className="notepadContainer">
                <textarea className="notepadArea"/>
            </div>
        </main>

       </div>
    )
    }
}

export default HomePage

const styles = {}

