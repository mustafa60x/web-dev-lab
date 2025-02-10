import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  stages: [
    { duration: '10s', target: 10 }, // 10 saniyede 10 kullanıcıya ulaş
    { duration: '30s', target: 100 }, // 30 saniyede 100 kullanıcıya ulaş
    { duration: '10s', target: 10 }, // 10 saniyede tekrar 10 kullanıcıya düş
  ],
}

export default function () {
  const res = http.get('https://web-dev-lab-rho.vercel.app/')

  check(res, {
    'status code is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
  })

  sleep(1)
}
