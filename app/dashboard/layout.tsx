"use client";
import { useState } from "react";
import {
  HomeIcon,
  SchoolIcon,
  NotebookPenIcon,
  HistoryIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/Header";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();
  const tabs = [
    { name: "Main",
      href: "/dashboard/main", 
      icon: <HomeIcon />,
      isActive: router === "/dashboard/main",
    },
    {
      name: "Register for Exam",
      href: "/dashboard/register/exam",
      icon: <SchoolIcon />,
      isActive: router === "/dashboard/register/exam",
    },
    {
      name: "Register for Training",
      href: "/dashboard/register/training",
      icon: <NotebookPenIcon />,
      isActive: router === "/dashboard/register/training",
    },
    { name: "History", 
      href: "/dashboard/history", 
      icon: <HistoryIcon />,
      isActive: router === "/dashboard/history",
    },
    { name: "Practice", 
      href: "/dashboard/practice", 
      icon: <SchoolIcon />,
      isActive: router === "/dashboard/practice",
    },
  ];
  return (
    <div className="flex min-h-screen">
      <div className="w-80 bg-slate-800 p-4 hidden lg:block">
        <div className="flex items-center justify-center my-5">
          <HomeIcon className="h-16 w-16 text-white" />
        </div>
        {tabs.map((tab) => (
          <Link key={tab.name} href={tab.href} className={`${
            tab.isActive ? "bg-teal-600" : ""
          } flex items-center justify-start gap-2 rounded-md p-2 text-sm font-medium text-white transition hover:bg-teal-600 my-3`}>
            {tab.icon}
            {tab.name}
            {""}
          </Link>
        ))}
      </div>
      <div className=" bg-gray-50 text-black w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
