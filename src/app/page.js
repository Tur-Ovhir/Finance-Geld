"use client";
import { Dialog } from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <div className="w-[1186px] justify-center items-center container mx-auto">
      <Navbar></Navbar>
      <Container></Container>
    </div>
  );
}
