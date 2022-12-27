import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";



export default function Home({ posts }) {
  return (
    <div>

      <Head>
        <title>Homepage</title>
      </Head>

      <Banner></Banner>
      <div>
        {
          posts.map(post => <div key={post?.id} className="card mt-10 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post?.title}</h2>
              <p>{post?.body}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${post?.id}`}>
                  <button className="btn btn-primary">See details</button>
                </Link>
              </div>
            </div>
          </div>)
        }
        <Link href='/posts'>
          <p className="text-center mt-6"><button className="btn btn-primary">See More</button></p>
        </Link>
      </div>

      <h1>Welcome to next js</h1>
      <Link href='/blog'>Blog</Link>

      <Image width={320} height={320} src='/img/iphone.jpg' alt="img"></Image>
      <Footer></Footer>

    </div>
  )
}


export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      posts: data
    }
  }

}
