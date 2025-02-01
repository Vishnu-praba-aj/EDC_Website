import React, { useState } from "react";
import { Link } from "react-router-dom"; // Don't forget to import Link from react-router-dom
import "../App.css";
import "./RegForm.css";

const Regform = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [year, setYear] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [email, setEmailId] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [event, setEvent] = useState('');
    const [showModal, setShowModal] = useState(false); // Modal state

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmailId(inputEmail);
        setIsEmailValid(!/^[a-zA-Z]+[0-9]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputEmail));
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        setPhoneError(!/^\d{10}$/.test(value));
    };

    const handleYearChange = (e) => setYear(e.target.value);
    const handleEventChange = (e) => setEvent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const department = e.target.dept.value.trim();
        const college = e.target.college.value.trim();
        const refCode = e.target.refcode.value.trim();

        if (!name || !phoneNumber || phoneError || !year || !department || !email || !college || !refCode || !event) {
            alert('Please fill in all fields correctly.');
            return;
        }

        const formData = { name, phoneNumber, year, department, email, college, event, refCode, regId: "" };

        try {
            const response = await fetch('http://localhost:3001/registrations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowModal(true); // Show modal
                e.target.reset();
                setPhoneNumber('');
                setYear('');
                setEvent('');
                setEmailId('');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message || 'Submission failed.'}`);
            }
        } catch (error) {
            alert('An error occurred while submitting the form.');
            console.error('Error:', error);
        }
    };

    return (
    
        <div className="container">
            {/* Navigation with links */}
           

            <div className="text">Registration Form</div>
            <div >
            <nav>
                <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
            </nav>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-data">
                    <input type="text" name="name" required placeholder=" " />
                    <label>Full Name</label>
                </div>
                <div className="input-data">
                    <input type="number" name="phno" value={phoneNumber} onChange={handlePhoneChange} required placeholder=" " />
                    <label>Phone Number</label>
                    {phoneError && <span>Please enter a valid phone number.</span>}
                </div>
                <div className="input-data">
                    <select name="year" value={year} onChange={handleYearChange} required>
                        <option value="">Select your year</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="Mtech1">Mtech Int.1</option>
                        <option value="Mtech2">Mtech Int.2</option>
                    </select>
                </div>
                <div className="input-data">
                    <input type="text" name="dept" required placeholder=" " />
                    <label>Department</label>
                </div>
                <div className="input-data">
                    <input type="text" name="email" onChange={handleEmailChange} required placeholder=" " />
                    <label>Email</label>
                    {isEmailValid && <span>Please enter a valid email.</span>}
                </div>
                <div className="input-data">
                    <input type="text" name="college" required placeholder=" " />
                    <label>College</label>
                </div>
                <div className="input-data">
                    <select name="event" value={event} onChange={handleEventChange} required>
                        <option value="">Select event</option>
                        <option value="Marketize">Marketize</option>
                        <option value="Mela">Mela</option>
                        <option value="Udaan">Udaan</option>
                        <option value="Sycon">Sycon</option>
                        <option value="Ventura">Ventura</option>
                    </select>
                </div>
                <div className="input-data">
                    <input type="text" name="refcode" required placeholder=" " />
                    <label>Reference Code</label>
                </div>
                <button type="submit">Submit</button>
            </form>

            {/* Modal for success message */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Thank you for registering!</p>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
        
    );
};

export default Regform;
