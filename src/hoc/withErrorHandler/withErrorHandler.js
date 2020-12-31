import React, { Component } from 'react'
import Modal from '../../Components/UI/Modal/Modal'
import Aux from '../Auxillary/Auxillary'
const withErrorHandler = (WrapperComponent,axios) => {
    return class extends Component {
        
        state = {
            errors: null
        }
        // constructor(props) {
        //     super(props)

           

           
        // }

        
        errorConfirmerHandler = () => {
            this.setState({
                errors:null
            })
        }

        render() {
            axios.interceptors.request.use( req => {
                this.setState({
                    errors: null
                })
                return req;
            })
            axios.interceptors.response.use(res=>res, error => {
                this.setState({
                    errors: error
                })
                return Promise.reject(error)  // in the tutorial this line is not present and so it throws another erros
                // that is when the inderedient end point has error, but the code doesnt have catch at that function 
                //as we return the error here that issue is resolved
            })
            return (
                <Aux>
                    <Modal show={this.state.errors} modelClosed={this.errorConfirmerHandler}>
                       {this.state.errors && this.state.errors.message}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            )
        }
    }

}

export default withErrorHandler