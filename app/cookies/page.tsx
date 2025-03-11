import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 container py-12 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cookie政策</h1>
            <p className="text-muted-foreground">最后更新日期：2024年12月1日</p>
          </div>

          <div className="mt-8 space-y-8 text-muted-foreground">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. 什么是Cookie</h2>
              <p>
                Cookie是一种小型文本文件，当您访问网站时，网站可能会将这些文件放在您的计算机或移动设备上。Cookie广泛应用于使网站正常运行或更高效地运行，以及为网站所有者提供信息。
              </p>
              <p>
                Cookie可以存储各种信息，包括个人信息（如您的姓名或电子邮件地址）。但是，只有当您选择向网站提供这些信息时，这些个人信息才会被存储。网站无法获取您未提供给它的信息，也无法访问您计算机上的其他文件。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. 我们如何使用Cookie</h2>
              <p>多语言视频AI平台使用Cookie和类似技术出于以下目的：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>必要的Cookie</strong>
                  ：这些Cookie对于网站的运行是必不可少的，使您能够使用我们网站的功能，如访问安全区域。没有这些Cookie，我们无法提供您请求的服务。
                </li>
                <li>
                  <strong>性能和分析Cookie</strong>
                  ：这些Cookie帮助我们了解访问者如何与我们的网站互动，收集有关网站性能和访问者行为的信息。这些信息帮助我们改进网站的用户体验和功能。
                </li>
                <li>
                  <strong>功能性Cookie</strong>
                  ：这些Cookie使我们能够记住您的选择（如您的用户名、语言或您访问的区域）并提供增强的、更个性化的功能。
                </li>
                <li>
                  <strong>定向或广告Cookie</strong>
                  ：这些Cookie用于向您展示与您的兴趣相关的广告。它们还用于限制您看到广告的次数，以及帮助衡量广告活动的效果。
                </li>
                <li>
                  <strong>社交媒体Cookie</strong>
                  ：这些Cookie使您能够通过社交媒体平台分享我们的内容，并帮助我们了解您如何与我们的社交媒体内容互动。
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. 我们使用的Cookie类型</h2>
              <p>以下是我们网站使用的主要Cookie类型的详细信息：</p>

              <h3 className="text-xl font-medium text-foreground mt-4">3.1 必要的Cookie</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Cookie名称</th>
                      <th className="text-left p-2">提供者</th>
                      <th className="text-left p-2">目的</th>
                      <th className="text-left p-2">过期时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">session_id</td>
                      <td className="p-2">multilingual-video.com</td>
                      <td className="p-2">用于识别用户会话</td>
                      <td className="p-2">会话结束</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">auth_token</td>
                      <td className="p-2">multilingual-video.com</td>
                      <td className="p-2">用于保持用户登录状态</td>
                      <td className="p-2">30天</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">csrf_token</td>
                      <td className="p-2">multilingual-video.com</td>
                      <td className="p-2">用于防止跨站请求伪造攻击</td>
                      <td className="p-2">会话结束</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-foreground mt-4">3.2 性能和分析Cookie</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Cookie名称</th>
                      <th className="text-left p-2">提供者</th>
                      <th className="text-left p-2">目的</th>
                      <th className="text-left p-2">过期时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">_ga</td>
                      <td className="p-2">Google Analytics</td>
                      <td className="p-2">用于区分用户</td>
                      <td className="p-2">2年</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">_gid</td>
                      <td className="p-2">Google Analytics</td>
                      <td className="p-2">用于区分用户</td>
                      <td className="p-2">24小时</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">_gat</td>
                      <td className="p-2">Google Analytics</td>
                      <td className="p-2">用于限制请求率</td>
                      <td className="p-2">1分钟</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-foreground mt-4">3.3 功能性Cookie</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Cookie名称</th>
                      <th className="text-left p-2">提供者</th>
                      <th className="text-left p-2">目的</th>
                      <th className="text-left p-2">过期时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">language</td>
                      <td className="p-2">multilingual-video.com</td>
                      <td className="p-2">用于记住用户的语言偏好</td>
                      <td className="p-2">1年</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">theme</td>
                      <td className="p-2">multilingual-video.com</td>
                      <td className="p-2">用于记住用户的主题偏好（如暗模式）</td>
                      <td className="p-2">1年</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">sidebar:state</td>
                      <td className="p-2">multilingual-video.com</td>
                      <td className="p-2">用于记住侧边栏的状态</td>
                      <td className="p-2">7天</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-foreground mt-4">3.4 定向或广告Cookie</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Cookie名称</th>
                      <th className="text-left p-2">提供者</th>
                      <th className="text-left p-2">目的</th>
                      <th className="text-left p-2">过期时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">_fbp</td>
                      <td className="p-2">Facebook</td>
                      <td className="p-2">用于Facebook广告</td>
                      <td className="p-2">3个月</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">_gcl_au</td>
                      <td className="p-2">Google AdSense</td>
                      <td className="p-2">用于Google广告</td>
                      <td className="p-2">3个月</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. 如何管理Cookie</h2>
              <p>
                大多数网络浏览器允许您通过浏览器设置控制Cookie。您可以设置浏览器拒绝接受Cookie，或者在Cookie被发送时通知您。但是，如果您不接受Cookie，您可能无法使用我们网站的某些功能。
              </p>
              <p>以下是如何在不同浏览器中管理Cookie的链接：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/zh-CN/kb/enable-and-disable-cookies-website-preferences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/zh-cn/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/zh-cn/microsoft-edge/删除-microsoft-edge-中的-cookie-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p>此外，您可以通过访问以下链接来选择退出某些第三方广告Cookie：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="http://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Digital Advertising Alliance
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.youronlinechoices.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    European Interactive Digital Advertising Alliance
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Cookie政策的变更</h2>
              <p>
                我们可能会不时更新本Cookie政策。如果我们进行重大更改，我们将通过在我们的网站上发布更新后的Cookie政策或通过其他方式通知您。我们鼓励您定期查看本Cookie政策，以了解我们如何使用Cookie。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. 联系我们</h2>
              <p>如果您对本Cookie政策有任何疑问、意见或请求，请通过以下方式联系我们：</p>
              <p>
                <strong>电子邮件</strong>：1963876196@qq.com
                <br />
                <strong>地址</strong>：四川省成都市
                <br />
                <strong>电话</strong>：+86 17318132503
              </p>
            </section>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/">
              <Button variant="outline">返回首页</Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

