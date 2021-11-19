import { NextRequest, NextResponse } from 'next/server'


async function f2() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data;
}

export function middleware(req , res) {
  
  const basicAuth = req.headers.get('authorization')
 
  
  console.log(f2());

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

    if (user === 'hitesh' && pwd === 'testpwd123') {
      return NextResponse.next()
    }
  }

  return new Response('Auth required', {
    status: 401, 
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}