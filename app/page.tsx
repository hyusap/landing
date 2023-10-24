import React from "react";
import { ImBubble } from "react-icons/im";

export default function Light(): JSX.Element {
  return (
    <div className="bg-white font-exo2 text-black flex flex-col items-center w-full">
      <section className="w-full h-screen flex flex-col items-center justify-center [background:linear-gradient(180deg,rgb(217,217,217)_0%,rgba(217,217,217,0)_100%)]">
        <img className="w-[276px] h-[276px]" alt="Pl mark" src="PlasticLabsAssets-03.svg" />
        <img className="w-[673px] h-[129px]" alt="Plastic Lab Word" src="Group.svg" />
      </section>
      <section className="w-full  flex flex-col items-center [background:linear-gradient(180deg,rgba(217,217,217,0.3)_0%,rgba(217,217,217,0)_100%)]">
        <a className="mb-[50px] mt-[50px]" href="https://blog.plasticlabs.ai" target="_blank" rel="noreferrer">
          <button className="w-[193px] h-[58px] flex flex-row items-center gap-2 justify-center bg-white text-black font-bold rounded-[52px]">
            <ImBubble />
            <p>Blog</p>
          </button>
        </a>
        <div className="md:w-3/4 w-11/12 flex flex-col items-center">
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 [font-family:'Exo_2-Bold',Helvetica] font-bold tracking-[0] leading-[normal]">
              About
            </h1>
            <p className="font-normal tracking-[0] leading-[normal]">
              Plastic Labs is a research-driven product company building at the intersection of human and machine
              learning.
              <br />
              <br />
              Our mission is to eliminate the principal-agent problem in human-AI interaction, powering a future of
              abundant, autonomous, individually-aligned agents.
            </p>
          </div>
          <div className="w-full flex flex-col items-start mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Products
            </h1>
            <div className="flex flex-row gap-x-8">
              <p>Bloom</p>
              <p>Honcho (coming soon...)</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Founders
            </h1>
            <div className="flex flex-row gap-x-8">
              <p>Courtland Leer</p>
              <p>Vince Trost</p>
              <p>Vineeth Voruganti</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium  tracking-[0] leading-[normal]">
              Research & Engineering
            </h1>
            <div className="flex flex-row gap-x-8">
              <p>Ayush Paul</p>
              <p>Jacob Van Meter</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Community
            </h1>
            <div className="flex flex-row gap-x-8">
              <p>Leyla Sarper</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Advisors & Angels
            </h1>
            <div className="flex flex-row gap-x-8">
              <p>Thomas Howell</p>
              <p>Zach Seward</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Backed By
            </h1>
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-x-8">
              <p>Betaworks</p>
              <p>Mozilla</p>
              <p>Greycroft</p>
              <p>Differential</p>
              <p>Algovera</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Discord Testers
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
              <p>a_vidb</p>
              <p>bhaumik</p>
              <p>butlermuwo</p>
              <p>clementlo</p>
              <p>dblurj05832</p>
              <p>d.plummer</p>
              <p>danibalcells</p>
              <p>deividrocha_</p>
              <p>Emmaheineman</p>
              <p>eseoghene</p>
              <p>.greypilgrim</p>
              <p>gustavbronelius</p>
              <p>jas225</p>
              <p>levati</p>
              <p>magisterfalk</p>
              <p>mani</p>
              <p>Maxwell</p>
              <p>mca248</p>
              <p>pr1mordial</p>
              <p>_stevengao</p>
              <p>temisan.</p>
              <p>tylerokada</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 1064 12" fill="none" className="w-full mb-[50px]">
            <path d="M1058 0.666667C1055.05 0.666667 1052.67 3.05448 1052.67 6C1052.67 8.94552 1055.05 11.3333 1058 11.3333C1060.95 11.3333 1063.33 8.94552 1063.33 6C1063.33 3.05448 1060.95 0.666667 1058 0.666667ZM6 0.666667C3.05444 0.666667 0.666626 3.05448 0.666626 6C0.666626 8.94552 3.05444 11.3333 6 11.3333C8.94543 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94543 0.666667 6 0.666667ZM1058 5L6 5V7L1058 7V5Z" fill="black" />
          </svg>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Contact Us
            </h1>
            <p>For questions about our AI tutor, <a className="underline" href="https://discord.gg/bloombotai" target="_blank" rel="noreferrer">join the Bloom Discord</a>.</p>
            <p>For company alpha, <a className="underline" href="https://discord.gg/plasticlabs" target="_blank" rel="noreferrer">join the Plastic Discord</a>.</p>
            <p>For all other inquiries, email us at <a className="underline" href="mailto:hello@plasticlabs.ai" target="_blank" rel="noreferrer">hello@plasticlabs.ai</a></p>
          </div>
        </div>

      </section >
      <section className="w-full h-[74px] bg-[#161616] flex flex-row items-center">
        <p className="w-[389px] ml-2 font-semibold text-white text-[16px] tracking-[0] leading-[normal]">
          Made by Plastic Labs using Quartz, © 2023
        </p>
      </section>
    </div >
  );
};

