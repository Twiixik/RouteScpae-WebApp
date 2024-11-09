import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import logo from '../../assets/logo.png'; 
import CommunityNav from '../../components/CommunityNav';
import Articles from './Articles';
import DailyPosts from './DailyPosts';
import Discussions from './Discussions';
import FloatingButton from '../../components/FloatingButton';
import BottomSheetModal from '../../components/BottomSheetModal';
import { FaBell } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

const CommunityPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handler to open the modal
    const handleAddClick = () => {
        setIsModalOpen(true);
    };

    // Handler to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="community-page">
            <header className="logo-header">
                <img src={logo} alt="RouteScape Logo" className="logo" />
            </header>
            
            <div className="Main-Text">
                <h2>Community</h2>
                <FaBell className="notification-bell" />
            </div>
            
            <div className="Filter-By-Country">
                <span>Denmark <IoIosArrowDown className="Arrow-Down" /></span>
            </div>
            
            <CommunityNav />

            <div className="community-content">
                <Routes>
                    <Route path="dailyposts" element={<DailyPosts />} />
                    <Route path="articles" element={<Articles />} />
                    <Route path="discussions" element={<Discussions />} />
                    <Route path="*" element={<Navigate to="dailyposts" />} />
                </Routes>
            </div>

            {/* Floating "+" Button to open the modal */}
            <FloatingButton onClick={handleAddClick} />

            {/* Bottom Sheet Modal */}
            <BottomSheetModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default CommunityPage;
