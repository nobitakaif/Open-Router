import { Check, Copy, Eye, EyeOff } from "lucide-react"
import { useEffect, useState } from "react"

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

  const [showFullkey, setShowFullkey] = useState(false)

 
  
  return (
    <div className="flex gap-2 items-center">
     <div>
        {showFullkey
          ? apiKey
          : `${apiKey.slice(0, 12)}...${apiKey.slice(-4)}`}
      </div>


      {showFullkey ? <EyeOff size={16} onClick={()=> setShowFullkey(false)} cursor={"pointer"}/> :  <Eye size={16} cursor={"pointer"} onClick={() => setShowFullkey(true)}/>}

      {isCopied ? (
        <Check className="text-green-400" size={16}   cursor={"pointer"}/>
      ) : (
        <Copy onClick={handleCopy} size={16} cursor={"pointer"}/>
      )}
    </div>
  )
}
