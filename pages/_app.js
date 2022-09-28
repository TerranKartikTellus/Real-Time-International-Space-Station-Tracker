import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <main className='bg-gray-200/70 h-screen  flex flex-col items-center justify-center'>
    <div className='rounded h-5/6 shadow-md drop-shadow-xl my-auto mx-auto w-10/12 flex flex-col items-center justify-center'>
      <Component {...pageProps} />
    </div>
    </main>
}

export default MyApp
