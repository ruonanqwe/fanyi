import { Button } from "@/components/ui/button"
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
                  言易致力于打破语言障碍，让全球内容创作者能够轻松触达全球受众
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#our-story">
                  <Button variant="outline" className="px-4">
                    了解我们的故事
                  </Button>
                </Link>
                <Link href="/zh/contact">
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
                  言易平台诞生于2025年2月，由小海团队创立。我们注意到，随着全球化的加速，内容创作者面临着将其内容翻译成多种语言的巨大挑战。传统的翻译和配音方法既昂贵又耗时，这使得许多优质内容无法触达全球受众。
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
                  2025年3月，我们获得了首轮风险投资，这使我们能够扩大团队，提升技术能力。如今，我们的平台每月处理超过10,000小时的视频内容，服务于全球数千名内容创作者和企业客户。
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
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">我们的使命</h3>
                <p className="text-muted-foreground">
                  我们的使命是打破语言障碍，让全球内容创作者能够轻松触达全球受众，促进跨文化交流和理解。我们相信，通过使优质内容更容易被翻译和本地化，我们可以帮助创作者扩大其影响力，同时丰富全球观众的内容体验。
                </p>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <Lightbulb className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">我们的愿景</h3>
                <p className="text-muted-foreground">
                  我们的愿景是成为全球领先的视频翻译和本地化平台，使任何人都能轻松创建多语言内容。我们期望在未来五年内，支持100种语言，服务全球100万内容创作者，并通过不断创新和改进我们的技术，使翻译的质量达到接近人工翻译的水平。
                </p>
              </div>
            </div>
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
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <Globe className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">全球视野</h3>
                <p className="text-muted-foreground">
                  我们相信内容无国界，致力于帮助创作者将其内容传播到全球各地，促进跨文化交流和理解。
                </p>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">卓越品质</h3>
                <p className="text-muted-foreground">
                  我们追求卓越，不断改进我们的技术和服务，确保为用户提供最高质量的翻译和配音体验。
                </p>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">用户至上</h3>
                <p className="text-muted-foreground">
                  我们以用户为中心，倾听用户反馈，不断优化产品体验，满足用户不断变化的需求。
                </p>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">诚信透明</h3>
                <p className="text-muted-foreground">
                  我们在所有业务活动中保持诚信和透明，建立用户信任，保护用户数据和隐私。
                </p>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">团队协作</h3>
                <p className="text-muted-foreground">
                  我们相信团队的力量，鼓励开放沟通、相互尊重和协作，共同实现我们的使命和愿景。
                </p>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <Lightbulb className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">创新精神</h3>
                <p className="text-muted-foreground">
                  我们拥抱变化，鼓励创新思维，不断探索新技术和解决方案，推动行业发展。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

