import React from 'react'
import Modal from '../../Components/UI/Modal/Modal'
import Aux from '../Auxillary/Auxillary'
const withErrorHandler = (WrapperComponent) => {
    return (props) => {
        return (
            <Aux>
                <Modal show>
                    Something didnt work
                </Modal>
                <WrapperComponent {...props} />
            </Aux>
        )
    }
}

export default withErrorHandler