import Head from 'next/head'
import { ReactNode } from 'react'

type LayoutTypes = {
    children: ReactNode,
    title?: string
}
const Layout = ({ children, title = 'NextApp' }: LayoutTypes) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout