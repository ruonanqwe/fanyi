export default function ProcessFlow() {
  return (
    <div className="relative">
      {/* Process flow steps */}
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">1</div>
          <div className="ml-4 space-y-1">
            <p className="text-lg font-medium">视频上传与提取</p>
            <p className="text-muted-foreground">用户上传视频文件存储到云端，提取音频轨道进行处理。</p>
            <div className="text-xs text-muted-foreground mt-1">
              <code>FFmpeg -i input.mp4 -vn -acodec pcm_s16le -ar 44100 -ac 2 output.wav</code>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">2</div>
          <div className="ml-4 space-y-1">
            <p className="text-lg font-medium">语音识别 (ASR)</p>
            <p className="text-muted-foreground">通过ASR引擎处理音频，生成带时间戳的文本。</p>
            <div className="flex gap-2 mt-2">
              <div className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">阿里云ASR (中文优化)</div>
              <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">
                Google Speech-to-Text (多语言支持)
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">3</div>
          <div className="ml-4 space-y-1">
            <p className="text-lg font-medium">翻译</p>
            <p className="text-muted-foreground">使用混合翻译引擎翻译文本，支持自定义术语。</p>
            <div className="flex gap-2 mt-2">
              <div className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded">DeepL API (精准翻译)</div>
              <div className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded">
                Google Translate (语种覆盖广)
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">4</div>
          <div className="ml-4 space-y-1">
            <p className="text-lg font-medium">语音合成</p>
            <p className="text-muted-foreground">将翻译后的文本转换为自然语音，调整语速匹配原视频时长。</p>
            <div className="flex gap-2 mt-2">
              <div className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded">ElevenLabs (拟真人声)</div>
              <div className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded">Amazon Polly (情感语音)</div>
              <div className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded">
                Azure Neural TTS (自然语音)
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">5</div>
          <div className="ml-4 space-y-1">
            <p className="text-lg font-medium">视频合成</p>
            <p className="text-muted-foreground">将原始视频与新音轨和字幕合成，创建最终输出。</p>
            <div className="text-xs text-muted-foreground mt-1">
              <code>
                FFmpeg -i input.mp4 -i dubbed_audio.wav -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -vf subtitles=subs.srt
                output.mp4
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical line connecting steps */}
      <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200"></div>
    </div>
  )
}

