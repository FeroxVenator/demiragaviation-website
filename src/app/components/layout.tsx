import { Outlet } from "react-router";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
