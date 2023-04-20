import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const AppLayout = () => {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <About />
                    </Suspense>
                ),
                children: [
                    {
                        path: "profile",  // dont use "/" for nested routes
                        element: <Profile />,
                    }
                ]
            },
            {
                path: "/contactUs",
                element: <ContactUs />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);