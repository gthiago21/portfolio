import { readFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'

const roots = ['src', 'public', 'index.html', '.env.example']
const matches = []
const siteConfig = await readFile('src/data/site.ts', 'utf8')
const envExample = await readFile('.env.example', 'utf8')
const configuredContacts = [
  ['LinkedIn', 'https://www.linkedin.com/in/thiago-garcia-b71394352/'],
  ['e-mail', 'thiago.garciatg4@gmail.com'],
  ['WhatsApp', '5548998482475'],
]

for (const [label, value] of configuredContacts) {
  if (!siteConfig.includes(value)) throw new Error(`${label} não está configurado em src/data/site.ts.`)
}
for (const key of ['VITE_CONTACT_ACCESS_KEY', 'VITE_WHATSAPP_NUMBER']) {
  if (!new RegExp(`^${key}=$`, 'm').test(envExample)) {
    throw new Error(`${key} deve existir sem valor em .env.example.`)
  }
}

for (const root of roots) {
  const walk = async (path) => {
    const stat = await import('node:fs/promises').then((fs) => fs.stat(path)).catch(() => null)
    if (!stat) return
    if (stat.isDirectory()) for (const file of await readdir(path)) await walk(join(path, file))
    else if (/\.(ts|tsx|html|md|txt|xml|svg|example)$/.test(path) || path.endsWith('.env.example')) {
      const text = await readFile(path, 'utf8')
      if (/SEU-|SEU_|EXEMPLO|DETALHES A SUBSTITUIR|PLACEHOLDER|DETAILS TO BE REPLACED/.test(text) || /should be replaced/i.test(text)) matches.push(path)
    }
  }
  await walk(root)
}
console.log('Contatos configurados: LinkedIn, e-mail e WhatsApp.')
console.log(matches.length ? `Placeholders encontrados:\n${matches.map((item) => `- ${item}`).join('\n')}` : 'Nenhum placeholder encontrado.')
