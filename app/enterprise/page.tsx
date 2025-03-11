import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Building, Users, Shield, Zap, Globe, FileText, BarChart, Server, Headphones } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EnterprisePage() {
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
                  企业级视频翻译解决方案
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  为大型组织和高需求客户提供定制化、可扩展的多语言视频处理方案
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact-form">
                  <Button size="lg" className="px-8">
                    联系销售团队
                  </Button>
                </Link>
                <Link href="#case-studies">
                  <Button size="lg" variant="outline" className="px-8">
                    查看客户案例
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>专属客户经理</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>SLA保障</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>定制开发</span>
                </div>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                width={800}
                height={500}
                alt="企业解决方案"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">企业级功能</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                专为企业级需求设计的高级功能和服务
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <EnterpriseFeatureCard
              icon={<Building className="h-10 w-10 text-primary" />}
              title="私有部署"
              description="可在您的私有云或本地数据中心部署，满足数据安全和合规需求"
            />
            <EnterpriseFeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="多团队管理"
              description="支持多团队、多项目管理，灵活的权限控制和工作流程"
            />
            <EnterpriseFeatureCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="企业级安全"
              description="SOC 2合规，端到端加密，IP访问控制，审计日志等安全功能"
            />
            <EnterpriseFeatureCard
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="高性能处理"
              description="专用资源池，优先处理队列，支持大规模并行处理"
            />
            <EnterpriseFeatureCard
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="全球加速"
              description="全球CDN分发，多区域部署，确保全球各地快速访问"
            />
            <EnterpriseFeatureCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="定制开发"
              description="根据您的特定需求定制功能和集成，专属开发支持"
            />
            <EnterpriseFeatureCard
              icon={<BarChart className="h-10 w-10 text-primary" />}
              title="高级分析"
              description="详细的使用分析，成本追踪，ROI报告和业务洞察"
            />
            <EnterpriseFeatureCard
              icon={<Server className="h-10 w-10 text-primary" />}
              title="企业级API"
              description="高吞吐量API，批量处理，自动化工作流，完整SDK支持"
            />
            <EnterpriseFeatureCard
              icon={<Headphones className="h-10 w-10 text-primary" />}
              title="专属支持"
              description="专属客户经理，7x24技术支持，定期业务回顾会议"
            />
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">行业解决方案</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                针对不同行业的特定需求，我们提供定制化解决方案
              </p>
            </div>
          </div>

          <Tabs defaultValue="media" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="media">媒体与娱乐</TabsTrigger>
              <TabsTrigger value="education">教育培训</TabsTrigger>
              <TabsTrigger value="ecommerce">跨境电商</TabsTrigger>
              <TabsTrigger value="corporate">企业传播</TabsTrigger>
            </TabsList>
            <TabsContent value="media" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">媒体与娱乐行业解决方案</h3>
                  <p className="text-muted-foreground mb-4">
                    帮助影视制作公司、流媒体平台和内容创作者快速将内容翻译成多种语言，加速全球发行。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>高质量配音与口型同步</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>保留原始音效与背景音乐</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>多种字幕格式支持</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>与主流媒体平台集成</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>批量处理大型内容库</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1578022761797-b8636ac1773c?q=80&w=2071&auto=format&fit=crop"
                    width={500}
                    height={300}
                    alt="媒体与娱乐行业解决方案"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">教育培训行业解决方案</h3>
                  <p className="text-muted-foreground mb-4">
                    帮助教育机构和在线学习平台将课程内容翻译成多种语言，拓展全球学员。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>专业术语库支持</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>PPT与视频同步翻译</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>与LMS系统集成</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>交互式练习翻译</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>多语言学习路径</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=2070&auto=format&fit=crop"
                    width={500}
                    height={300}
                    alt="教育培训行业解决方案"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ecommerce" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">跨境电商行业解决方案</h3>
                  <p className="text-muted-foreground mb-4">
                    帮助电商平台和卖家将产品视频翻译成多种语言，提高国际市场转化率。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>产品术语一致性</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>多平台格式适配</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>批量处理产品视频</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>与电商平台API集成</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>本地化营销文案</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
                    width={500}
                    height={300}
                    alt="跨境电商行业解决方案"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="corporate" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">企业传播行业解决方案</h3>
                  <p className="text-muted-foreground mb-4">
                    帮助跨国企业将内部培训、营销和企业宣传视频翻译成多种语言，支持全球业务。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>企业术语库管理</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>品牌语音定制</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>安全合规保障</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>与企业LMS集成</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>多区域内容管理</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2069&auto=format&fit=crop"
                    width={500}
                    height={300}
                    alt="企业传播行业解决方案"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">客户案例</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                了解我们如何帮助企业客户解决视频翻译挑战
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <CaseStudyCard
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              title="全球教育科技公司"
              description="帮助一家领先的教育科技公司将10,000+小时的课程视频翻译成15种语言，支持全球扩张"
              result="学员覆盖增加300%，翻译成本降低60%"
            />
            <CaseStudyCard
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
              title="跨国电商平台"
              description="为跨境电商平台提供自动化视频翻译解决方案，每月处理5,000+产品视频"
              result="国际市场转化率提升35%，内容制作时间缩短80%"
            />
            <CaseStudyCard
              image="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2106&auto=format&fit=crop"
              title="全球媒体集团"
              description="为全球媒体集团提供内容本地化解决方案，支持50+国家的内容发行"
              result="内容本地化速度提升10倍，本地化成本降低70%"
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="px-8">
                查看更多案例
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">联系我们</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  填写下方表单，我们的企业解决方案专家将与您联系，为您提供定制化方案
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">为什么选择我们的企业方案？</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>专属客户经理和技术支持团队</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>根据您的需求定制解决方案</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>灵活的部署选项，包括私有云和本地部署</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>企业级安全和合规保障</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>与您现有系统的无缝集成</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>可扩展的解决方案，满足不断增长的需求</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          姓名
                        </label>
                        <Input id="first-name" placeholder="您的姓名" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          公司
                        </label>
                        <Input id="company" placeholder="公司名称" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          邮箱
                        </label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          电话
                        </label>
                        <Input id="phone" placeholder="联系电话" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="job-title" className="text-sm font-medium">
                        职位
                      </label>
                      <Input id="job-title" placeholder="您的职位" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="requirements" className="text-sm font-medium">
                        需求描述
                      </label>
                      <Textarea id="requirements" placeholder="请描述您的需求和使用场景" rows={4} />
                    </div>
                    <Button type="submit" className="w-full">
                      提交需求
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      提交即表示您同意我们的
                      <Link href="/privacy" className="text-primary hover:underline mx-1">
                        隐私政策
                      </Link>
                      和
                      <Link href="/terms" className="text-primary hover:underline mx-1">
                        服务条款
                      </Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface EnterpriseFeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function EnterpriseFeatureCard({ icon, title, description }: EnterpriseFeatureCardProps) {
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

interface CaseStudyCardProps {
  image: string
  title: string
  description: string
  result: string
}

function CaseStudyCard({ image, title, description, result }: CaseStudyCardProps) {
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
        <div className="bg-primary/10 p-3 rounded-lg">
          <p className="font-medium text-sm">成果：{result}</p>
        </div>
      </CardContent>
    </Card>
  )
}

