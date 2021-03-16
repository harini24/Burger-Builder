import React,{Component} from 'react'
import Button from '../../../Components/UI/Button/Button'
import Classes from './ContactData.module.css'
class ContactData extends Component{
	state={
		name:'',
		email:'',
		address:{
			street:'',
			postalCode:''
		}
	}
	render(){
		return(
		<div className={Classes.ContactData}>
			<h4>Enter Your Contact Data</h4>
			<form action="">
				<input className={Classes.Input} type="text" name="Name" placeholder="Enter Your Name"/>
				<input className={Classes.Input} type="text" name="email" placeholder="Enter Your Email"/>
				<input className={Classes.Input} type="text" name="street" placeholder="Enter Your street"/>
				<input className={Classes.Input} type="text" name="postal" placeholder="PostalCode"/>
				<Button btntype="Success" clicked={()=>console.log("order clicked")}>ORDER</Button>
				</form>
		</div>
		)
	}
}

export default ContactData
	
	