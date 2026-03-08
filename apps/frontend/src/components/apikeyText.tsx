import { Check, Copy, Eye } from "lucide-react"

export function ApiKeyText({
  apiKey,
  copiedKey,
  setCopiedKey
}: {
  apiKey: string
  copiedKey: string | null
  setCopiedKey: (t: string | null) => void
}) {

  const isCopied = copiedKey === apiKey

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey)
    setCopiedKey(apiKey)

    setTimeout(() => {
      setCopiedKey(null)
    }, 2000)
  }

  return (
    <div className="flex gap-2 items-center">
      <div className="">
        {apiKey.slice(0, 12)}...{apiKey.slice(-4)}
      </div>

      <Eye size={16} />

      {isCopied ? (
        <Check className="text-green-400" size={16} />
      ) : (
        <Copy onClick={handleCopy} size={16}/>
      )}
    </div>
  )
}
