import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';


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
        event.preventDefault();
        console.log(this.props.ings)

        this.setState({loading: true});

        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '42334',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false});
        })
        .catch(error => {
            this.setState({loading: false});
        }); 
    }

    render () {
        let form = (

            <form>
                <input className={classes.Input} type="text" name="name" placeholer="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholer="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholer="Your Street" />
                <input className={classes.Input} type="text" name="postal" placeholer="Your Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>);

        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
               {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

export default connect(mapStateToProps)(ContactData);