import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <main className='bg-gray-200/70 h-screen  flex flex-col items-center justify-center'>
      
      
        <Component {...pageProps} />
      
    </main>
}

export default MyApp
