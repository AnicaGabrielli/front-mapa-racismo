'use client'
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Main from "@/components/layout/main";
import FormularioCreate from "./_components/formsCreate";
import SectionLinCol from "@/components/layout/section-Lin-Col";
//import SectionCol from "@/components/layout/section-Col";
//import Image from 'next/image'
//import Link from "next/link";



export default function CreateCountPage(){
      return (
        <>
        <Header></Header>
            <Main>
                <SectionLinCol>
                    <h1 className="text-2xl font-bold mb-6">Não Fique de fora, apoie os nossos e seja apoiado!</h1>
                    <FormularioCreate></FormularioCreate>
                </SectionLinCol>
            </Main>
    
        <Footer></Footer>
        </>
      );
}