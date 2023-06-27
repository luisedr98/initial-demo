import { MainLayout } from "@/components/layouts/MainLayout";
import Link from "next/link";
import { DarkLayout } from "@/components/layouts/DarkLayout";

export default function ContactComponent() {
  return (
    <>
      <Link href="/">Ir al inicio</Link>
    </>
  );
}

//* definicion de compomentes anidados

ContactComponent.getLayout = function getLayout(page) {
  return (
    <MainLayout title={"contact"}>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
