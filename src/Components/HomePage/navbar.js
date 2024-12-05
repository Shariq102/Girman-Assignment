import React, { useState } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar({ searchBar,setInputValue,inputValue,callApi,setCallApi }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const parentDivStyle = {
        width: '100%',
        height: '100px',
        boxShadow: '0px 1.41px 8.43px #00000040',
        position: 'fixed',
        backgroundColor: 'white'
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        return setCallApi(!callApi)
    }
    return (
        <header style={parentDivStyle}>
            <div className="container mx-auto flex justify-between items-center  p-5">
                <Link href='/'>
                    <img src='/assets/Logo.svg' />
                </Link>
                {searchBar ?
                    <div className="hidden md:flex space-x-6">
                        <div style={{ width: '400px', borderRadius: '6px', boxShadow: '0px 2px 8px #00000040',overflow:'hidden' }}
                            className="flex items-center border bg-white border-gray-300 rounded-md p-2 search-div">
                            <img src='/assets/search_icon.svg' style={{ marginRight: '10px' }} />
                            <form onSubmit={handleSubmit}>
                                <input className='input-comp' placeholder="Search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                            </form>
                        </div>
                    </div>
                    :
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/list" className="hover:text-blue-600 hover:underline">SEARCH</Link>
                        <Link href="https://girmantech.com/" className="hover:text-blue-600 hover:underline">WEBSITE</Link>
                        <Link href="https://www.linkedin.com/posts/girmantech_introducing-our-new-landing-page-activity-7227310548671946753-rdQC/" className="hover:text-blue-600 hover:underline">LINKEDIN</Link>
                        <Link href='mailto:contact@girmantech.com' className="hover:text-blue-600 hover:underline">CONTACT</Link>
                    </nav>
                }
                <div className="block md:hidden focus:outline-none">
                    <Menubar className='Menubar'>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <img style={{ height: '23px' }} src='/assets/menu_icon.svg' />
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    SEARCH
                                </MenubarItem>
                                <MenubarItem ><a className='sub-links'>WEBSITE</a> </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>LINKEDIN</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>CONTACT</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </div>
        </header>
    );
}
