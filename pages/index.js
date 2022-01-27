import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Button from "../components/ui/buttons/button";
import Layout from "../components/layout";
import AboutCard from "../components/ui/Cards/aboutCard";
import ProyectCard from "../components/ui/Cards/CardProyect/proyectCard";
import CardContact from "../components/section/contact/cardContact";

export default function Home() {
  return (
    <Layout
      title={"Un gran espacio creativo donde se desarrollan grandes ideas!"}>
      <header className="main-header p-4 pt-20">
        <div className="container mx-auto p-10">
          <div className="header-header flex justify-center">
            <h1 className="text-zinc-900 font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-center max-w-5xl">
              Bienvenidos a <a className="text-pink-600">indentado</a> un gran
              espacio creativo
            </h1>
          </div>
          <div className="header-body flex justify-center">
            <p className="mt-6 text-lg text-slate-800 text-center max-w-3xl mx-auto">
              Un gran <a className="text-pink-600">espacio creativo</a> donde
              nacen y crecen grandes ideas de diseño grafico, programacion,
              desarrollo de marca y muchas otras historias. Deseas dar un gran
              salto digital para tu{" "}
              <a className="text-pink-600">negocio o marca personal</a>,
              entonces pongámonos en accion!
            </p>
          </div>
          <div className="header-footer flex justify-center mt-4">
            <Button href={"/getting-started"}>Get started</Button>
          </div>
        </div>
      </header>
      <section className="main-about">
        <div className="container mx-auto p-10">
          <AboutCard></AboutCard>
        </div>
      </section>
      <section className="main-proyect">
        <div className="container mx-auto p-10">
          <div className="py-5 text-center">
            <h3 className="font-black text-4xl sm:text-5xl lg:text-6xl text-zinc-900">
              Proyectos
            </h3>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-10 justify-center">         
                <ProyectCard link={"/404"} src="https://images.unsplash.com/photo-1610720657521-c38abf6dbb7d?">
                  Photography Child
                </ProyectCard>
          </div>
        </div>
      </section>
      <section className="main-contact">
        <div className="container mx-auto p-10">
          <div className="py-5 text-center">
            <h3 className="font-black text-4xl sm:text-5xl lg:text-6xl text-zinc-900 py-2">
              Contactos
            </h3>
            <p className="text-lg text-slate-800 text-center max-w-3xl mx-auto py-2">
              Deseas ponerte en <a className="text-pink-600">acción</a>  para que tu <a className="text-pink-600">negocio o marca personal</a>  de el salto digital que
              necesita para crecer mucho más?  
            </p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-10 justify-center">
            <CardContact link={"https://www.github.com/relesk"} src={"/github.svg"}>Github</CardContact>
            <CardContact link={"https://www.twitter.com/fabzcode"} src={"/twitter.svg"}>Twitter</CardContact>
            <CardContact link={"https://www.instagram.com/fabzcode"} src={"/instagram.svg"}>Github</CardContact>
          </div>
        </div>
      </section>
    </Layout>
  );
}
