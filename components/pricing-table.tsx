import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingTable() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>基础版</CardTitle>
          <CardDescription>适合个人和小型项目</CardDescription>
          <div className="mt-4 text-4xl font-bold">
            ¥0.7<span className="text-sm font-normal text-muted-foreground">/分钟</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>语音识别 (ASR)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>基础翻译</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>标准TTS语音</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>SRT/VTT字幕导出</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>720p视频输出</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">开始使用</Button>
        </CardFooter>
      </Card>

      <Card className="flex flex-col border-primary">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>专业版</CardTitle>
            <div className="px-2.5 py-0.5 text-xs font-semibold bg-primary text-white rounded-full">热门选择</div>
          </div>
          <CardDescription>适合企业和内容创作者</CardDescription>
          <div className="mt-4 text-4xl font-bold">
            ¥2.1<span className="text-sm font-normal text-muted-foreground">/分钟</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>高级ASR带噪音过滤</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>DeepL高级翻译</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>情感TTS语音</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>口型同步技术</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>1080p视频输出</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>自定义术语支持</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>优先处理</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="default">
            开始使用
          </Button>
        </CardFooter>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>企业版</CardTitle>
          <CardDescription>适合大型组织和高容量需求</CardDescription>
          <div className="mt-4 text-4xl font-bold">
            ¥699<span className="text-sm font-normal text-muted-foreground">/万次API调用</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>包含所有专业版功能</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>RESTful API访问</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Webhook回调通知</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>批量处理</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>4K视频支持</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>专属客户经理</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>SLA保障</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>定制集成支持</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            联系销售
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

