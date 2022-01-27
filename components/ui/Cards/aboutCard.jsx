import Image from "next/image";

export default function AboutCard() {
 return (
   <div className="flex p-10 text-center justify-center">
     <div className="profile-img rounded-full">
       <Image
         className="rounded-full cursor-pointer hover:rotate-6 transition"
         src={"/profile-img.png"}
         height={150}
         width={150}
       />
       <div className="my-2">
         <h3 className="font-black text-4xl sm:text-5xl lg:text-6xl text-zinc-900">
           Acerca de
         </h3>
       </div>
       <div className="p-5">
         <p className="font-regular max-w-2xl text-lg text-slate-800">
           Mi nombre es <a className="text-pink-600">Fabian Segovia</a>, soy un
           joven desarrollador web frontend y diseñador gráfico de Venezuela, al
           cual le encanta crear grandes proyectos de diseño web.
         </p>
       </div>
     </div>
   </div>
 );
}