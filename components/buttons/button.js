import Link from "next/link"

export default function Button({children, href}) {
    return(
        <Link href={href}>
            <a className="bg-zinc-900 text-slate-50 font-medium px-10 py-2 rounded-md hover:bg-pink-600 transition ease-in-out hover:-translate-y-1 delay-150 hover:scale-110 duration-300" >{children}</a>
        </Link>
    )
}