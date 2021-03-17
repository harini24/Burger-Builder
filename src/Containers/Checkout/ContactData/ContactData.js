import React,{Component} from 'react'
import Button from '../../../Components/UI/Button/Button'
import Classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../Components/UI/Spinner/Spinner'
class ContactData extends Component{
	state={
		name:'',
		email:'',
		address:{
			street:'',
			postalCode:''
		},
		loading:false
	}

	orderHandler=(e)=>{
		e.preventDefault();

		 this.setState({
            loading: true
        })
        // alert('you Continue!')
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Harini',
                address: {
                    street: 'bucket wheel streer', 
                    zipcode: 'adcdef',
                    country: 'India'
                }
            },
            email: 'test@gmail.com',
            deliveryMethod: 'express'
        }
        axios.post('/orders.json', order).then(
            response => {
                console.log(response)
                this.setState({
                    loading: false
                })
                this.props.history.push('/')
            }
        )
            .catch(error => {
                console.log(error)
                this.setState({
                    loading: false
                })
            })

		console.log(this.props.ingredients)
	}
	render(){
        let form =(
        <form action="">
        <input className={Classes.Input} type="text" name="Name" placeholder="Enter Your Name"/>
        <input className={Classes.Input} type="text" name="email" placeholder="Enter Your Email"/>
        <input className={Classes.Input} type="text" name="street" placeholder="Enter Your street"/>
        <input className={Classes.Input} type="text" name="postal" placeholder="PostalCode"/>
        <Button btntype="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        )
        if(this.state.loading){
            form=<Spinner/>
        }
		return(
		<div className={Classes.ContactData}>
			<h4>Enter Your Contact Data</h4>
			{form}
		</div>
		)
	}
}

export default ContactData
	
	