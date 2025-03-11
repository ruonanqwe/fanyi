"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Upload,
  FolderOpen,
  Settings,
  CreditCard,
  Users,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function DashboardNav() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn("border-r bg-background h-full transition-all duration-300", collapsed ? "w-16" : "w-64")}>
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 gap-1">
            <NavItem
              href="/dashboard"
              icon={<LayoutDashboard className="h-5 w-5" />}
              label="控制台"
              collapsed={collapsed}
              active
            />
            <NavItem
              href="/dashboard/upload"
              icon={<Upload className="h-5 w-5" />}
              label="上传视频"
              collapsed={collapsed}
            />
            <NavItem
              href="/dashboard/projects"
              icon={<FolderOpen className="h-5 w-5" />}
              label="我的项目"
              collapsed={collapsed}
            />
            <NavItem
              href="/dashboard/team"
              icon={<Users className="h-5 w-5" />}
              label="团队管理"
              collapsed={collapsed}
            />
            <NavItem
              href="/dashboard/billing"
              icon={<CreditCard className="h-5 w-5" />}
              label="账单与订阅"
              collapsed={collapsed}
            />
            <NavItem
              href="/dashboard/settings"
              icon={<Settings className="h-5 w-5" />}
              label="账户设置"
              collapsed={collapsed}
            />
            <NavItem
              href="/dashboard/help"
              icon={<HelpCircle className="h-5 w-5" />}
              label="帮助中心"
              collapsed={collapsed}
            />
          </nav>
        </div>
        <div className="p-2 border-t">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex justify-center"
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  collapsed: boolean
  active?: boolean
}

function NavItem({ href, icon, label, collapsed, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
        active ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground",
        collapsed && "justify-center px-2",
      )}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </Link>
  )
}

