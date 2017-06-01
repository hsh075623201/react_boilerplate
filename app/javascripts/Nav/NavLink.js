import React from 'react'
import {
	Link
} from 'react-router'
//import styles from '../../css/index.css'
export default React.createClass({
	render() {
		//activeClassName={styles.active}
		return <Link {...this.props} />
	}
})