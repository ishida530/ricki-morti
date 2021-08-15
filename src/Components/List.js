import React, { useEffect, useState, } from 'react';
import { FaLongArrowAltLeft, FaRegSadCry } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const List = props => {
    const [characterArray, setCharacterArray] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${props.location.search}`)
            .then(res => {
                return res.json();
            }).then(data => {
                setCharacterArray(data.results)
                setCharacterArray(data.results)
            })
            .catch(error => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    }, [props.location.search])

    if (isLoading) {
        return <div className='d-flex flex-column justify-content-center align-items-center w-100'>
            <Loader className='d-flex justify-content-center ms-auto me-auto mt-5 w-100' type="Oval" color="#008F8D" height={280} width={200} />
            <h2 style={{ color: "#1C4D43" }} className='w-100 mt-5 pt-5 danger text-center'>Data is loading...</h2>;
        </div>
    }

    if (error || !Array.isArray(characterArray)) {
        return <div className="offset-0 offset-sm-1 d-flex listHeadline d-flex flex-column  mt-5">
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-center justify-content-lg-start  ">
                <Link to="/" className="d-flex justify-content-center me-lg-5"><button className=""><FaLongArrowAltLeft className="backArrowBtn" /></button></Link>
                <h1 style={{ color: "#1C4D43" }} className=" text-center offset-1
                 d-flex justify-content-center align-items-center">Search results</h1>
            </div>
            <div>
                <h2 style={{ color: "#1C4D43" }} className='w-100 mt-5 pt-5 danger text-center'>There was an error loading your data!</h2>
                <FaRegSadCry className="w-100 mt-5" style={{ minHeight: '120', color: "#1C4D43" }} />
            </div>
        </div>
    }

    return (
        <section className="col-12 col-sm-11 d-flex flex-column offset-0 offset-sm-1 justify-content-center justify-content-lg-start">
            <div className="offset-0 d-flex listHeadline d-flex flex-column  mt-5">
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start ">
                    <Link to="/" className="d-flex justify-content-center"><button className=""><FaLongArrowAltLeft className="backArrowBtn" /></button></Link>
                    <h1 style={{ color: "#1C4D43" }} className="offset-0 offset-sm-1 text-center d-flex justify-content-center align-items-center">Search results</h1>
                </div>
            </div>
            <div className="d-flex flex-column flex-sm-row listOptions justify-content-center col-12 col-sm-11 mt-2 mt-sm-5">
                <div className="flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center  d-flex w-100">
                    <div className="queryButton  col-4 col-sm-2 text-center text-sm-start m-2 ms-sm-0 ">Options:</div>
                    {props.name.length !== 0 ? <div className="queryButton col-6 col-sm m-2 text-center">Name:<span className="text-capitalize">  {props.name}</span></div> : null}
                    {props.status !== 0 ? <div className="queryButton col-6 m-2 col-sm text-center">Status:<span className="text-capitalize">{props.status}</span></div> : null}
                    {props.gender !== 0 ? <div className="queryButton col-6 m-2 col-sm text-center">Gender:<span className="text-capitalize"> {props.gender}</span></div> : null}
                </div>
            </div>
            <ul className='p-2 ps-sm col-12 col-sm-11 listCharacters p5 mt-5'>
                <li className="headlineList d-flex justify-content-around ps-4 pe-4 d-none d-sm-flex">
                    <div>Photo</div>
                    <div>Name</div>
                    <div>Gender</div>
                    <div>Status</div>
                    <div>Location</div>
                </li>
                {isLoading && <Loader className='ms-auto me-auto mt-5' type="ThreeDots" color="#008F8D" height={280} width={200} />}
                {characterArray.map(item => (
                    <li key={item.id} className="characterLi d-flex flex-column flex-sm-row justify-content-around mt-3 p-2 p-sm-4">
                        <div className='col-12 d-flex justify-content-around m-2 m-sm-'>
                            <span className="d-block d-sm-none">Photo:</span>
                            <img className="img-fluid img-thumbnail" src={item.image} alt="" />
                        </div>
                        <div className="characterName d-flex justify-content-around m-2 m-sm-0">
                            <span className="d-block d-sm-none col-2">Name:</span>
                            <span>{item.name}</span>
                        </div>
                        <div className="d-flex justify-content-around m-2 m-sm-0">
                            <span className="d-block d-sm-none">Gender:</span>
                            <span>{item.gender}</span>
                        </div>
                        <div className="d-flex justify-content-around m-2 m-sm-0">
                            <span className="d-block d-sm-none">Status:</span>
                            <span>{item.status}</span>
                        </div>
                        <div className="d-flex justify-content-around m-2 m-sm-0">
                            <span className="d-block d-sm-none">Location:</span>
                            <span>{item.location.name}</span>
                        </div>
                    </li>
                ))
                }
            </ul>
        </section>
    );
}

export default List;