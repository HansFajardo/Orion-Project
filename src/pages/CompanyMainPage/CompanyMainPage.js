import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useState } from "react";
// import { Stack } from "react-bootstrap";
// import ReviewsLongContainer from "../../components/ReviewsLongContainer/ReviewsLongContainer";
// import ReviewCard from "../../components/ReviewCard/ReviewCard";
import CompanyDashboardPage from "./CompanyDashboardPage/CompanyDashboardPage";
import CompanyServiceLinesPage from "./CompanyServiceLinesPage/CompanyServiceLinesPage";
import CompanyIndustriesPage from "./CompanyIndustriesPage/CompanyIndustriesPage";
import CompanyBillingPage from "./CompanyBillingPage/CompanyBillingPage";
import CompanyFocusPage from "./CompanyFocusPage/CompanyFocusPage";

export default function CompanyMainPage() {

    const sidebarCategories = ["Company Dashboard", "Service Lines", "Industries", "Focus", "Billing"];
    const [activeCategory, setActiveCategory] = useState("Company Dashboard");

    const handleActiveCategory = (index) => {
        setActiveCategory(sidebarCategories[index]);
    };

    return (
        <MainLayout>
            <div className="h-100 d-flex flex-column">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        {/* column 1 */}
                        <div className="col-lg-2 border-end p-0">
                            {/* sidebar categories */}
                            {sidebarCategories.map((category, index) => (
                                <div
                                    className={`container-fluid px-3 py-3 ${category === activeCategory ? "bg-light" : null
                                        } ${index === sidebarCategories.length - 1
                                            ? "border-bottom"
                                            : null
                                        } pointer`}
                                    onClick={() => {
                                        handleActiveCategory(index);
                                    }}
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                        {/* for Company Dashboard */}
                        {activeCategory === "Company Dashboard" && (
                            <div className='col my-3'>
                                <CompanyDashboardPage />
                            </div>

                        )}

                        {/* for Service Lines */}
                        {activeCategory === "Service Lines" && (
                            <div className='col my-3'>
                                <CompanyServiceLinesPage />
                            </div>

                        )}

                        {/* for Industry Recognitions */}
                        {activeCategory === "Industries" && (
                            <div className='col my-3'>
                                <CompanyIndustriesPage />
                            </div>
                        )}

                        {/* for Specializations */}
                        {activeCategory === "Focus" && (
                            <div className='col my-3'>
                                <CompanyFocusPage />
                            </div>
                        )}

                        {/* for Billing */}
                        {activeCategory === "Billing" && (
                            <div className='col my-3'>
                                <CompanyBillingPage />
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
