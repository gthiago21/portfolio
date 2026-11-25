export function Toast({ message, visible }: { message: string; visible: boolean }) {
  if (!visible) return null
  return <div role="status" aria-live="polite" className="pointer-events-none fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 rounded-lg border border-border bg-text px-5 py-3 text-sm font-semibold text-bg shadow-lg">{message}</div>
}
