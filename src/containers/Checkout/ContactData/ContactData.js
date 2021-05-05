import React, { Component } from "react";
import classes from './ContactData.module.css'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ayan',
                address: {
                    street: 'SomeStreet 3',
                    zipCode: '123412',
                    country: 'Japan'
                },
                email: 'asdfqe@adsf.com'
            }
        }
        axios.post('/orders.json', order)
                .then(response => {
                    this.setState({loading: false})
                    this.props.history.push('/')
                })
                .catch(e => {
                    this.setState({loading: false})
                })

    }

    render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact</h4>
                {form}
            </div>
        )
    }
}

export default ContactData