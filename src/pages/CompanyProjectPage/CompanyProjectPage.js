import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import OngoingProjectCard from "../../components/ReviewCard/OngoingProjectCard";
import RequestsCard from "../../components/RequestsCard/RequestsCard";
import CompanyRequestsCard from "../../components/RequestsCard/CompanyRequestsCard";
import CompanyOngoingProjectCard from "../../components/ReviewCard/CompanyOngoingProjectCard";
import CompanyReviewCard from "../../components/ReviewCard/CompanyReviewCard";

export default function CompanyProjectPage() {

    const sidebarCategories = ["Ongoing Projects", "Finished Projects", "Requests"];
    const [activeCategory, setActiveCategory] = useState("Ongoing Projects");
    

    //change active category
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

                        {/* for Ongoing Projects */}
                        {activeCategory === "Ongoing Projects" && (
                            <div className="col px-5 py-4 overflow-auto">
                                <Stack direction="vertical" gap={4}>
                                    <CompanyOngoingProjectCard />
                                    <CompanyOngoingProjectCard />
                                </Stack>
                            </div>
                        )}

                        {/* for Finished Projects */}
                        {activeCategory === "Finished Projects" && (
                            <div className="col px-5 py-4 overflow-auto">
                                <Stack direction="vertical" gap={4}>
                                    <CompanyReviewCard />
                                    <CompanyReviewCard />
                                    <CompanyReviewCard />
                                    <CompanyReviewCard />
                                </Stack>
                            </div>
                        )}

                        {/* for requests */}
                        {activeCategory === "Requests" && (
                            <div className="col px-5 py-4 overflow-auto">
                                <Stack direction="vertical" gap={4}>
                                    <CompanyRequestsCard />
                                    <CompanyRequestsCard />
                                </Stack>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
