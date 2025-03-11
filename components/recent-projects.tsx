import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Download, MoreVertical, Play, Trash } from "lucide-react"

export default function RecentProjects() {
  // 模拟项目数据
  const projects = [
    {
      id: "proj_1",
      name: "产品介绍视频",
      sourceLanguage: "中文",
      targetLanguage: "英语",
      duration: "2:45",
      status: "completed",
      date: "2024-2-15",
    },
    {
      id: "proj_2",
      name: "营销宣传片",
      sourceLanguage: "中文",
      targetLanguage: "日语",
      duration: "4:12",
      status: "completed",
      date: "2024-2-10",
    },
    {
      id: "proj_3",
      name: "教程视频",
      sourceLanguage: "中文",
      targetLanguage: "西班牙语",
      duration: "8:30",
      status: "processing",
      date: "2024-2-18",
    },
    {
      id: "proj_4",
      name: "公司简介",
      sourceLanguage: "中文",
      targetLanguage: "法语",
      duration: "3:20",
      status: "processing",
      date: "2024-2-18",
    },
    {
      id: "proj_5",
      name: "用户反馈视频",
      sourceLanguage: "中文",
      targetLanguage: "韩语",
      duration: "5:45",
      status: "completed",
      date: "2024-2-05",
    },
  ]

  // 状态标签映射
  const statusMap = {
    completed: <Badge className="bg-green-500">已完成</Badge>,
    processing: <Badge className="bg-blue-500">处理中</Badge>,
    failed: <Badge variant="destructive">失败</Badge>,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>最近项目</CardTitle>
        <CardDescription>查看和管理您最近处理的视频项目</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>项目名称</TableHead>
              <TableHead>源语言</TableHead>
              <TableHead>目标语言</TableHead>
              <TableHead>时长</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>日期</TableHead>
              <TableHead className="text-right">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.sourceLanguage}</TableCell>
                <TableCell>{project.targetLanguage}</TableCell>
                <TableCell>{project.duration}</TableCell>
                <TableCell>{statusMap[project.status as keyof typeof statusMap]}</TableCell>
                <TableCell>{project.date}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">操作菜单</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>项目操作</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Play className="mr-2 h-4 w-4" />
                        <span>播放</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        <span>下载</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        <span>删除</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

// Add real project thumbnails to the table if needed
// This would require modifying the table to include thumbnail images
// Since the current implementation doesn't have image columns, we'll leave this as is

