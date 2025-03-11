import { Check, X } from "lucide-react"

export default function FeatureComparison() {
  return (
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
            <td className="p-4 font-medium">技术支持</td>
            <td className="p-4 text-center">邮件支持</td>
            <td className="p-4 text-center bg-primary/5">优先邮件支持</td>
            <td className="p-4 text-center">专属客户经理</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

