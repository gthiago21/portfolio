import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '@/lib/cn'

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }>
export function Button({ className, variant = 'primary', children, ...props }: Props) {
  return <button className={cn('inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold transition focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg', variant === 'primary' ? 'bg-accent-strong text-white hover:brightness-110' : 'border border-border bg-surface text-text hover:border-accent', className)} {...props}>{children}</button>
}
