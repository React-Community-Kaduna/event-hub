import { lazy, Suspense } from "react";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./config/routeMgt/RoutePaths";
import OrderSummary from "./components/pages/OrderSummary";
import DashboardLayout from "./components/layout/Layout";
import CreateEventContextProvider from "./stateManagement/CreateEventContex";
import { Loader } from "./components/Loading";
import { eventLoader, findEventLoader } from "./services/get-event-by-id";
import { getAlleventLoader } from "./services/getEventByLimit";
import ErrorPage from "./components/ErrorPage";
import ForgetPassword, { ResetPassword } from "./pages/authentication/Forget-Password";
import FindEvent from "./pages/FindEvent";

// Lazy-load
const Home = lazy(() => import("./pages/home/Home"));
const SearchResults = lazy(() => import("./components/pages/SearchResults"));
const EventsDesc = lazy(() => import("./components/pages/EventsDesc"));
const ComingSoon = lazy(() => import("./components/ComingSoon"));
const CreateEvent = lazy(() => import("./pages/createEvent/CreateEvent"));
const LogIn = lazy(() => import("./pages/authentication/LogIn"));
const SignUp = lazy(() => import("./pages/authentication/SignUp"));
const MainProfile = lazy(() => import("./pages/profile/index"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const AboutUs = lazy(() => import("./pages/aboutUs/aboutUs"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
});


const route = createBrowserRouter([
  {
    path:"/",
    element: <DashboardLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: appRoutes.home,
        element: <Home />,
      },
      {
        path: appRoutes.contactUs,
        element: <ContactUs  />,
      },
      {
        path: appRoutes.search,
        element: <SearchResults />,
        loader:getAlleventLoader,
      },
      {
        path: appRoutes.eventsDescription,
        element:<EventsDesc/>,
        loader: eventLoader,
      },
      {
        path: appRoutes.orderSummary,
        element: <OrderSummary />,
      },
      {
        path: appRoutes.login,
        element: <LogIn />,
      },
      {
        path: appRoutes.sign_up,
        element: <SignUp />,
      },{
        path:appRoutes.reset_password,
        element:<ResetPassword/>
      },
      {
        path: appRoutes.coming_soon,
        element: <ComingSoon />,
      },
      {
        path: appRoutes.create_Event,
        element: (
          <CreateEventContextProvider>
            <CreateEvent />
          </CreateEventContextProvider>
        ),
      },
      {
        path: appRoutes.profile,
        element: <MainProfile />,
      },
      {
        path: appRoutes.helpCenter,
        element: <ComingSoon />,
      },
      {
        path: appRoutes.aboutUs,
        element: <AboutUs />,
      },
      {
        path: appRoutes.contactUs,
        element: <ComingSoon />,
      },
      {
        path: appRoutes.forgot_password,
        element: <ForgetPassword/>,
      },
      {
        path:appRoutes.find_event,
        element:<FindEvent />,
        loader:findEventLoader,
      }
    ],
  }  
])
function App() {
  return (
    // <AuthProvider authType="localstorage" authName="event-hub">
    <QueryClientProvider client={queryClient}>
     <Suspense fallback={<Loader />}>
        <RouterProvider router={route}/>
      </Suspense>
    </QueryClientProvider>
    // </AuthProvider>
  );
}

export default App;

