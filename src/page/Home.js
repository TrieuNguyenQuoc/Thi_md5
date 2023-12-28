
import {Outlet} from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";


export default function Home() {
    return (

        <div className={'row'}>
            <div className='col-12'>
                <Header/>
                <Outlet></Outlet>
                <Footer/>
            </div>
        </div>
    )
}