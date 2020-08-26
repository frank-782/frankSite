import React from 'react'
import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import NavBar from '../../components/nav-tab.jsx'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <NavBar/>
        )
    }
}

export default Home