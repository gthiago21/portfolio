import { useState } from 'react'

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const copy = async (text: string) => {
    setCopied(false)
    setCopyFailed(false)
    try {
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(text)
        } catch {
          copyWithFallback(text)
        }
      } else {
        copyWithFallback(text)
      }
      setCopied(true)
    } catch {
      setCopyFailed(true)
    }
    window.setTimeout(() => {
      setCopied(false)
      setCopyFailed(false)
    }, 3000)
  }
  return { copied, copyFailed, copy }
}

function copyWithFallback(text: string) {
  const input = document.createElement('textarea')
  input.value = text
  input.style.position = 'fixed'
  input.style.opacity = '0'
  document.body.appendChild(input)
  try {
    input.select()
    if (!document.execCommand('copy')) throw new Error('Clipboard copy was rejected.')
  } finally {
    input.remove()
  }
}
