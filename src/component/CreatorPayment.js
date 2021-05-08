import React from 'react'
import "../css-component/CreatorPayment.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function CreatorPayment() {

    return (
        <div className="creatorpayment" id="createpayment">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Select a membership level</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <h2> Beginner</h2>
                    </div>
                    <div className="medium">
                        <h1>&#36; 39 NTD</h1>
                        <h2>Per month</h2>
                        <br></br>
                        <Button className="custom-button" variant="contained" color="inherit">
                            Join Me!
                        </Button>
                    </div>
                    <div className="bottom">
                        <h3>- Easy access to songs!</h3>
                        <h3>- Secret email list</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <h2>Big Fan!</h2>
                    </div>
                    <div className="medium">
                        <h1>&#36; 69 NTD</h1>
                        <h2>Per month</h2>
                        <br></br>
                        {/* <Button className="custom-button" variant="outlined" color="secondary">
                            Join Me!
                        </Button> */}
                        <Button className="custom-button" variant="contained" color="inherit">
                            Join Me!
                        </Button>
                    </div>
                    <div className="bottom">
                        <h3>- Easy access to songs!</h3>
                        <h3>- Secret email list</h3>
                        <h3>- DM * 3!!!!!!</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <h2>FANATIC!!!!</h2>
                    </div>
                    <div className="medium">
                        <h1>&#36; 99 NTD</h1>
                        <h2>Per month</h2>
                        <br></br>
                        <Button className="custom-button" variant="contained" color="inherit">
                            Join Me!
                        </Button>
                    </div>
                    <div className="bottom">
                        <h3>- Easy access to songs!</h3>
                        <h3>- Secret email list</h3>
                        <h3>- DM * 6!!!!!!</h3>
                        <h3>- Demo Tracks!</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatorPayment
