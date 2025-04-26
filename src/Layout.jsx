import BannerSlide from "./components/BannerSlide"
import Header from "./components/Header"
import MenuHeader from "./components/MenuHeader"
import NewsSection from "./components/NewSection"
import SidebarMenu from "./components/SidebarMenu"


const Layout = () => {
    return (
        <div className="flex flex-col w-full h-full min-w-[1400px] items-center">
            <Header />
            <div className="flex flex-col gap-6 w-[80%]">
                <MenuHeader />
                <BannerSlide />
                <div className="flex gap-6">
                    <SidebarMenu className="w-[20%]" />
                    <NewsSection className="w-[80%]" />
                </div>
            </div>
        </div>
    );
};


export default Layout;
