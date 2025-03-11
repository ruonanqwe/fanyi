import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, FileText, Code, Book, Terminal, Zap, ArrowRight, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">开发者文档</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                全面的API文档和集成指南，帮助您将多语言视频翻译功能集成到您的应用中
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="搜索文档..." className="w-full pl-8" />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DocCard
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="快速开始"
              description="快速了解如何开始使用我们的API和SDK"
              link="/docs/getting-started"
            />
            <DocCard
              icon={<Code className="h-8 w-8 text-primary" />}
              title="API参考"
              description="详细的API端点文档和请求示例"
              link="/docs/api-reference"
            />
            <DocCard
              icon={<Book className="h-8 w-8 text-primary" />}
              title="SDK文档"
              description="各种编程语言的SDK使用指南"
              link="/docs/sdk"
            />
            <DocCard
              icon={<Terminal className="h-8 w-8 text-primary" />}
              title="CLI工具"
              description="命令行工具使用指南和示例"
              link="/docs/cli"
            />
            <DocCard
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="最佳实践"
              description="优化集成和使用的最佳实践指南"
              link="/docs/best-practices"
            />
            <DocCard
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="教程"
              description="详细的教程和使用场景示例"
              link="/docs/tutorials"
            />
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">API概览</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                我们提供RESTful API，支持所有视频翻译和配音功能的程序化访问
              </p>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">概览</TabsTrigger>
              <TabsTrigger value="authentication">认证</TabsTrigger>
              <TabsTrigger value="endpoints">端点</TabsTrigger>
              <TabsTrigger value="examples">示例</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">API基础信息</h3>
                  <p className="text-muted-foreground mb-4">
                    我们的API基于RESTful架构，使用JSON进行数据交换，支持所有视频翻译和配音功能的程序化访问。
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">基础URL</h4>
                      <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                        <code>https://api.multilingual-video.com/v1</code>
                        <Button variant="ghost" size="icon">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">内容类型</h4>
                      <p className="text-sm text-muted-foreground">
                        所有请求和响应均使用JSON格式。请求时需设置以下头部：
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2 flex justify-between items-center">
                        <code>Content-Type: application/json</code>
                        <Button variant="ghost" size="icon">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">速率限制</h4>
                      <p className="text-sm text-muted-foreground">
                        API请求受到速率限制，具体限制取决于您的套餐。限制信息会在响应头中返回：
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                        <li>X-RateLimit-Limit: 每小时最大请求数</li>
                        <li>X-RateLimit-Remaining: 当前周期剩余请求数</li>
                        <li>X-RateLimit-Reset: 速率限制重置时间（Unix时间戳）</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="authentication" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">API认证</h3>
                  <p className="text-muted-foreground mb-4">
                    所有API请求都需要使用API密钥进行认证。您可以在控制台的API设置页面生成和管理API密钥。
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">认证方式</h4>
                      <p className="text-sm text-muted-foreground mb-2">在每个请求的头部中包含您的API密钥：</p>
                      <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                        <code>Authorization: Bearer YOUR_API_KEY</code>
                        <Button variant="ghost" size="icon">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">API密钥安全</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                        <li>请妥善保管您的API密钥，不要在客户端代码中暴露</li>
                        <li>定期轮换API密钥以提高安全性</li>
                        <li>可以为不同的环境（开发、测试、生产）创建不同的API密钥</li>
                        <li>可以为API密钥设置权限范围，限制其访问特定功能</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                      <h4 className="font-bold text-yellow-800 mb-2">安全提示</h4>
                      <p className="text-sm text-yellow-800">
                        永远不要在前端代码或公开的代码库中存储API密钥。始终通过后端服务器进行API调用。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="endpoints" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">API端点</h3>
                  <p className="text-muted-foreground mb-4">以下是主要API端点的概览，完整文档请参考API参考。</p>
                  <div className="space-y-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>视频处理</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-bold mb-2">创建视频处理任务</h4>
                              <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                                <code>POST /videos/process</code>
                                <Button variant="ghost" size="icon">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold mb-2">获取任务状态</h4>
                              <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                                <code>GET /videos/process/{"{jobId}"}</code>
                                <Button variant="ghost" size="icon">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold mb-2">取消处理任务</h4>
                              <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                                <code>DELETE /videos/process/{"{jobId}"}</code>
                                <Button variant="ghost" size="icon">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>语音识别</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-bold mb-2">创建语音识别任务</h4>
                              <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                                <code>POST /speech/recognize</code>
                                <Button variant="ghost" size="icon">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold mb-2">获取识别结果</h4>
                              <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                                <code>GET /speech/recognize/{"{jobId}"}</code>
                                <Button variant="ghost" size="icon">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>翻译</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-bold mb-2">翻译文本</h4>
                              <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                                <code>POST /translate/text</code>
                                <Button variant="ghost" size="icon">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold mb-2">翻译字幕文件</h4>
                              <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                                <code>POST /translate/subtitles</code>
                                <Button variant="ghost" size="icon">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>语音合成</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-bold mb-2">生成语音</h4>
                              <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                                <code>POST /tts/generate</code>
                                <Button variant="ghost" size="icon">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold mb-2">获取可用语音列表</h4>
                              <div className="bg-muted p-3 rounded-md flex justify-between items-center">
                                <code>GET /tts/voices</code>
                                <Button variant="ghost" size="icon">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="examples" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">API使用示例</h3>
                  <p className="text-muted-foreground mb-4">以下是一些常见API使用场景的示例代码。</p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2">创建视频处理任务</h4>
                      <div className="bg-muted p-3 rounded-md overflow-x-auto">
                        <pre className="text-sm">
                          {`// 使用fetch API创建视频处理任务
const createVideoProcessingJob = async () => {
  try {
    const response = await fetch('https://api.multilingual-video.com/v1/videos/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
        videoUrl: 'https://storage.example.com/videos/product-demo.mp4',
        sourceLanguage: 'zh',
        targetLanguage: 'en',
        voiceType: 'natural',
        outputFormat: 'video',
        callbackUrl: 'https://your-app.com/api/video-callback'
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || '处理视频失败');
    }
    
    console.log('任务ID:', data.jobId);
    console.log('预计完成时间:', data.estimatedTime, '分钟');
    
    return data;
  } catch (error) {
    console.error('错误:', error);
    throw error;
  }
};`}
                        </pre>
                      </div>
                      <Button variant="ghost" size="sm" className="mt-2">
                        <Copy className="h-4 w-4 mr-2" />
                        复制代码
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">获取任务状态</h4>
                      <div className="bg-muted p-3 rounded-md overflow-x-auto">
                        <pre className="text-sm">
                          {`// 使用fetch API
fetch('https://api.multilingual-video.com/v1/videos/process/job_123456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => {
  console.log('任务状态:', data.status);
  console.log('进度:', data.progress);
  
  if (data.status === 'completed') {
    console.log('输出URL:', data.result.outputUrl);
  }
})
.catch(error => {
  console.error('错误:', error);
});`}
                        </pre>
                      </div>
                      <Button variant="ghost" size="sm" className="mt-2">
                        <Copy className="h-4 w-4 mr-2" />
                        复制代码
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* SDK Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">SDK和客户端库</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                我们提供多种编程语言的SDK，简化API集成过程
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SdkCard
              language="JavaScript"
              description="适用于Node.js和浏览器环境的JavaScript SDK"
              installCommand="npm install multilingual-video-sdk"
              docsLink="/docs/sdk/javascript"
            />
            <SdkCard
              language="Python"
              description="适用于Python 3.6+的SDK，支持同步和异步调用"
              installCommand="pip install multilingual-video-sdk"
              docsLink="/docs/sdk/python"
            />
            <SdkCard
              language="Java"
              description="适用于Java 8+的SDK，支持Android开发"
              installCommand="maven: com.multilingual-video:sdk:1.0.0"
              docsLink="/docs/sdk/java"
            />
            <SdkCard
              language="PHP"
              description="适用于PHP 7.4+的SDK，支持Laravel集成"
              installCommand="composer require multilingual-video/sdk"
              docsLink="/docs/sdk/php"
            />
            <SdkCard
              language="Go"
              description="适用于Go 1.13+的SDK，支持并发处理"
              installCommand="go get github.com/multilingual-video/sdk"
              docsLink="/docs/sdk/go"
            />
            <SdkCard
              language="Ruby"
              description="适用于Ruby 2.6+的SDK，支持Rails集成"
              installCommand="gem install multilingual_video_sdk"
              docsLink="/docs/sdk/ruby"
            />
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">教程和指南</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                学习如何使用我们的API和SDK实现各种功能
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TutorialCard
              title="快速入门：处理第一个视频"
              description="学习如何使用API处理您的第一个视频，包括上传、翻译和下载"
              difficulty="初级"
              time="15分钟"
              link="/docs/tutorials/first-video"
            />
            <TutorialCard
              title="批量处理视频"
              description="学习如何使用API批量处理多个视频，提高效率"
              difficulty="中级"
              time="25分钟"
              link="/docs/tutorials/batch-processing"
            />
            <TutorialCard
              title="自定义术语库"
              description="学习如何创建和使用自定义术语库，提高翻译质量"
              difficulty="中级"
              time="20分钟"
              link="/docs/tutorials/custom-glossary"
            />
            <TutorialCard
              title="与CMS集成"
              description="学习如何将视频翻译功能集成到内容管理系统中"
              difficulty="高级"
              time="40分钟"
              link="/docs/tutorials/cms-integration"
            />
            <TutorialCard
              title="实时翻译预览"
              description="学习如何实现实时翻译预览功能，提升用户体验"
              difficulty="高级"
              time="35分钟"
              link="/docs/tutorials/real-time-preview"
            />
            <TutorialCard
              title="Webhook回调处理"
              description="学习如何设置和处理Webhook回调，实现自动化工作流"
              difficulty="中级"
              time="30分钟"
              link="/docs/tutorials/webhook-handling"
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/docs/tutorials">
              <Button variant="outline" size="lg" className="px-8">
                查看更多教程
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">准备好开始集成了吗？</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                注册账号，获取API密钥，开始将多语言视频翻译功能集成到您的应用中
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="px-8">
                  注册账号
                </Button>
              </Link>
              <Link href="/docs/getting-started">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  查看快速入门
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

interface DocCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

function DocCard({ icon, title, description, link }: DocCardProps) {
  return (
    <Link href={link}>
      <Card className="overflow-hidden h-full transition-colors hover:border-primary">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground flex-grow">{description}</p>
          <div className="flex items-center mt-4 text-primary">
            <span className="mr-2">了解更多</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

interface SdkCardProps {
  language: string
  description: string
  installCommand: string
  docsLink: string
}

function SdkCard({ language, description, installCommand, docsLink }: SdkCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{language}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="bg-muted p-3 rounded-md flex justify-between items-center mb-4">
          <code className="text-sm">{installCommand}</code>
          <Button variant="ghost" size="icon">
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <Link href={docsLink} className="flex items-center text-primary hover:underline">
          <span className="mr-2">查看文档</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

interface TutorialCardProps {
  title: string
  description: string
  difficulty: string
  time: string
  link: string
}

function TutorialCard({ title, description, difficulty, time, link }: TutorialCardProps) {
  return (
    <Link href={link}>
      <Card className="overflow-hidden h-full transition-colors hover:border-primary">
        <CardContent className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">难度: {difficulty}</span>
            <span className="text-muted-foreground">时间: {time}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

