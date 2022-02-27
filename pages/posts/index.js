import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts?_start=0&_limit=20');
    const data = await res.json();

    return {
        props: { posts: data }
    }
}



const Posts = ({ posts }) => {
    return (
        <div className='w-two-thirds ml-auto mr-auto mt5 mb6'>
            <h1 className='tc mb4'>All Posts</h1>
            {posts.map(post => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                    <a className='db bg-light-blue pa1 mb4 bl bw3'>
                        <h3 className='pl4-ns pl2'>{post.title}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Posts;