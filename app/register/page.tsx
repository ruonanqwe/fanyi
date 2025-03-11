"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { EyeIcon, EyeOffIcon, GithubIcon } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const initialEmail = searchParams.get("email") || ""

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState(initialEmail)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 1) {
      // 验证第一步
      if (password !== confirmPassword) {
        alert("两次输入的密码不一致")
        return
      }
      setStep(2)
      return
    }

    // 第二步提交
    setIsLoading(true)
    // 模拟注册请求
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  const sendVerificationCode = () => {
    // 模拟发送验证码
    alert(`验证码已发送至 ${phone}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">创建账号</h1>
            <p className="text-muted-foreground mt-2">注册多语言视频翻译平台，开启内容全球化之旅</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>注册账号</CardTitle>
              <CardDescription>{step === 1 ? "填写基本信息" : "完成手机验证"}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-4">
                {step === 1 ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="email">邮箱地址</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">设置密码</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                          <span className="sr-only">{showPassword ? "隐藏密码" : "显示密码"}</span>
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">密码至少包含8个字符，包括字母和数字</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">确认密码</Label>
                      <Input
                        id="confirm-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreeTerms}
                        onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                        required
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        我已阅读并同意{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          服务条款
                        </Link>{" "}
                        和{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          隐私政策
                        </Link>
                      </label>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="phone">手机号码</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="请输入手机号码"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="code">验证码</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="code"
                          type="text"
                          placeholder="请输入验证码"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={sendVerificationCode}
                          className="whitespace-nowrap"
                        >
                          获取验证码
                        </Button>
                      </div>
                    </div>
                  </>
                )}
                <Button type="submit" className="w-full" disabled={isLoading || (step === 1 && !agreeTerms)}>
                  {isLoading ? "处理中..." : step === 1 ? "下一步" : "完成注册"}
                </Button>
                {step === 2 && (
                  <Button type="button" variant="outline" className="w-full mt-2" onClick={() => setStep(1)}>
                    返回上一步
                  </Button>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">或继续使用</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12 h8" />
                    <path d="M12 8 v8" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
              <div className="text-center text-sm">
                已有账号?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  立即登录
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

