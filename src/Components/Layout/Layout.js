import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={classes.content}>{props.children}</main>
    </Aux>
)
export default layout