import react, {Component} from 'react'
import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer'
class Layout extends Component {
    state={
        showSideDrawer:true
    }
    sideDrawerClosedhandler = () => {
        this.setState({showSideDrawer:false})
    }
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedhandler} />
                <main className={classes.content}>{this.props.children}</main>
            </Aux>
        )
    }
}
export default Layout