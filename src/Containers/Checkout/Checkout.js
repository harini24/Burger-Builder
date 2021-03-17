import React,{Component} from 'react'
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData'
class Checkout  extends Component{
    state={
        // ingredients:{
        //     salad:1,
        //     meat:1,
        //     cheese:1,
        //     bacon:1
        // },
        ingredients:null,//causes issue in componentDidMount need to be changed to componentWIllMount
        totalPrice:0
    }

    checkoutCancelledHandler = () =>{
        this.props.history.goBack()
        
    }

    checkOutContinuedHandler = () =>{
        this.props.history.replace("/checkout/contact-data")
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        let price = 0;
        for(let param of query.entries()){
            if (param[0]==='price'){
                price = param[1]
            }else{

                ingredients[param[0]] = +param[1]
            }
        }
        this.setState({
            ingredients:ingredients,
            totalPrice:price
        })
    }
    render(){

        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCancelledHandler} checkOutContinued={this.checkOutContinuedHandler}/>
                {/* <Route path={this.props.match.path+"/contact-data"} component={ContactData}/> */}
                <Route path={this.props.match.path+"/contact-data"} render={(props)=><ContactData {...props} ingredients={this.state.ingredients} price={this.state.totalPrice} />}/>
            </div>

        )
    }
}
export default Checkout;