// 主框架
import React from 'react'
import {
    Link
} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.js'
import Footer from './Footer.js'
import NavLink from './Nav/NavLink.js'

class App extends React.Component {
    render() {
        return ( < div >
                < Header / >
                < ul >
                < li > < NavLink to = "/about" > About < /NavLink></li >
                < li > < NavLink to = "/inbox" > Inbox < /NavLink></li >
                < /ul >    {
                this.props.children
            } < Footer / >
            < /div>
    )
}
}

export default App