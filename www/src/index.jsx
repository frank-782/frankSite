import Home from './pages/home/home.jsx'
import BlogHome from './pages/blogs/home.jsx'
import BlogDetail from './pages/blogs/detail.jsx'
import NavBar from './components/nav-tab.jsx'
import ReactDOM from 'react-dom'
import React from 'react'






const Content = props => {
    const {
        componentName,
        componentProps
    } = props;
    
    
    const componentList = {
        Home,
        BlogHome,
        BlogDetail
    }
    let Component
    if (!componentList.hasOwnProperty(componentName) && componentName !== null) {
        Component = React.Fragment
        console.log(`unknown Component name "${componentName}"`)
    } else {
        Component = componentList[componentName]
    }
    return (
        <React.Fragment>
            <NavBar/>
            <Component {...componentProps||{}} />
        </React.Fragment>
    )
}

const scripts = document.createElement("div")
document.body.appendChild(scripts);

ReactDOM.render(<Content componentName={window.component_name} componentProps={window.component_props}/> , scripts)


