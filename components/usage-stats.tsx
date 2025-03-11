import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function UsageStats() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>使用统计</CardTitle>
            <CardDescription>查看您的使用情况和配额</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            升级套餐
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="minutes">
          <TabsList className="mb-4">
            <TabsTrigger value="minutes">分钟用量</TabsTrigger>
            <TabsTrigger value="languages">语言分布</TabsTrigger>
            <TabsTrigger value="formats">输出格式</TabsTrigger>
          </TabsList>

          <TabsContent value="minutes">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium mb-2">本月用量</h4>
                <div className="h-4 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "65%" }}></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>已使用: 130分钟</span>
                  <span>总配额: 200分钟</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium">历史用量</h4>
                <div className="grid grid-cols-7 gap-2">
                  {[25, 40, 35, 50, 65, 45, 30].map((value, i) => (
                    <div key={i} className="space-y-1">
                      <div className="w-full bg-muted rounded-sm overflow-hidden">
                        <div className="bg-primary h-24" style={{ height: `${value}%` }}></div>
                      </div>
                      <div className="text-xs text-center text-muted-foreground">
                        {["周一", "周二", "周三", "周四", "周五", "周六", "周日"][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="languages">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">英语</span>
                  <span className="text-sm text-muted-foreground">45%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">日语</span>
                  <span className="text-sm text-muted-foreground">25%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: "25%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">西班牙语</span>
                  <span className="text-sm text-muted-foreground">15%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: "15%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">法语</span>
                  <span className="text-sm text-muted-foreground">10%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: "10%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">其他</span>
                  <span className="text-sm text-muted-foreground">5%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: "5%" }}></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="formats">
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">65%</div>
                    <p className="text-xs text-muted-foreground mt-1">视频 (MP4)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">20%</div>
                    <p className="text-xs text-muted-foreground mt-1">字幕 (SRT)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">10%</div>
                    <p className="text-xs text-muted-foreground mt-1">字幕 (VTT)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5%</div>
                    <p className="text-xs text-muted-foreground mt-1">音频 (MP3)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

