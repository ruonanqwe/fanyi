import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PricingTable from "@/components/pricing-table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">透明定价，灵活选择</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                选择最适合您需求的套餐，无隐藏费用，随时可以升级或降级
              </p>
            </div>
          </div>

          <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">按月计费</TabsTrigger>
                <TabsTrigger value="annual">按年计费 (节省20%)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <PricingTable />
            </TabsContent>

            <TabsContent value="annual">
              <div className="grid gap-8 md:grid-cols-3">
                <PricingCard
                  title="基础版"
                  description="适合个人和小型项目"
                  price="¥499"
                  period="每月"
                  billing="年付 (¥5,988/年)"
                  discount="比月付节省 ¥1,200"
                  features={[
                    "语音识别 (ASR)",
                    "基础翻译",
                    "标准TTS语音",
                    "SRT/VTT字幕导出",
                    "720p视频输出",
                    "每月750分钟配额",
                    "基础邮件支持",
                  ]}
                  action="开始使用"
                  popular={false}
                />

                <PricingCard
                  title="专业版"
                  description="适合企业和内容创作者"
                  price="¥1,599"
                  period="每月"
                  billing="年付 (¥19,188/年)"
                  discount="比月付节省 ¥3,840"
                  features={[
                    "高级ASR带噪音过滤",
                    "DeepL高级翻译",
                    "情感TTS语音",
                    "口型同步技术",
                    "1080p视频输出",
                    "自定义术语支持",
                    "优先处理",
                    "每月2,500分钟配额",
                    "优先技术支持",
                  ]}
                  action="开始使用"
                  popular={true}
                />

                <PricingCard
                  title="企业版"
                  description="适合大型组织和高容量需求"
                  price="¥4,999"
                  period="每月"
                  billing="年付 (¥59,988/年)"
                  discount="比月付节省 ¥12,000"
                  features={[
                    "包含所有专业版功能",
                    "RESTful API访问",
                    "Webhook回调通知",
                    "批量处理",
                    "4K视频支持",
                    "专属客户经理",
                    "SLA保障",
                    "定制集成支持",
                    "每月10,000分钟配额",
                    "7x24小时技术支持",
                  ]}
                  action="联系销售"
                  popular={false}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pay As You Go Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">按需付费选项</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                无需订阅，根据实际使用量付费，适合临时或不定期需求
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>标准按量付费</CardTitle>
                <CardDescription>适合临时或小规模使用</CardDescription>
                <div className="mt-4 text-4xl font-bold">
                  ¥1.2<span className="text-sm font-normal text-muted-foreground">/分钟</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>标准ASR和翻译功能</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>基础TTS语音</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>720p视频输出</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>无最低消费要求</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>预付充值，用完为止</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">充值购买</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>高级按量付费</CardTitle>
                <CardDescription>适合需要高质量输出的项目</CardDescription>
                <div className="mt-4 text-4xl font-bold">
                  ¥2.5<span className="text-sm font-normal text-muted-foreground">/分钟</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>高级ASR和DeepL翻译</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>情感TTS语音</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>1080p视频输出</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>口型同步技术</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>预付充值，用完为止</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">充值购买</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">套餐详细对比</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                详细了解各套餐之间的功能差异，选择最适合您需求的方案
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">功能</th>
                  <th className="p-4 text-center">基础版</th>
                  <th className="p-4 text-center bg-primary/5">专业版</th>
                  <th className="p-4 text-center">企业版</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">每月配额</td>
                  <td className="p-4 text-center">750分钟</td>
                  <td className="p-4 text-center bg-primary/5">2,500分钟</td>
                  <td className="p-4 text-center">10,000分钟</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">语音识别质量</td>
                  <td className="p-4 text-center">标准</td>
                  <td className="p-4 text-center bg-primary/5">高级 (带噪音过滤)</td>
                  <td className="p-4 text-center">高级 (带噪音过滤)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">翻译引擎</td>
                  <td className="p-4 text-center">基础 (Google)</td>
                  <td className="p-4 text-center bg-primary/5">高级 (DeepL + Google)</td>
                  <td className="p-4 text-center">高级 (DeepL + Google)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">TTS语音质量</td>
                  <td className="p-4 text-center">标准</td>
                  <td className="p-4 text-center bg-primary/5">情感语音</td>
                  <td className="p-4 text-center">情感语音 + 自然语音</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">视频输出质量</td>
                  <td className="p-4 text-center">720p</td>
                  <td className="p-4 text-center bg-primary/5">1080p</td>
                  <td className="p-4 text-center">4K</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">口型同步</td>
                  <td className="p-4 text-center">
                    <X className="h-4 w-4 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 text-center bg-primary/5">
                    <Check className="h-4 w-4 mx-auto text-green-500" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-4 w-4 mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">自定义术语</td>
                  <td className="p-4 text-center">
                    <X className="h-4 w-4 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 text-center bg-primary/5">
                    <Check className="h-4 w-4 mx-auto text-green-500" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-4 w-4 mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">API访问</td>
                  <td className="p-4 text-center">
                    <X className="h-4 w-4 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 text-center bg-primary/5">基础API</td>
                  <td className="p-4 text-center">完整API + Webhook</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">批量处理</td>
                  <td className="p-4 text-center">
                    <X className="h-4 w-4 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 text-center bg-primary/5">最多10个视频</td>
                  <td className="p-4 text-center">无限制</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">技术支持</td>
                  <td className="p-4 text-center">邮件支持</td>
                  <td className="p-4 text-center bg-primary/5">优先邮件支持</td>
                  <td className="p-4 text-center">专属客户经理 + 7x24小时支持</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">SLA保障</td>
                  <td className="p-4 text-center">
                    <X className="h-4 w-4 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 text-center bg-primary/5">
                    <X className="h-4 w-4 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-4 w-4 mx-auto text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">常见问题</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                关于我们的价格和套餐的常见问题解答
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>如何计算视频处理时长？</AccordionTrigger>
                <AccordionContent>
                  我们按照原始视频的时长计费，而不是处理后的输出视频时长。例如，一个5分钟的视频将消耗您账户中的5分钟配额，无论最终输出的视频长度如何。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>如果我超出了月度配额怎么办？</AccordionTrigger>
                <AccordionContent>
                  当您超出月度配额时，系统会自动按照您当前套餐的超额费率计费。基础版为¥1.0/分钟，专业版为¥0.8/分钟，企业版为¥0.5/分钟。您也可以随时升级到更高级别的套餐以获得更多配额。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>我可以随时更改我的订阅计划吗？</AccordionTrigger>
                <AccordionContent>
                  是的，您可以随时升级您的订阅计划，升级后将立即生效，并按比例计算费用。如果您需要降级，变更将在当前计费周期结束后生效。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>是否支持退款？</AccordionTrigger>
                <AccordionContent>
                  对于月度订阅，我们不提供部分退款。对于年度订阅，如果您在购买后30天内取消，我们将按比例退还未使用的部分，扣除已使用的服务费用。按量付费的充值金额一旦使用，不予退还。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>有免费试用吗？</AccordionTrigger>
                <AccordionContent>
                  是的，所有新注册用户都可以获得10分钟的免费试用额度，无需信用卡。这足以让您体验我们平台的核心功能并测试翻译质量。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>支持哪些付款方式？</AccordionTrigger>
                <AccordionContent>
                  我们支持多种付款方式，包括信用卡（Visa、MasterCard、American
                  Express）、支付宝、微信支付、PayPal以及对于企业客户的银行转账。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">需要定制方案？</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                如果您有特殊需求或大规模使用计划，我们的团队可以为您提供定制解决方案
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  联系销售团队
                </Button>
              </Link>
              <Link href="/enterprise">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  了解企业方案
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

interface PricingCardProps {
  title: string
  description: string
  price: string
  period: string
  billing: string
  discount: string
  features: string[]
  action: string
  popular?: boolean
}

function PricingCard({
  title,
  description,
  price,
  period,
  billing,
  discount,
  features,
  action,
  popular = false,
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col ${popular ? "border-primary" : ""}`}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          {popular && (
            <div className="px-2.5 py-0.5 text-xs font-semibold bg-primary text-white rounded-full">热门选择</div>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 text-4xl font-bold">
          {price}
          <span className="text-sm font-normal text-muted-foreground">/{period}</span>
        </div>
        <div className="text-sm text-muted-foreground">{billing}</div>
        <div className="text-sm text-green-600 font-medium">{discount}</div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          {action}
        </Button>
      </CardFooter>
    </Card>
  )
}

