import { ReactNode } from "react";
import './styles.css'
import { NavTop } from "@/components";
import { NavSide } from "@/components/navigations/NavSide/NavSide";
import { useState } from "react";

interface Props {
    children: ReactNode;
}

export const MainLayout = ({children} : Props) => {

    const toggleNavSide = () => {
        
    }

    return(
        <>
            <NavTop/>
            <main id="main-content">
                {children}
            </main>
            <NavSide/>
        </>
    );
}