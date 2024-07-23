"use client";
import { Dialog } from "@/Components/ui/dialog";
import { Navbar } from "@/Components/Navbar";
import Image from "next/image";
import { Container } from "@/Components/Container";

export default function Home() {
  return (
    <div className="w-[1186px] justify-center items-center container mx-auto">
      <Navbar></Navbar>
      <Container></Container>
    </div>
  );
}
