import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-datepicker/dist/react-datepicker.css";
import "./App.scss";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import CompanyLoginPage from "./pages/CompanyLoginPage/CompanyLoginPage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./backend/AuthContext";
import SignUpSteps from "./pages/SignUpSteps";
import CompanyProfile from "./pages/CompanyProfilePage/CompanyProfile";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import CompanyRegistrationPage from "./pages/CompanyRegistrationPage/CompanyRegistrationPage";
import BookmarkPage from "./pages/BookmarkPage/BookmarkPage";

import ApplicantsPage from "./pages/ApplicantsPage/ApplicantsPage";
import CompanyMainPage from "./pages/CompanyMainPage/CompanyMainPage";
import CompanyProjectPage from "./pages/CompanyProjectPage/CompanyProjectPage";
import ProjectDetails from "./pages/CompanyProjectPage/ProjectDetails";
import React from "react";
import TransactionPage from "./pages/TransactionPage/TransactionPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import FindJobsPage from "./pages/FindJobsPage/FindJobsPage";
import CompanyMessagePage from "./pages/CompanyMessagePage/CompanyMessagePage";
import CompanyTransactionPage from "./pages/TransactionPage/CompanyTransactionPage";
import CompanySignUpSteps from "./pages/CompanySignUpPage/CompanySignUpSteps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/client-dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/client-messages",
    element: <MessagesPage />,
  },
  {
    path: "/company-messages",
    element: <CompanyMessagePage />,
  },
  {
    path: "/sign-in-client",
    element: <LoginPage />,
  },
  {
    path: "/sign-in-company",
    element: <CompanyLoginPage />,
  },
  {
    path: "/client-profile",
    element: <ProfilePage />,
  },
  {
    path: "/client-signup",
    element: <SignUpSteps />,
  },
  {
    path: "/company-signup",
    element: <CompanySignUpSteps />,
  },
  {
    path: "/company-profile",
    element: <CompanyProfile />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
  },
  {
    path: "/company-register",
    element: <CompanyRegistrationPage />,
  },
  {
    path: "/client-bookmark",
    element: <BookmarkPage />,
  },
  {
    path: "/client-projects",
    element: <CompanyProjectPage />,
  },
  {
    path: "/client-project-details",
    element: <ProjectDetails />,
  },
  {
    path: "/client-applicants",
    element: <ApplicantsPage />,
  },
  {
    path: "/client-transactions",
    element: <TransactionPage/>,
  },
  {
    path: "/client-search-results",
    element: <SearchResultsPage/>,
  },
  {
    path: "/company-projects",
    element: <CompanyProjectPage />,
  },
  {
    path: "/company-dashboard",
    element: <CompanyMainPage />,
  },
  {
    path: "/company-project-details",
    element: <ProjectDetails />,
  },
  {
    path: "/company-transactions",
    element: <CompanyTransactionPage/>,
  },
  {
    path: "/find-jobs",
    element: <FindJobsPage/>,
  },
  
]);

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
