import { Route, Routes } from "react-router-dom";
import { CampaingPage, DashboardPage, CampaingFormPage } from '@/pages'

export const RouterIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage/>}/>
            <Route path="/campaing" element={<CampaingPage/>}/>
            <Route path="/campaing/create" element={<CampaingFormPage/>}/>
        </Routes>
    );
}