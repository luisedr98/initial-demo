import { MainLayout } from "@/components/layouts/MainLayout";
import Link from "next/link";
import React from "react";

const princingPage = () => {
  return (
    <MainLayout title="pricing">
      <Link href="/">Ir al inicio</Link>
    </MainLayout>
  );
};

export default princingPage;
