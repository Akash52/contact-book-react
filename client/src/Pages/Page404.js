import { Link } from 'react-router-dom'
export default function Page404() {
  return (
    <main>
      <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold tracking-wide text-white uppercase focus-within:text-opacity-50">
          404 error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Uh oh! I think you’re lost.
        </h1>
        <p className="mt-2 text-lg font-medium text-white text-opacity-50">
          It looks like the page you’re looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white text-opacity-75 bg-white bg-opacity-75 border border-transparent rounded-md sm:bg-opacity-25 sm:hover:bg-opacity-50"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  )
}
