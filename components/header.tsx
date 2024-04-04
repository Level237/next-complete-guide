import Link from "next/link";
import * as actions from "@/actions"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
} from '@nextui-org/react'
import HeaderAuth from "./header-auth";
import SearchInput from "./SearchInput";

export default function Header(){
    return(
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">Discuss</Link>
            </NavbarBrand>

            <NavbarContent justify="center">
                <NavbarItem>
                   <SearchInput/>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent>
                
            </NavbarContent>

            <NavbarContent justify="end">
               <HeaderAuth/>
            </NavbarContent>
        </Navbar>
    );
}