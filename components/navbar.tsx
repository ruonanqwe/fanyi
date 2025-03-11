"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mountain, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold text-xl">多语言视频AI</span>
          </Link>
        </div>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-sm font-medium hover:text-primary">
            功能介绍
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary">
            价格方案
          </Link>
          <Link href="/enterprise" className="text-sm font-medium hover:text-primary">
            企业方案
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-primary">
            开发文档
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              登录
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">注册</Button>
          </Link>
        </div>

        {/* 移动端菜单按钮 */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 grid gap-4">
            <Link
              href="/features"
              className="flex items-center py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              功能介绍
            </Link>
            <Link
              href="/pricing"
              className="flex items-center py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              价格方案
            </Link>
            <Link
              href="/enterprise"
              className="flex items-center py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              企业方案
            </Link>
            <Link
              href="/docs"
              className="flex items-center py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              开发文档
            </Link>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  登录
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">注册</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

