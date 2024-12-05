import React, { useState } from "react";
import Navbar from "./navbar";
import { useRouter } from "next/router";
export default function HomePageParentComp() {
    const [inputValue, setInputValue] = useState('');
    const router = useRouter();
    const gradientDiv = {
        width: '100%',
        height: '100vh',
        backgroundImage: 'linear-gradient(#FFFFFF,#B1CBFF)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '30px 30px'
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        return router.push(`/list?search_value=${inputValue}`)
    }
    return <div style={{ position: 'relative' }}>
        <Navbar />
        <div style={gradientDiv}>
            <img src='/assets/main_logo.svg' style={{ marginTop: "200px", }} />
            <div style={{ borderRadius: '15px', boxShadow: '0px 2px 8px #00000040', marginTop: '50px' }}
                className="flex items-center border bg-white border-gray-300 rounded-md p-2 mt-6 search-div">
                <img src='/assets/search_icon.svg' style={{ marginRight: '10px' }} />
                <form onSubmit={handleSubmit}>
                    <input className='input-comp' placeholder="Search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </form>
            </div>
        </div>
    </div>
}