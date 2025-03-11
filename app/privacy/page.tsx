import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 container py-12 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">隐私政策</h1>
            <p className="text-muted-foreground">最后更新日期：2024年12月1日</p>
          </div>

          <div className="mt-8 space-y-8 text-muted-foreground">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. 引言</h2>
              <p>
                多语言视频AI平台（以下简称"我们"、"我们的"或"本平台"）尊重并保护用户的隐私。本隐私政策旨在向您说明我们如何收集、使用、存储和共享您的个人信息，以及您如何访问、更正、删除您的个人信息以及撤回您的授权同意。
              </p>
              <p>
                请您在使用我们的服务前仔细阅读本隐私政策。如果您不同意本隐私政策的任何内容，您应立即停止使用我们的服务。当您使用我们的服务时，即表示您已同意我们按照本隐私政策收集、使用、存储和共享您的相关信息。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. 我们收集的信息</h2>
              <p>为了向您提供我们的服务，我们可能会收集以下类型的信息：</p>
              <h3 className="text-xl font-medium text-foreground mt-4">2.1 您提供给我们的信息</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>账户信息</strong>：当您注册账户时，我们会收集您的姓名、电子邮件地址、电话号码、密码等信息。
                </li>
                <li>
                  <strong>个人资料信息</strong>：您可能会向我们提供您的职位、公司、头像等信息。
                </li>
                <li>
                  <strong>付款信息</strong>：当您购买我们的服务时，我们会收集必要的支付信息，如信用卡信息、账单地址等。
                </li>
                <li>
                  <strong>您上传的内容</strong>：包括您上传到我们平台的视频、音频、文本等内容。
                </li>
                <li>
                  <strong>通信内容</strong>：您与我们的客户支持团队沟通时提供的信息。
                </li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-4">2.2 我们自动收集的信息</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>设备信息</strong>：如设备型号、操作系统版本、浏览器类型、语言设置等。
                </li>
                <li>
                  <strong>日志信息</strong>：如IP地址、访问日期和时间、浏览的页面、点击的链接等。
                </li>
                <li>
                  <strong>位置信息</strong>：如果您授权，我们可能会收集您的精确或大致位置信息。
                </li>
                <li>
                  <strong>使用信息</strong>：如您使用我们服务的频率、持续时间、您处理的视频数量和类型等。
                </li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-4">2.3 来自第三方的信息</h3>
              <p>我们可能会从第三方获取关于您的信息，例如：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>当您使用第三方账号（如Google、Facebook等）登录我们的服务时。</li>
                <li>从我们的业务合作伙伴处获取的信息。</li>
                <li>公开可用的来源。</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. 我们如何使用您的信息</h2>
              <p>我们可能将收集到的信息用于以下目的：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>提供、维护和改进我们的服务。</li>
                <li>处理您的视频翻译和配音请求。</li>
                <li>创建和管理您的账户。</li>
                <li>处理您的付款和管理您的订阅。</li>
                <li>向您发送技术通知、更新、安全警报和支持信息。</li>
                <li>回应您的评论、问题和请求，并提供客户服务。</li>
                <li>与您沟通有关我们的产品、服务、优惠和活动的信息。</li>
                <li>监控和分析趋势、使用情况和活动。</li>
                <li>检测、调查和预防欺诈交易和其他非法活动。</li>
                <li>保护我们和他人的权利、财产或安全。</li>
                <li>遵守适用的法律、法规和法律程序。</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. 信息共享与披露</h2>
              <p>我们不会出售您的个人信息。但在以下情况下，我们可能会共享您的信息：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>服务提供商</strong>
                  ：我们可能与帮助我们提供服务的第三方服务提供商共享您的信息，如云存储提供商、支付处理商、客户服务提供商等。
                </li>
                <li>
                  <strong>业务转让</strong>
                  ：如果我们参与合并、收购、资产出售或破产程序，您的信息可能会作为商业资产转让。
                </li>
                <li>
                  <strong>法律要求</strong>
                  ：如果法律要求或为了响应法律程序（如法院命令或传票），我们可能会披露您的信息。
                </li>
                <li>
                  <strong>保护权利</strong>：当我们认为披露是为了保护我们、您或他人的权利、财产或安全时。
                </li>
                <li>
                  <strong>您的同意</strong>：在您同意的情况下，我们可能会与第三方共享您的信息。
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. 数据安全</h2>
              <p>我们采取合理的技术和组织措施来保护您的个人信息不被未经授权的访问、使用或披露。这些措施包括：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>使用加密技术保护数据传输和存储。</li>
                <li>实施访问控制机制，限制对个人信息的访问。</li>
                <li>定期审查和更新我们的安全措施。</li>
                <li>对员工进行数据保护培训。</li>
              </ul>
              <p>
                然而，请注意，尽管我们努力保护您的个人信息，但没有任何安全措施是完全万无一失的。我们无法保证您的个人信息永远不会被未经授权的访问、使用、更改或披露。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. 数据保留</h2>
              <p>
                我们会在实现本隐私政策中所述目的所必需的时间内保留您的个人信息，除非法律要求或允许更长的保留期限。当我们不再需要使用您的个人信息时，我们将从我们的系统中删除或匿名化处理这些信息。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. 您的权利</h2>
              <p>根据适用的数据保护法律，您可能拥有以下权利：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>访问权</strong>：您有权获取我们持有的关于您的个人信息的副本。
                </li>
                <li>
                  <strong>更正权</strong>
                  ：如果您认为我们持有的关于您的个人信息不准确或不完整，您有权要求我们更正这些信息。
                </li>
                <li>
                  <strong>删除权</strong>：在某些情况下，您有权要求我们删除您的个人信息。
                </li>
                <li>
                  <strong>限制处理权</strong>：在某些情况下，您有权要求我们限制对您个人信息的处理。
                </li>
                <li>
                  <strong>数据可携带权</strong>
                  ：您有权以结构化、常用和机器可读的格式接收您提供给我们的个人信息，并有权将这些信息传输给另一个控制者。
                </li>
                <li>
                  <strong>反对权</strong>：在某些情况下，您有权反对我们处理您的个人信息。
                </li>
                <li>
                  <strong>撤回同意权</strong>：如果我们基于您的同意处理您的个人信息，您有权随时撤回您的同意。
                </li>
              </ul>
              <p>
                如果您想行使这些权利，请通过以下联系方式与我们联系。请注意，这些权利可能受到当地数据保护法律的限制。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. 儿童隐私</h2>
              <p>
                我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果您是父母或监护人，并且您认为您的孩子向我们提供了个人信息，请联系我们，我们将采取措施从我们的系统中删除这些信息。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. 国际数据传输</h2>
              <p>
                我们可能会将您的个人信息传输并存储在您所在国家/地区以外的国家/地区，这些国家/地区的数据保护法律可能与您所在国家/地区的法律不同。如果我们这样做，我们将采取适当的措施来保护您的个人信息。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Cookie和类似技术</h2>
              <p>
                我们使用Cookie和类似技术来收集和存储有关您使用我们服务的信息。您可以通过浏览器设置拒绝Cookie，但这可能会影响您使用我们服务的能力。有关我们如何使用Cookie和类似技术的更多信息，请参阅我们的
                <Link href="/cookies" className="text-primary hover:underline">
                  Cookie政策
                </Link>
                。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. 第三方链接</h2>
              <p>
                我们的服务可能包含指向第三方网站或服务的链接，这些网站或服务不受我们控制。本隐私政策不适用于这些第三方网站或服务。我们建议您阅读这些第三方的隐私政策，以了解他们如何收集、使用和共享您的信息。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. 隐私政策的变更</h2>
              <p>
                我们可能会不时更新本隐私政策。如果我们进行重大更改，我们将通过在我们的网站上发布更新后的隐私政策或通过其他方式通知您。我们鼓励您定期查看本隐私政策，以了解我们如何保护您的信息。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. 联系我们</h2>
              <p>如果您对本隐私政策有任何疑问、意见或请求，请通过以下方式联系我们：</p>
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

