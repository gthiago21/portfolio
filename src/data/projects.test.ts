import { describe, expect, it } from 'vitest'
import { filterProjects } from './projects'

describe('filterProjects', () => {
  it('returns all projects for all, including this portfolio', () => {
    expect(filterProjects('all')).toHaveLength(4)
    expect(filterProjects('all').map((project) => project.id)).toContain('portfolio')
  })
  it('filters mobile projects', () => expect(filterProjects('mobile').every((project) => project.categories.includes('mobile'))).toBe(true))
  it('filters backend projects', () => expect(filterProjects('backend').map((project) => project.id)).toContain('java-api'))
})
