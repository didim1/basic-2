import axios from 'axios'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { UsersType } from '../interface'
import { getUsers } from './api/users'

type HomeProps = {
  users: UsersType[]
}

const Home = ({ users }: HomeProps) => {
  return (
    <Layout title='Users | NextApp'>

      <div className="container mx-auto pt-10">
        <div className="flex flex-wrap gap-10 justify-around">
          {users.map((user, index) => (
            <>
              <Link href={`/user/${user.id}`}>
                <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>username</span>: {user.username}</p>
                </a>
              </Link>
            </>
          ))}


        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const users = await getUsers()
  return {
    props: { users }
  }
}

export default Home
