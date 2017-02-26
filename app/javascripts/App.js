// 主框架
import React from 'react'
import {
    Link
} from 'react-router'

import Header from './Header.js'
import Footer from './Footer.js'

class App extends React.Component {
    render() {
        return ( < div >
                < Header / >
                < ul >
                < li > < Link to = "/about" > About < /Link></li >
                < li > < Link to = "/inbox" > Inbox < /Link></li >
                < /ul>   {
                this.props.children
            } < Footer / >
            < /div>
    )
}
}

export default App