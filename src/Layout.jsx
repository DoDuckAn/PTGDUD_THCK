import BannerSlide from "./components/BannerSlide"
import Header from "./components/Header"
import MenuHeader from "./components/MenuHeader"


const Layout=()=>{
    return(
        <div className="flex flex-col w-full h-full min-w-[1400px] items-center">
            <Header/>
            <div className="grid grid-cols-[1fr-4fr] grif-rows-[1fr 7fr-7fr] w-[80%]">
                <MenuHeader/>
                <BannerSlide/>
            </div>
        </div>
    )
}

export default Layout