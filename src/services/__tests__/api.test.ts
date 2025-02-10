import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchUser } from '../api'

vi.mock('../api', () => ({
  fetchUser: vi.fn(() => Promise.resolve({ id: 1, name: 'Test User' })),
}))

const myFunction = vi.fn(() => 'Mocked Function')

// Her test öncesinde modül önbelleğini temizle
beforeEach(() => {
  vi.resetModules()
})

describe('vi.fn Kullanımı', () => {
  it('mock fonksiyonu kullanmaya yarıyor', () => {
    myFunction()
    expect(myFunction).toHaveBeenCalled()
  })

  it('mock fonksiyonu 2 kere kullanılabileceği testi yapar', () => {
    myFunction()
    myFunction()
    expect(myFunction).toHaveBeenCalledTimes(3)
  })

  it('mock fonksiyonu döndürmeli', () => {
    expect(myFunction()).toBe('Mocked Function')
  })
})

describe('fetchUser fonksiyonu', () => {
  it('mock veriyi döndürmeli', async () => {
    const user = await fetchUser()
    expect(user).toEqual({ id: 1, name: 'Test User' })
  })
})
