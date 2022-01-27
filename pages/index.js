import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Button from "../components/ui/buttons/button";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <header className="main-header p-4">
        <div className="container mx-auto p-10">
          <div className="header-header flex justify-center">
            <h1 className="text-zinc-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center max-w-3xl">
              Bienvenidos a <a className="text-pink-600">indentado</a> un gran espacio creativo
            </h1>
          </div>
          <div className="header-body flex justify-center">
            <p className="mt-6 text-lg text-slate-800 text-center max-w-3xl mx-auto">
              Un gran espacio creativo donde nacen y crecen grandes ideas de
              diseño grafico, programacion, desarrollo de marca y muchas otras
              historias.
            </p>
          </div>
          <div className="header-footer flex justify-center mt-4">
            <Button href={"/getting-started"}>Get started</Button>
          </div>
        </div>
      </header>
    </Layout>
  );
}
