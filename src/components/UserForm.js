import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const submit = (e) => {
        e.preventDefault();

        const newUser = {
            firstName, lastName, email, password, confirm
        };
    };

    return(
        <div className="container w-25">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label for="first_name">First Name:</label>
                    <input className="form-control" type="text" name="first_name" onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label for="last_name">Last Name:</label>
                    <input className="form-control" type="text" name="last_name" onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input className="form-control" type="text" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label for="confirm">Confirm Password:</label>
                    <input className="form-control" type="password" name="confirm" onChange={(e) => setConfirm(e.target.value)}></input>
                </div>
            </form>
            <hr></hr>
            <h5>User Form Data</h5>
            <div className="container">
                <p>First Name: <span>{firstName}</span></p>
                <p>Last Name: <span>{lastName}</span></p>
                <p>Email: <span>{email}</span></p>
                <p>Password: <span>{password}</span></p>
                <p>Confirm Password: <span>{confirm}</span></p>
            </div>
        </div>
    );
};

export default UserForm;