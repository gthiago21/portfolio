import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/cn'

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <article className={cn('rounded-2xl border border-border bg-surface', className)}>{children}</article>
}
