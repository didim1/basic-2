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
    if (!data) {
        return (
            <Layout title='Detail User | NextApp'>
                <div className="container mx-auto pt-14">
                    <div role="status" className=" w-full animate-pulse">
                        <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[200px] mx-auto mb-5"></div>
                        <a className="block p-6 max-w-sm bg-white mx-auto rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-56 m-auto mb-4"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[320px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[340px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[215px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[215px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[220px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[230px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[210px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[221px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[225px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[227px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[229px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[210px] mb-2.5"></div>
                            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[229px] mb-2.5"></div>

                            <span className="sr-only">Loading...</span>
                        </a>
                    </div>
                </div>
            </Layout >
        )
    }
    return (
        <Layout title='Detail User | NextApp'>
            <div className="container mx-auto pt-10">
                <p className='text-3xl text-center font-bold my-5'>Detail User</p>
                <div className="flex flex-wrap gap-10 justify-center">
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


export default Home
