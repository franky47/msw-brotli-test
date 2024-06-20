import { b64 } from '@47ng/codec'
import { http, HttpResponse } from 'msw'

// cat src/mocks/original.xml | brotli | base64
const compressed =
  'H5kBAIzUYk0cD/S2fc8yx2kcERq74S4IiqyGBBUv1txCXlupC6HJ3f6E+WOgNoPRbGiPYJi5Kw8lD0pi0z3ksc0SAC2tY0ye0CtTlKuOjfP9lh0CPf3JTNsHCOjpOIodYCHMqgBHyxVXDzd6qUSTHIoIOf1gROpobH4TtxNvPmomvTeO7L4UjZ9iRhhmLXO1315tTJnBsRGQP5iAUZfvxH+SRKwCpaWZ2uoRocfwFtB+gGNR73eeYUGaGvMAcBcA'

export const handlers = [
  http.get('https://example.com/brotli', () => {
    const payload = b64.decode(compressed).buffer
    return HttpResponse.arrayBuffer(payload, {
      headers: {
        'content-type': 'application/xml',
        'content-encoding': 'br',
      },
    })
  }),
]
