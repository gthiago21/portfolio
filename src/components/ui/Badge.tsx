import type { PropsWithChildren } from 'react'

export function Badge({ children }: PropsWithChildren) {
  return <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">{children}</span>
}
