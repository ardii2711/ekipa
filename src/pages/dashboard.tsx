// src/pages/dashboard.tsx
import { Link } from "react-router-dom";
import React from "react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/common/layout";

const DashboardPage: React.FC = () => {
  const dummyUser = {
    fullName: "Nama Pegawai Demo",
    role: "User",
  };

  return (
    <Layout>
      {" "}
      <div className="min-h-[calc(100vh-4rem-6rem)] flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-4">
        {" "}
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold mb-4 text-purple-700">Dashboard eKITA</h1>
          <p className="text-lg text-center text-gray-700 mb-8">
            Selamat datang, <span className="font-semibold text-purple-800">{dummyUser.fullName}</span>!
            <br />
            Anda login sebagai: <span className="font-medium capitalize text-purple-600">{dummyUser.role}</span>
          </p>
          <p className="text-md text-gray-600 mb-10">Ini adalah halaman dashboard Anda. Di sini akan ditampilkan ringkasan kinerja dan navigasi utama.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link to="/user/my-work-plans">
              {" "}
              <Button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white shadow-lg">Lihat Rencana Kerja</Button>
            </Link>
            <Link to="/profile/me">
              {" "}
              <Button variant="outline" className="px-6 py-3 border-purple-600 text-purple-600 hover:bg-purple-50">
                Lihat Profil
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link to="/auth/login" className="text-gray-500 hover:underline text-sm">
              (Logout Demo)
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
