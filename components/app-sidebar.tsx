"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  SchoolIcon,
  NotebookPenIcon,
  HistoryIcon,
  MenuIcon,
} from "lucide-react";
export function AppSidebar() {
  const router = usePathname();
  const tabs = [
    {
      title: "Main",
      url: "/dashboard/main",
      icon: <HomeIcon />,
      isActive: router === "/dashboard/main",
    },
    {
      title: "Register for Exam",
      url: "/dashboard/register/exam",
      icon: <SchoolIcon />,
      isActive: router === "/dashboard/register/exam",
    },
    {
      title: "Register for Training",
      url: "/dashboard/register/training",
      icon: <NotebookPenIcon />,
      isActive: router === "/dashboard/register/training",
    },
    {
      title: "History",
      url: "/dashboard/history",
      icon: <HistoryIcon />,
      isActive: router === "/dashboard/history",
    },
    {
      title: "Practice",
      url: "/dashboard/practice",
      icon: <SchoolIcon />,
      isActive: router === "/dashboard/practice",
    },
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tabs.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-3">
                    <a href={item.url} className={`my-3 ${item.isActive ? "bg-zinc-800 text-white " : ""}`}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
