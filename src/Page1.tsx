import React from 'react';
import { Link } from 'react-router-dom';

const Page1: React.FC = () => (
    <form>
        <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" />
        </div>
        <div className="form-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" />
        </div>
        <div className="form-field">
            <label htmlFor="gender">Gender</label>
            <select name="gender">
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>
        </div>
        <div className="form-field">
            <label htmlFor="areYouAwesome">Are you AWESOME?</label>
            <input type="checkbox" name="areYouAwesome" />
        </div>
        <Link to="page2">Submit</Link>
    </form>
);

export default Page1;