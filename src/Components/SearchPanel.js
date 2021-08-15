import React, { useState } from 'react';
import { Link } from "react-router-dom";

const SearchPanel = () => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [errorTittle, setErrorTittle] = useState(false);

    const validationInput = () => (name.trim() === "" || name === false ? setErrorTittle(true) : false)
    const handleOnChangeName = (e) => setName(`${e.target.value}`)
    const handleOnChangeGender = (e) => setGender(`${e.target.value === "gender" ? "" : e.target.value} `)
    const handleOnChangeStatus = (e) => setStatus(`${e.target.value === "status" ? "" : e.target.value} `)
    const handleSubmitForm = (e) => {
        e.preventDefault();
        validationInput()
    }

    return (
        <section className=" col d-flex panelWrapper flex-column align-items-center  justify-content-center h-100  ">                <h1 className='mt-5 mb-4 mt-lg-0 text-center'>Search for characters</h1>

            <form onSubmit={handleSubmitForm} className="d-flex flex-column justify-content-center align-items-start p-3">
                <div>
                    <input onFocus={() => setErrorTittle(false)} style={{
                        borderColor: `${errorTittle ? "red" : '#006C90'}`,
                        marginBottom: `${errorTittle ? "0" : '20px'}`
                    }} onChange={handleOnChangeName} type="text" value={name} placeholder="Please enter the name of character" />
                    <span style={{
                        display: `${errorTittle ? "block" : 'none'}`,
                        color: "red", fontWeight: 'bold', fontSize: 14
                    }}>Can't be empty field of name
                    </span>
                </div>
                <select defaultValue={status} onChange={handleOnChangeStatus}>
                    <option value="status">Status</option>
                    <option value="died">Died</option>
                    <option value="alive">Alive</option>
                </select>
                <select defaultValue={gender} onChange={handleOnChangeGender}>
                    <option value="gender">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="genderless">Genderless</option>
                </select>
                {name.trim().length !== 0 ?
                    <Link to={{
                        pathname: "/List",
                        search: `?name=${name}&status=${status}&gender=${gender} `,
                        hash: "#the-hash",
                        state: { fromDashboard: true }
                    }} exect="true" >
                        <button type="submit">Search</button>
                    </Link>
                    : <button type="submit">Search</button>}

            </form>
        </section>
    );
}

export default SearchPanel;

