"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Languages, Clock, FileText, History } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"
import DashboardHeader from "@/components/dashboard-header"
import RecentProjects from "@/components/recent-projects"
import UsageStats from "@/components/usage-stats"

export default function DashboardPage() {
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [processing, setProcessing] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (!file) return

    setProcessing(true)

    // 模拟处理
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 5
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        setProcessing(false)
      }
    }, 500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />

      <div className="flex flex-1">
        <DashboardNav />

        <main className="flex-1 p-6 md:p-8">
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">欢迎回来，用户</h1>
              <p className="text-muted-foreground">管理您的视频翻译项目和账户设置</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">剩余配额</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">120分钟</div>
                  <p className="text-xs text-muted-foreground">基础版套餐</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">已处理视频</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12个</div>
                  <p className="text-xs text-muted-foreground">本月增长 +3</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">处理中视频</CardTitle>
                  <History className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2个</div>
                  <p className="text-xs text-muted-foreground">预计完成时间 15分钟</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">目标语言</CardTitle>
                  <Languages className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5种</div>
                  <p className="text-xs text-muted-foreground">英语、日语、韩语、法语、西班牙语</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="upload">上传新视频</TabsTrigger>
                <TabsTrigger value="projects">最近项目</TabsTrigger>
                <TabsTrigger value="usage">使用统计</TabsTrigger>
              </TabsList>

              <TabsContent value="upload">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>上传视频进行翻译</CardTitle>
                    <CardDescription>上传您的视频，翻译并配音成多种语言</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="border-2 border-dashed rounded-lg p-12 text-center border-gray-300 hover:border-primary transition-colors">
                        <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="mb-4 text-muted-foreground">拖放您的视频文件到这里或点击浏览</p>
                        <input
                          type="file"
                          className="hidden"
                          id="video-upload"
                          accept="video/*"
                          onChange={handleFileChange}
                        />
                        <Button onClick={() => document.getElementById("video-upload")?.click()}>选择视频</Button>
                        {file && <p className="mt-4 text-sm">已选择: {file.name}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">源语言</label>
                          <Select defaultValue="zh">
                            <SelectTrigger>
                              <SelectValue placeholder="选择语言" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="zh">中文</SelectItem>
                              <SelectItem value="en">英语</SelectItem>
                              <SelectItem value="ja">日语</SelectItem>
                              <SelectItem value="ko">韩语</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">目标语言</label>
                          <Select defaultValue="en">
                            <SelectTrigger>
                              <SelectValue placeholder="选择语言" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">英语</SelectItem>
                              <SelectItem value="es">西班牙语</SelectItem>
                              <SelectItem value="fr">法语</SelectItem>
                              <SelectItem value="de">德语</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">语音类型</label>
                        <Select defaultValue="natural">
                          <SelectTrigger>
                            <SelectValue placeholder="选择语音类型" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="natural">自然语音 (ElevenLabs)</SelectItem>
                            <SelectItem value="emotional">情感语音 (Amazon Polly)</SelectItem>
                            <SelectItem value="neural">神经语音 (Azure)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">输出格式</label>
                        <Select defaultValue="video">
                          <SelectTrigger>
                            <SelectValue placeholder="选择输出格式" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="video">配音视频</SelectItem>
                            <SelectItem value="srt">SRT字幕</SelectItem>
                            <SelectItem value="vtt">VTT字幕</SelectItem>
                            <SelectItem value="audio">仅音频</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {processing && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>处理视频中...</span>
                            <span>{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={handleUpload} disabled={!file || processing}>
                      {processing ? "处理中..." : "开始处理"}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="projects">
                <RecentProjects />
              </TabsContent>

              <TabsContent value="usage">
                <UsageStats />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

