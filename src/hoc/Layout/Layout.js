import React, {Component} from 'react'
import Aux from '../Auxillary/Auxillary'
import classes from './Layout.module.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Components/Navigation/SideDrawer/Sidedrawer'
class Layout extends Component {
    state={
        showSideDrawer:false
    }
    sideDrawerClosedhandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerTogglehandler = () => {
        this.setState((prevState)=>
        {
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar  display ={this.sideDrawerTogglehandler}/>
                <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedhandler} />
                <main className={classes.content}>{this.props.children}</main>
            </Aux>
        )
    }
}
export default Layout