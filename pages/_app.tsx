import '../assets/variables.less'
import { AppProps } from 'next/app'
import { BasicLayout, PageContainer, PageLoading } from '@ant-design/pro-layout'
function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.statusCode === 404) return <Component {...pageProps} />
  return (
    <BasicLayout>
      <PageContainer content={<Component {...pageProps} />}></PageContainer>
    </BasicLayout>
  )
}

export default MyApp
