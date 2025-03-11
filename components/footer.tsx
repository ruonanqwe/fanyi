import Link from "next/link"
import { Mountain } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold text-xl">多语言视频AI</span>
          </Link>
          <p className="text-sm text-muted-foreground">一站式视频翻译与配音平台，助力内容全球化</p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">产品</h3>
          <nav className="grid gap-2">
            <Link href="/features" className="text-sm hover:underline">
              功能介绍
            </Link>
            <Link href="/pricing" className="text-sm hover:underline">
              价格方案
            </Link>
            <Link href="/enterprise" className="text-sm hover:underline">
              企业方案
            </Link>
            <Link href="/case-studies" className="text-sm hover:underline">
              客户案例
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">资源</h3>
          <nav className="grid gap-2">
            <Link href="/docs" className="text-sm hover:underline">
              开发文档
            </Link>
            <Link href="/api" className="text-sm hover:underline">
              API参考
            </Link>
            <Link href="/blog" className="text-sm hover:underline">
              博客
            </Link>
            <Link href="/faq" className="text-sm hover:underline">
              常见问题
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">公司</h3>
          <nav className="grid gap-2">
            <Link href="/about" className="text-sm hover:underline">
              关于我们
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              联系我们
            </Link>
            <Link href="/careers" className="text-sm hover:underline">
              加入我们
            </Link>
            <Link href="/partners" className="text-sm hover:underline">
              合作伙伴
            </Link>
          </nav>
        </div>
      </div>
      <div className="container mt-8 border-t pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 多语言视频AI平台. 保留所有权利.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-xs text-muted-foreground hover:underline">
              服务条款
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:underline">
              隐私政策
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:underline">
              Cookie政策
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

