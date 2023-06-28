import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { ReactNode } from "react";

export default function ContactComponent() {
  return (
    <>
      <Link href="/">Ir al inicio</Link>
    </>
  );
}

//* definicion de compomentes anidados

ContactComponent.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout title={"contact"}>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
