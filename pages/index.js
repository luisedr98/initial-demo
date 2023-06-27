import { MainLayout } from "@/components/layouts/MainLayout";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout title="index">
      <Link href="/about">Ir a about</Link>
    </MainLayout>
  );
}
