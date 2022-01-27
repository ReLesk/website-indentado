import Head from "next/head";

export default function HeadTemplate({children}) {
    return (
      <Head>
        <title>
          Indentado - {children}
        </title>
        <meta author="Fabian Segovia :)"/>
        <meta
          name="description"
          content="Un gran espacio creativo donde nacen y crecen grandes ideas de
              diseño grafico, programacion, desarrollo de marca y muchas otras
              historias."/>
      </Head>
    );
}