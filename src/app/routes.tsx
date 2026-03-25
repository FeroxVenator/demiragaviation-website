import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home-page";
import { BrokeragePage } from "./pages/brokerage-page";
import { CharterPage } from "./pages/charter-page";
import { AircraftDetailPage } from "./pages/aircraft-detail-page";
import { ContactPage } from "./pages/contact-page";
import { AboutPage } from "./pages/about-page";
import { PrivacyPage } from "./pages/privacy-page";
import { TermsPage } from "./pages/terms-page";
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
      { path: "about", Component: AboutPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "terms", Component: TermsPage },
    ],
  },
]);