import React from "react";
import Image from "@/node_modules/next/image";
import Logo from "@/../../img/logo.svg";
import Link from "@/node_modules/next/link";
import {ROUTER} from "../../router/router.enum"
import "./Header.css"

const Header = () =>{
    return(
        <header className="header">
            <div className="header__container">
                <div className="header__wrapper">                
                    <Link className="header__logo" href={ROUTER.HOME}><Image src={Logo}/>thewatchspot</Link>
                    <div className="header__nav">
                        <Link className="header__nav-item" href={ROUTER.ABOUT_US}>About us</Link>
                        <Link className="header__nav-item" href={ROUTER.CATALOG}>Catalog</Link>
                        <Link className="header__nav-item" href={ROUTER.SALE}>Sale</Link>
                    </div>
                </div>
                <div className="header__contacts">+000000000</div>
            </div>
        </header>
    );
}

export default Header;