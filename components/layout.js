import Navbar from "./navbar";
import HeadTemplate from "./seo/head";
import Footer from "./footer";

export default function Layout({children, title}) {
    return (

        <>
            <HeadTemplate>{title}</HeadTemplate>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>
    )
}