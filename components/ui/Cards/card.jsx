import Link from "next/link";
import Button from "../buttons/button";

export default function Card({children}){
    return (
        <div className="flex text-center p-10 border rounded">
            {children}
        </div>
    )
}