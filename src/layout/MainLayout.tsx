import React, { ReactNode, useState } from "react";
import Navbar from "../components/navbar/Navbar";
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <main className="w-full h-screen overflow-x-hidden bg-[#F4F4F4]">
      <header className="md:px-6 px-2 bg-white fixed top-0 left-0 right-0 z-[100]">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </header>
      <section className="md:px-6 px-2 w-full pt-[3.5rem]">{children}</section>
    </main>
  );
};

export default MainLayout;
