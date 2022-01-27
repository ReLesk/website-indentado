import Image from "next/image"
import GithubCircle from "../public/github-circle"


export default function Footer(){
    return (
        <div className="flex p-10 bg-black justify-center">
            <div className="container px-10">
                <div className="py-2 text-left">
                    <div className="media-footer-link">
                        <h5 className="text-xl text-white font-black py-2">Indentado</h5>
                        <div className="flex">
                            <p className="text-sm text-white pr-5">Copyright &copy; 2022 indentado. </p>
                            <a className="text-white hover:text-gray-500 transition-colors cursor-pointer">
                                <GithubCircle className=""></GithubCircle>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}