import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isPublic }) => {
    const adminInfo = useSelector((state) => state.admin.adminInfo);
    
    console.log(adminInfo)

    if (isPublic) {
        return adminInfo ? <Navigate to="admin/dashboard" /> : <Outlet/>;
    } else {
        return adminInfo ? <Outlet/> : <Navigate to="admin/login" />;
    }
};

export default ProtectedRoute;
