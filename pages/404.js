import Layout from '../components/layout'
import Link from 'next/link'

export default function Custom404(){
    return (
        <Layout title={'Dont found page'}>
            <section className='min-h-screen pt-20 px-20'>
                <div className="flex flex-col">
                    <h1 className="font-black text-2xl">
                        Esta pagina no existe :(
                    </h1>
                    <Link href="/">
                        <a className='text-pink-600 text-sm'>volver</a>
                    </Link>
                </div>
            </section>
        </Layout>
    )
}