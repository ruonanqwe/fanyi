import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Navbar from "@/components/zh/navbar"
import Footer from "@/components/zh/footer"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">页面未找到</h2>
          <p className="text-muted-foreground">抱歉，您访问的页面不存在或已被移除。</p>
          <Link href="/">
            <Button>
              <Home className="mr-2 h-4 w-4" />
              返回首页
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
} 