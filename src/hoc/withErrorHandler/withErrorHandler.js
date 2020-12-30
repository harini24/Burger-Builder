import React, { Component } from 'react'
import Modal from '../../Components/UI/Modal/Modal'
import Aux from '../Auxillary/Auxillary'
const withErrorHandler = (WrapperComponent,axios) => {
    return class extends Component {

        state = {
            errors: null
        }

        errorConfirmerHandler = () => {
            this.setState({
                errors:null
            })
        }
        componentDidMount() {
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
                return Promise.reject(error)
            })
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.errors} clicked={this.errorConfirmerHandler}>
                       {this.state.errors && this.state.errors.message}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            )
        }
    }

}

export default withErrorHandler