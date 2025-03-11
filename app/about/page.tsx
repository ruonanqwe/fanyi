import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, CheckCircle, Users, Award, Globe, Lightbulb, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">关于我们</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  我们致力于打破语言障碍，让全球内容创作者能够轻松触达全球受众
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#our-story">
                  <Button variant="outline" className="px-4">
                    了解我们的故事
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="px-4">
                    联系我们
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                width={800}
                height={500}
                alt="我们的团队"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">我们的故事</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                从一个简单的想法到改变全球内容创作的平台
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">创立初心</h3>
                <p className="text-muted-foreground">
                  多语言视频AI平台诞生于2020年，由一群热爱技术和语言的创业者创立。我们注意到，随着全球化的加速，内容创作者面临着将其内容翻译成多种语言的巨大挑战。传统的翻译和配音方法既昂贵又耗时，这使得许多优质内容无法触达全球受众。
                </p>
                <p className="text-muted-foreground">
                  我们的创始团队决定利用最先进的AI技术来解决这一问题，创建一个平台，让任何人都能轻松将视频翻译成多种语言，并生成自然的配音和字幕。
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-bold">发展历程</h3>
                <p className="text-muted-foreground">
                  从最初的概念验证到今天的全功能平台，我们经历了不断的迭代和改进。我们与数百名内容创作者合作，收集反馈，优化我们的技术，使其更加准确、自然和易用。
                </p>
                <p className="text-muted-foreground">
                  2021年，我们获得了首轮风险投资，这使我们能够扩大团队，提升技术能力。2022年，我们推出了企业版解决方案，为大型组织提供定制化的视频翻译服务。如今，我们的平台每月处理超过10,000小时的视频内容，服务于全球数千名内容创作者和企业客户。
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                width={600}
                height={800}
                alt="我们的历程"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Target className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold">我们的使命</h3>
                  <p className="text-muted-foreground">
                    我们的使命是打破语言障碍，让全球内容创作者能够轻松触达全球受众，促进跨文化交流和理解。我们相信，通过使优质内容更容易被翻译和本地化，我们可以帮助创作者扩大其影响力，同时丰富全球观众的内容体验。
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Lightbulb className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold">我们的愿景</h3>
                  <p className="text-muted-foreground">
                    我们的愿景是成为全球领先的视频翻译和本地化平台，使任何人都能轻松创建多语言内容。我们期望在未来五年内，支持100种语言，服务全球100万内容创作者，并通过不断创新和改进我们的技术，使翻译的质量达到接近人工翻译的水平。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">核心价值观</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                指导我们决策和行动的原则
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Globe className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">全球视野</h3>
                  <p className="text-muted-foreground">
                    我们相信内容无国界，致力于帮助创作者将其内容传播到全球各地，促进跨文化交流和理解。
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Award className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">卓越品质</h3>
                  <p className="text-muted-foreground">
                    我们追求卓越，不断改进我们的技术和服务，确保为用户提供最高质量的翻译和配音体验。
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Heart className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">用户至上</h3>
                  <p className="text-muted-foreground">
                    我们以用户为中心，倾听用户反馈，不断优化产品体验，满足用户不断变化的需求。
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <CheckCircle className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">诚信透明</h3>
                  <p className="text-muted-foreground">
                    我们在所有业务活动中保持诚信和透明，建立用户信任，保护用户数据和隐私。
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">团队协作</h3>
                  <p className="text-muted-foreground">
                    我们相信团队的力量，鼓励开放沟通、相互尊重和协作，共同实现我们的使命和愿景。
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Lightbulb className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">创新精神</h3>
                  <p className="text-muted-foreground">
                    我们拥抱变化，鼓励创新思维，不断探索新技术和解决方案，推动行业发展。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">领导团队</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                引领我们前进的核心团队
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
              name="张明"
              title="创始人兼首席执行官"
              bio="张明拥有10年的AI和机器学习经验，曾在多家科技巨头担任技术领导职位。他创立多语言视频AI平台的愿景是让全球内容创作者能够轻松触达全球受众。"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
              name="李娜"
              title="首席技术官"
              bio="李娜是自然语言处理和语音合成领域的专家，拥有计算机科学博士学位。她领导我们的技术团队，不断提升我们的AI翻译和配音技术。"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
              name="王强"
              title="首席产品官"
              bio="王强拥有丰富的产品管理经验，专注于创建直观、易用的用户体验。他密切关注用户反馈，不断优化我们的产品，满足用户需求。"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2522&auto=format&fit=crop"
              name="陈静"
              title="首席运营官"
              bio="陈静负责公司的日常运营和业务发展。她拥有丰富的管理经验，确保我们的团队高效运作，为用户提供卓越的服务。"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
              name="刘伟"
              title="首席市场官"
              bio="刘伟负责公司的市场策略和品牌建设。他拥有丰富的市场营销经验，帮助我们的平台触达更多内容创作者和企业客户。"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop"
              name="赵琳"
              title="首席财务官"
              bio="赵琳负责公司的财务规划和管理。她拥有丰富的财务经验，确保公司的财务健康和可持续发展。"
            />
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">我们的投资者</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                支持我们愿景的合作伙伴
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-156369498302-6f4d90358083?q=80&w=2574&auto=format&fit=crop"
                width={120}
                height={60}
                alt="投资者标志"
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                width={120}
                height={60}
                alt="投资者标志"
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2574&auto=format&fit=crop"
                width={120}
                height={60}
                alt="投资者标志"
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop"
                width={120}
                height={60}
                alt="投资者标志"
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2570&auto=format&fit=crop"
                width={120}
                height={60}
                alt="投资者标志"
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2570&auto=format&fit=crop"
                width={120}
                height={60}
                alt="投资者标志"
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">加入我们的旅程</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                无论您是内容创作者、企业客户还是对我们的技术感兴趣的开发者，我们都欢迎您加入我们的社区
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
                  联系我们
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

interface TeamMemberProps {
  image: string
  name: string
  title: string
  bio: string
}

function TeamMember({ image, name, title, bio }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover rounded-full" />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-primary font-medium mb-2">{title}</p>
      <p className="text-muted-foreground text-sm">{bio}</p>
    </div>
  )
}

