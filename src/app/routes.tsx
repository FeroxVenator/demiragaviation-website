import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home-page";
import { BrokeragePage } from "./pages/brokerage-page";
import { CharterPage } from "./pages/charter-page";
import { AircraftDetailPage } from "./pages/aircraft-detail-page";
import { ContactPage } from "./pages/contact-page";
import { Layout } from "./components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "brokerage", Component: BrokeragePage },
      { path: "charter", Component: CharterPage },
      { path: "aircraft/:id", Component: AircraftDetailPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
