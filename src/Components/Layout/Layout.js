import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'
const layout = (props) =>(
    <Aux> 
    <div>Toolbar, SideBar, Backdrop</div>
    <main className={classes.content}>{props.children}</main>
    </Aux>
)
export default layout