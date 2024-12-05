import React, { useState, useEffect } from "react";
import Navbar from "../HomePage/navbar";
import axios from "axios";
import { dummyData } from "../dummyData";
import { CustomDialog } from "./customDilog";
import { useSearchParams } from "next/navigation";

const Card = ({details}) => {
    return <div class="card">
        <img src='/assets/dummy_dp.svg' />
        <div style={{ fontSize: '40px', fontWeight: 500 }}>{`${details?.first_name} ${details?.last_name}`}</div>
        <div style={{ display: 'flex' }}>
            <img style={{ width: '12px' }} src="/assets/location_icon.svg" />
            <div style={{ marginLeft: '8px', color: '#425763' }}>{details?.city}</div>
        </div>
        <div className="sub-divider" />
        <div className="phone-section">
            <div>
                <div style={{ display: 'flex' }}>
                    <img src="/assets/dailer_icon.svg" />
                    <div style={{ marginLeft: '8px', fontSize: '12px' }}>{details?.contact_number}</div>
                </div>
                <div style={{ color: '#AFAFAF', fontSize: '12px', marginTop: '5px' }}>
                    Available on phone
                </div>
            </div>
            <div>
                <CustomDialog data={details}/>
            </div>
        </div>
    </div>
}
export default function ListPageParentComp() {
    const [dataArray, setDataArray] = useState([]);
    const searchParams = useSearchParams();
    const searchValue = searchParams.get('search_value')
    const [inputValue, setInputValue] = useState(searchValue);
    const [callApi, setCallApi] = useState(false);

    useEffect(() => {
     
    }, [])
    useEffect(() => {
        fetch(`https://girman-api.vercel.app/users?user=${inputValue}`)
            .then((response) => response.json())
            .then((data) => setDataArray(data?.data))
            .catch((error) => console.log('Error fetching data:', error));


    }, [callApi])

    const gradientDiv = {
        height: '100vh',
        backgroundImage: 'linear-gradient(#FFFFFF,#B1CBFF)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '30px 30px'
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        return setCallApi(!callApi)
    }
    return <div style={{ position: 'relative' }}>
        <Navbar searchBar setInputValue={setInputValue} inputValue={inputValue} callApi={callApi} setCallApi={setCallApi}/>
        <div className="block md:hidden focus:outline-none mobile-searchbar">
            <div style={{ width: '350px', borderRadius: '6px', boxShadow: '0px 2px 8px #00000040',marginTop:'150px',overflow:'hidden'}}
                className="flex items-center border bg-white border-gray-300 rounded-md p-2 search-div">
                <img src='/assets/search_icon.svg' style={{ marginRight: '10px' }} />
                <form onSubmit={handleSubmit}>
                <input className='input-comp' placeholder="Search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </form>
            </div>
        </div>
        <div style={gradientDiv}>
            <div class="grid-container">
                {dataArray?.map((item) => {
                    return <Card  details={item}/>
                })}
                {dataArray?.length === 0 &&
                    <img src="/assets/no_records.svg" style={{ marginTop: '60px' }} />
                }
            </div>
        </div>
    </div>
}