import { Html, Head, Main, NextScript } from 'next/document'
import Header from './src/Header'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head title='index' />
      <div>
        <Link href='/' className='logo'>홈</Link>
      </div>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
