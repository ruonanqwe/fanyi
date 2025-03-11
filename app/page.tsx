"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Globe, Mic, Video, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  const [email, setEmail] = useState("")

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  多语言视频翻译与配音平台
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  一键将您的视频翻译成多种语言，自动生成专业配音和字幕，助力内容全球化
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="px-8">
                    免费试用
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline" className="px-8">
                    查看演示
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>无需信用卡</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>免费10分钟试用</span>
                </div>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <div className="relative overflow-hidden rounded-xl border bg-background p-2 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=2070&auto=format&fit=crop"
                  width={800}
                  height={500}
                  alt="视频翻译平台界面"
                  className="rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20 rounded-md"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/90 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                          <Globe className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">视频翻译中</div>
                          <div className="text-xs text-muted-foreground">中文 → 英语</div>
                        </div>
                      </div>
                      <div className="text-sm font-medium">78%</div>
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[78%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                核心功能
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">一站式视频全球化解决方案</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                我们的平台集成了最先进的AI技术，让您的视频内容轻松触达全球受众
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <Mic className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">智能语音识别</h3>
                <p className="text-muted-foreground mt-2">
                  针对多种语言和方言优化的ASR技术，支持背景噪音过滤和精确时间轴对齐
                </p>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">神经机器翻译</h3>
                <p className="text-muted-foreground mt-2">DeepL + Google翻译混合方案，支持自定义术语库和行业专业词汇</p>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <Video className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">AI语音合成</h3>
                <p className="text-muted-foreground mt-2">自然拟人语音，支持情感表达，动态调整语速匹配原视频时长</p>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                行业解决方案
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">为各行业量身定制</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                我们的平台为不同行业提供专业的视频翻译解决方案
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">跨境电商</h3>
              <p className="text-muted-foreground">一键生成TikTok多国语言带货视频，提升国际市场转化率</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">知识付费</h3>
              <p className="text-muted-foreground">课程自动本地化，支持PPT+语音同步翻译，拓展全球学员</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">影视出海</h3>
              <p className="text-muted-foreground">保留背景音效仅替换人声，专业级配音效果助力内容出海</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">立即开始您的视频全球化之旅</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                注册账号，获得免费10分钟试用额度，体验AI视频翻译的魅力
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="输入您的邮箱"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Link href={`/register?email=${encodeURIComponent(email)}`}>
                  <Button type="submit">立即注册</Button>
                </Link>
              </form>
              <p className="text-xs text-muted-foreground">
                注册即表示您同意我们的{" "}
                <Link href="/terms" className="underline underline-offset-2">
                  服务条款
                </Link>{" "}
                和{" "}
                <Link href="/privacy" className="underline underline-offset-2">
                  隐私政策
                </Link>
                。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

