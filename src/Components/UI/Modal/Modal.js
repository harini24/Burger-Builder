import React, { Component } from 'react'
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../BackDrop/Backdrop';
import classes from './Modal.module.css'
class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    componentDidUpdate(){
        console.log('[Modal.js] did update')
    }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>

        )
    }
}
export default Modal;