import Navbar from "./navbar";
import HeadTemplate from "./seo/head";

export default function Layout({children, title}) {
    return (

        <>
            <HeadTemplate>{title}</HeadTemplate>
            <Navbar></Navbar>
            {children}
        </>
    )
}