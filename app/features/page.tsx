import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mic, Globe, Video, Zap, FileText, Layers, Workflow, Braces } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeatureComparison from "@/components/feature-comparison"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">强大的视频翻译与配音功能</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                探索我们平台的核心功能，了解如何将您的视频内容无缝转换为多种语言
              </p>
            </div>
          </div>

          <Tabs defaultValue="core" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="core">核心功能</TabsTrigger>
              <TabsTrigger value="advanced">高级特性</TabsTrigger>
              <TabsTrigger value="api">API与集成</TabsTrigger>
            </TabsList>
            <TabsContent value="core" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  icon={<Mic className="h-10 w-10 text-primary" />}
                  title="智能语音识别"
                  description="针对多种语言和方言优化的ASR技术，支持背景噪音过滤和精确时间轴对齐"
                />
                <FeatureCard
                  icon={<Globe className="h-10 w-10 text-primary" />}
                  title="神经机器翻译"
                  description="DeepL + Google翻译混合方案，支持自定义术语库和行业专业词汇"
                />
                <FeatureCard
                  icon={<Video className="h-10 w-10 text-primary" />}
                  title="AI语音合成"
                  description="自然拟人语音，支持情感表达，动态调整语速匹配原视频时长"
                />
                <FeatureCard
                  icon={<FileText className="h-10 w-10 text-primary" />}
                  title="字幕生成与嵌入"
                  description="自动生成SRT/VTT格式字幕，支持字幕样式自定义和硬字幕嵌入"
                />
                <FeatureCard
                  icon={<Zap className="h-10 w-10 text-primary" />}
                  title="批量处理"
                  description="同时处理多个视频，自动化工作流程，提高内容本地化效率"
                />
                <FeatureCard
                  icon={<Layers className="h-10 w-10 text-primary" />}
                  title="多格式支持"
                  description="支持MP4、MOV、AVI等多种视频格式，以及多种音频格式输出"
                />
              </div>
            </TabsContent>
            <TabsContent value="advanced" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  icon={<Workflow className="h-10 w-10 text-primary" />}
                  title="口型同步技术"
                  description="AI驱动的口型同步，使配音与视频中人物口型动作自然匹配"
                />
                <FeatureCard
                  icon={<Globe className="h-10 w-10 text-primary" />}
                  title="方言识别与翻译"
                  description="支持识别各种地方方言，并准确翻译为标准语言"
                />
                <FeatureCard
                  icon={<Video className="h-10 w-10 text-primary" />}
                  title="背景音乐保留"
                  description="智能分离人声与背景音乐，仅替换语音部分保留原始音效"
                />
                <FeatureCard
                  icon={<FileText className="h-10 w-10 text-primary" />}
                  title="专业术语定制"
                  description="为特定行业创建专业术语库，确保翻译准确性和一致性"
                />
                <FeatureCard
                  icon={<Zap className="h-10 w-10 text-primary" />}
                  title="实时翻译预览"
                  description="在处理过程中实时预览翻译结果，支持人工干预和调整"
                />
                <FeatureCard
                  icon={<Layers className="h-10 w-10 text-primary" />}
                  title="多人声分离"
                  description="自动识别并分离多个说话者，为每个说话者分配不同的配音"
                />
              </div>
            </TabsContent>
            <TabsContent value="api" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  icon={<Braces className="h-10 w-10 text-primary" />}
                  title="RESTful API"
                  description="完整的API接口，支持所有平台功能的程序化访问和集成"
                />
                <FeatureCard
                  icon={<Zap className="h-10 w-10 text-primary" />}
                  title="Webhook回调"
                  description="任务完成时通过Webhook通知您的系统，实现自动化工作流"
                />
                <FeatureCard
                  icon={<Layers className="h-10 w-10 text-primary" />}
                  title="SDK支持"
                  description="提供多种编程语言的SDK，简化与您现有系统的集成"
                />
                <FeatureCard
                  icon={<FileText className="h-10 w-10 text-primary" />}
                  title="批量处理API"
                  description="通过单个API调用处理多个视频，适用于大规模内容处理"
                />
                <FeatureCard
                  icon={<Globe className="h-10 w-10 text-primary" />}
                  title="自定义工作流"
                  description="通过API创建自定义处理工作流，满足特定业务需求"
                />
                <FeatureCard
                  icon={<Video className="h-10 w-10 text-primary" />}
                  title="第三方集成"
                  description="与常用内容管理系统、视频平台和电商系统的无缝集成"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">工作原理</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                了解我们的平台如何将您的视频转换为多语言内容
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <WorkflowStep
              number="01"
              title="上传视频"
              description="上传您的视频文件到我们的平台，支持多种常见视频格式"
            />
            <WorkflowStep number="02" title="选择语言" description="选择源语言和目标语言，以及配音风格和输出格式" />
            <WorkflowStep number="03" title="AI处理" description="我们的AI引擎自动处理视频，包括语音识别、翻译和配音" />
            <WorkflowStep number="04" title="下载成果" description="处理完成后，下载翻译后的视频、音频或字幕文件" />
          </div>

          <div className="mt-12 text-center">
            <Link href="/register">
              <Button size="lg" className="px-8">
                免费试用
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">应用场景</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                探索我们的平台如何在不同行业和场景中应用
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <UseCaseCard
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2787&auto=format&fit=crop"
              title="跨境电商"
              description="将产品介绍视频翻译成多种语言，提高国际市场转化率"
              link="/use-cases/ecommerce"
            />
            <UseCaseCard
              image="https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=2070&auto=format&fit=crop"
              title="在线教育"
              description="将教学视频本地化，拓展全球学员，提供更好的学习体验"
              link="/use-cases/education"
            />
            <UseCaseCard
              image="https://images.unsplash.com/photo-1585647347384-2593bc35786b?q=80&w=2070&auto=format&fit=crop"
              title="影视内容"
              description="快速将影视作品配音翻译，加速内容出海和国际发行"
              link="/use-cases/entertainment"
            />
            <UseCaseCard
              image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              title="企业培训"
              description="将内部培训视频翻译成多种语言，支持全球团队发展"
              link="/use-cases/corporate"
            />
            <UseCaseCard
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              title="营销宣传"
              description="本地化营销视频，针对不同地区受众定制内容"
              link="/use-cases/marketing"
            />
            <UseCaseCard
              image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop"
              title="社交媒体"
              description="将社交媒体视频内容翻译成多种语言，扩大全球影响力"
              link="/use-cases/social-media"
            />
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">功能对比</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                了解不同套餐之间的功能差异，选择最适合您需求的方案
              </p>
            </div>
          </div>

          <FeatureComparison />

          <div className="mt-12 text-center">
            <Link href="/pricing">
              <Button size="lg" className="px-8">
                查看完整价格方案
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">准备好开始了吗？</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                立即注册账号，获得免费10分钟试用额度，体验AI视频翻译的魅力
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="px-8">
                  免费试用
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  联系销售
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

interface WorkflowStepProps {
  number: string
  title: string
  description: string
}

function WorkflowStep({ number, title, description }: WorkflowStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

interface UseCaseCardProps {
  image: string
  title: string
  description: string
  link: string
}

function UseCaseCard({ image, title, description, link }: UseCaseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link href={link} className="text-primary hover:underline inline-flex items-center">
          了解更多
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

