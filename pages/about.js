import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { MainLayout } from "@/components/layouts/MainLayout";
import Link from "next/link";

export default function AboutComponent() {
  return (
    <MainLayout title={"about"}>
      <Link href="/">Ir al inicio</Link>
    </MainLayout>
  );
}
