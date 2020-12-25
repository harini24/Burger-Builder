import react, {Component} from 'react'
import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer'
class Layout extends Component {
    state={
        showSideDrawer:false
    }
    sideDrawerClosedhandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerShowhandler = () => {
        this.setState({showSideDrawer:true})
    }
    render() {
        return (
            <Aux>
                <Toolbar  display ={this.sideDrawerShowhandler}/>
                <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedhandler} />
                <main className={classes.content}>{this.props.children}</main>
            </Aux>
        )
    }
}
export default Layout