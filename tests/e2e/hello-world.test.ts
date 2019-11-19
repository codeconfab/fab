import * as execa from 'execa'
import * as expect from 'expect'

it('should pass a noop', () => {
  expect(1 + 1).toBe(2)
})

it('should have our packages locally', async () => {
  const { stdout: bins } = await execa.command(`ls -l ../node_modules/.bin`)
  expect(bins).toMatch(/fab-static/)
})

it('should have our packages globally', async () => {
  const { stdout } = await execa.command(`which fab-static`)
  expect(stdout).toMatch(/fab-static/)
})
