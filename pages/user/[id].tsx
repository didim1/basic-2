import axios from 'axios'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { UsersType } from '../../interface'
import useSwr from 'swr'
import { useRouter } from 'next/router'

const fetcher = (url: string) => axios.get(url).then((user) => user.data)

const Home = () => {
    const router = useRouter()
    const { data, error } = useSwr<UsersType>(router.query.id ? `/api/user/${router.query.id}` : null, fetcher)
    if (error) return <div>Failed to load user</div>
    if (!data) return
    (
        <Layout title='Detail User | NextApp'>
            <div className="container mx-auto pt-10">
                <div className="flex flex-wrap gap-10 justify-around">
                    <Link href="/">
                        <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <div role="status" className="max-w-sm animate-pulse">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <span className="sr-only">Loading...</span>
                            </div>

                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    )

    return (
        <Layout title='Detail User | NextApp'>
            <div className="container mx-auto pt-10">
                <div className="flex flex-wrap gap-10 justify-around">
                    <Link href="/">
                        <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{data?.name}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>ID</span>: {data?.id}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Name</span>: {data?.name}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Email</span>: {data?.email}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Comapany Name</span>: {data?.company.name}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Comapany Bs</span>: {data?.company.bs}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Company Catch Phrase</span>: {data?.company.catchPhrase}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Website</span>: {data?.website}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Phone</span>: {data?.phone}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>City</span>: {data?.address?.city}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Geo Lat</span>: {data?.address?.geo?.lat}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Geo Lng</span>: {data?.address?.geo?.lng}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Street</span>: {data?.address?.street}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Suite</span>: {data?.address?.suite}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Zipcode</span>: {data?.address?.zipcode}</p>
                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}
// export const getStaticPaths: GetStaticPaths = async () => {
//     const users = await getUsers()
//     const paths = users.map((user) => ({
//         params: { id: user.id.toString() }
//     }))
//     return {
//         paths,
//         fallback: 'blocking'
//     }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     return {
//         props: { user: await getUser(String(params?.id)) },
//         revalidate: 60
//     }
// }

export default Home
