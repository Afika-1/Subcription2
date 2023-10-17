import React from 'react';
import MyFirebaseApp from '../config';
import { ref, set, get, update, remove, child } from "firebase/database"
import './style.css'
import popular from './snack.png'

export class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: "",
            username: '',
            emailAddress: '',
            // phoneNumber: '',
            dob: '',

        }
        this.interface = this.interface.bind(this);
    }
    componentDidMount() {
        this.setState({
            db: MyFirebaseApp()
        });
    }
    render() {
        return (
       
                <div className='container1'>

                    <div className='container'>
                        <div className='tags'>
                            <h2>Don't miss out</h2>
                            <p> Subscribe to stay updated with our amazing deals and discounts</p>
                            <p>New recipes just a notification away</p>

                        </div>
                        <div>
                            <div className='tags2'>
                                <span>01</span>
                                <small>Get premium discount</small>

                            </div>
                            <div className='tags2'>
                                <span>02</span>
                                <small>Get new deals updates instantly</small>

                            </div>
                            <div className='tags2'>
                                <span>03</span>
                                <small>Be the first to try our new recipes</small>

                            </div>
                        </div>


                        <div className='sec2'>
                            <h3>Join our newsletter</h3>
                            <div className='sec'>
                                <p >Enter Username: </p>
                                <input type='text' id='userbox' value={this.state.username}
                                    onChange={e => {
                                        this.setState({ username: e.target.value });
                                    }} />
                            </div>

                            <div className='sec'>
                                <p >Enter Email Address : </p>
                                <input type='email' id='namebox' value={this.state.emailAddress}
                                    onChange={e => { this.setState({ emailAddress: e.target.value }); }} />
                            </div>

                            {/* <div className='sec'>
                            <p >Enter Phone Number: </p>
                            <input type='number' id='phonebox' value={this.state.phoneNumber}
                                onChange={e => { this.setState({ phoneNumber: e.target.value }); }} />
                        </div> */}

                            {/* <div className='sec'>
                            <p >Choose Date of Birth: </p>
                            <input type='date' id='dobbox' value={this.state.dob}
                                onChange={e => { this.setState({ dob: e.target.value }); }} />
                        </div> */}

                            <div className='btns' id='footer'>
                                <button className="subsBtn" id='subscribeBtn' onClick={this.interface}>Subscribe</button>
                                <button className="delBtn" id='deleteBtn' onClick={this.interface}>Unsubscribe</button>
                                {/* <button className="subsBtn" id='updateData' onClick={this.interface}>Update Info</button> */}
                                {/* <button className="subsBtn" id='selectBtn' onClick={this.interface}>Retrieve Data</button> */}
                            </div>
                        </div>
                    </div>
                    <p className='copy'><small>©All Rights Reserved</small></p>
                </div>
           
        )
    }
    interface(event) {
        const id = event.target.id;
        if (id == 'subscribeBtn') {
            this.insertData();
            // console.log('data is sent');

        }

        else if (id == 'deleteBtn') {
            this.deleteData();
        }
        else if (id == 'updateData') {
            this.updateData();

        }
        // else if (id == 'selectBtn') {
        //     this.selectData();
        // }

    }
    getAllInput() {
        return {
            username: this.state.username,
            email: this.state.emailAddress,
            // phone: Number(this.state.phoneNumber),
            // dob: this.state.dob
        }
    }
    insertData() {
        const db = this.state.db;
        const data = this.getAllInput();

        if (data.username && data.email) {
            set(ref(db, 'Subscriber/' + data.username), {
                EmailAddress: data.email,
                // dateOfBirth: data.dob
            })
                .then(() => { alert('Hooreyy!!! You have successfully subscribed!') })
                .catch((error) => { alert('Opps! Seems like there was an error, details: ' + error) });
        } else {
            alert('Username and Email Address are required fields.');
        }

    }



    updateData() {
        const db = this.state.db;
        const data = this.getAllInput();
        if (data.username && data.email && data.dob) {
            update(ref(db, 'Subscriber/' + data.username),
                {
                    EmailAddress: data.email,
                    // Phonenumber: data.phone,
                    // dateOfBirth: data.dob
                })
                .then(() => { alert('Data was updated successfully!') })
                .catch((error) => { alert('Opps! Seems like there was error, details: ' + error) });
        }
    }


    deleteData() {
        const db = this.state.db;
        const username = this.getAllInput().username;
        if (data.username && data.email) {
            remove(ref(db, 'Subscriber/' + username))

                .then(() => { alert('You have successfully unsubscribed!') })
                .catch((error) => { alert('Opps! Seems like there was error, details: ' + error) });
        }
        else {
            alert('Username and Email Address are required fields.');
        }
    }
    // selectData() {
    //     const dbref = ref(this.state.db);
    //     const username = this.getAllInput().username;

    //     get(child(dbref, 'Subscriber/' + username)).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             this.setState({
    //                 fullname: snapshot.val().Fullname,
    //                 phoneNumber: snapshot.val().Phonenumber,
    //                 dob: snapshot.val.dateOfBirth,

    //             })
    //         }
    //         else{
    //             alert('No data found')
    //         }
    //     })
    //     .catch((error)=>{alert("There was error, details: "+error)});
    // }
}
