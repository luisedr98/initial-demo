import { FC } from "react";
import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";

export default function AboutComponent() {
  return (
    <MainLayout title={"about"}>
      <Link href="/">Ir al inicio</Link>
    </MainLayout>
  );
}
