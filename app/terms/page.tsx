import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 container py-12 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">服务条款</h1>
            <p className="text-muted-foreground">最后更新日期：2024年12月1日</p>
          </div>

          <div className="mt-8 space-y-8 text-muted-foreground">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. 接受条款</h2>
              <p>
                欢迎使用多语言视频AI平台（以下简称"我们"、"我们的"或"本平台"）提供的服务。本服务条款（以下简称"条款"）是您与我们之间关于您使用我们服务的法律协议。
              </p>
              <p>
                通过访问或使用我们的服务，您确认您已阅读、理解并同意受这些条款的约束。如果您不同意这些条款的任何部分，则您不得使用我们的服务。
              </p>
              <p>
                我们保留随时修改这些条款的权利。修改后的条款将在我们的网站上发布，并在发布后立即生效。您继续使用我们的服务将视为您接受修改后的条款。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. 服务描述</h2>
              <p>
                多语言视频AI平台是一个提供视频翻译、配音和字幕服务的在线平台。我们的服务允许用户上传视频，并将其翻译成多种语言，生成配音和字幕。
              </p>
              <p>
                我们可能会不时更改、暂停或终止我们服务的任何方面，包括服务的可用性，恕不另行通知。我们也可能会对某些功能和服务施加限制，或限制您对部分或全部服务的访问，恕不另行通知。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. 用户账户</h2>
              <p>
                要使用我们的某些服务，您可能需要创建一个账户。您同意提供准确、完整和最新的信息，并同意及时更新您的信息。
              </p>
              <p>
                您负责维护您账户的保密性，并对发生在您账户下的所有活动负责。如果您发现任何未经授权使用您账户的情况，您同意立即通知我们。
              </p>
              <p>我们保留拒绝服务、终止账户、删除或编辑内容或取消订单的权利，恕不另行通知。</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. 用户内容</h2>
              <p>
                "用户内容"是指您上传、提交、存储、发送或通过我们的服务提供的任何内容，包括但不限于视频、音频、文本、图像等。
              </p>
              <p>
                您保留您的用户内容的所有权利。但是，通过上传或提交用户内容，您授予我们一个全球性的、非独占的、免版税的、可转让的、可再许可的许可，允许我们使用、复制、修改、创建衍生作品、分发、公开展示和执行用户内容，以便我们提供和改进我们的服务。
              </p>
              <p>
                您声明并保证：(i) 您拥有您的用户内容，或有权授予上述许可；(ii)
                您的用户内容不会侵犯任何第三方的知识产权、隐私权或其他权利；(iii)
                您的用户内容不会违反任何适用的法律或法规。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. 禁止行为</h2>
              <p>在使用我们的服务时，您同意不会：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>违反任何适用的法律或法规。</li>
                <li>侵犯他人的知识产权、隐私权或其他权利。</li>
                <li>上传、发送或分享任何非法、有害、威胁、辱骂、骚扰、诽谤、淫秽或其他不适当的内容。</li>
                <li>冒充任何人或实体，或虚假陈述您与任何人或实体的关系。</li>
                <li>尝试未经授权访问我们的系统或网络。</li>
                <li>干扰或破坏我们服务的运行或任何服务器或网络。</li>
                <li>使用自动化程序、机器人或其他方式大量访问我们的服务。</li>
                <li>收集或存储其他用户的个人信息。</li>
              </ul>
              <p>我们保留在发现违反这些禁止行为的情况下，删除任何用户内容、暂停或终止您的账户的权利。</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. 知识产权</h2>
              <p>
                我们的服务和内容（除了您的用户内容），包括但不限于文本、图形、徽标、图标、图像、音频剪辑、数字下载、数据编译和软件，都是我们或我们的许可方的财产，受中国和国际版权、商标和其他知识产权法律的保护。
              </p>
              <p>
                未经我们明确的书面许可，您不得使用、复制、修改、创建衍生作品、分发、公开展示或执行我们的服务或内容。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. 付款和订阅</h2>
              <p>
                某些服务可能需要付费。您同意支付与您选择的服务相关的所有费用。所有付款都是不可退款的，除非法律另有规定或这些条款中另有说明。
              </p>
              <p>
                如果您选择订阅我们的服务，您授权我们按照您选择的订阅计划定期向您收费。订阅将自动续订，除非您在下一个计费周期开始前取消订阅。
              </p>
              <p>我们保留随时更改我们的价格的权利。价格变更将在我们通知您后的下一个计费周期生效。</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. 免责声明</h2>
              <p>我们的服务按"原样"和"可用"的基础提供，没有任何形式的保证，无论是明示的还是暗示的。</p>
              <p>
                我们不保证我们的服务将满足您的要求，或者我们的服务将不间断、及时、安全或无错误，或者通过我们的服务获得的结果将准确或可靠，或者通过我们的服务购买的任何产品、服务、信息或其他材料的质量将满足您的期望。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. 责任限制</h2>
              <p>
                在法律允许的最大范围内，我们及我们的董事、员工、代理人、供应商或许可方在任何情况下都不对任何直接的、间接的、附带的、特殊的、惩罚性的或后果性的损害负责，包括但不限于利润损失、数据损失、业务中断或任何其他商业损害或损失，无论是基于保证、合同、侵权（包括疏忽）、产品责任或任何其他法律理论，无论我们是否已被告知此类损害的可能性。
              </p>
              <p>在某些司法管辖区不允许排除或限制对附带或后果性损害的责任，因此上述限制可能不适用于您。</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. 赔偿</h2>
              <p>
                您同意赔偿、保护并使我们及我们的董事、员工、代理人、供应商和许可方免受任何索赔、损失、责任、费用和支出（包括但不限于律师费），这些索赔、损失、责任、费用和支出是由于您违反这些条款、您使用我们的服务或您违反任何法律或第三方权利而引起的。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. 终止</h2>
              <p>
                我们可以在任何时候，因任何原因，终止或暂停您对我们服务的访问，恕不另行通知，包括但不限于您违反这些条款。
              </p>
              <p>终止后，您使用我们服务的权利将立即停止。如果您希望终止您的账户，您可以简单地停止使用我们的服务。</p>
              <p>这些条款中关于知识产权、免责声明、责任限制、赔偿、适用法律和争议解决的条款在终止后仍然有效。</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. 适用法律和争议解决</h2>
              <p>这些条款应受中华人民共和国法律管辖并按其解释，不考虑冲突法原则。</p>
              <p>
                与这些条款相关的任何争议应首先通过友好协商解决。如果协商不成，任何一方都可以将争议提交至北京仲裁委员会，按照其当时有效的规则进行仲裁。仲裁裁决是终局的，对双方均有约束力。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. 其他条款</h2>
              <p>
                这些条款构成您与我们之间关于我们服务的完整协议，并取代所有先前或同时的通信和提议，无论是口头还是书面的。
              </p>
              <p>
                如果这些条款的任何条款被认为无效或不可执行，该条款将被限制或消除到最小必要的程度，以便这些条款的其余部分继续完全有效。
              </p>
              <p>我们未能执行这些条款的任何权利或条款不构成对该权利或条款的放弃。</p>
              <p>您不得转让或转移这些条款，但我们可以自由地转让这些条款而无需限制。</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">14. 联系我们</h2>
              <p>如果您对这些条款有任何疑问，请通过以下方式联系我们：</p>
              <p>
                <strong>电子邮件</strong>：terms@multilingual-video.com
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

