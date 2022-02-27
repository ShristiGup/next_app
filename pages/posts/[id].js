export const getStaticPaths = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts?_start=0&_limit=20');
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: {id: post.id.toString()}
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();

    return{
        props: {post: data}
    }
}


const BlogDetails = ({post}) => {
    return ( 
        <div className='w-two-thirds ml-auto mr-auto mv6 bg-washed-green pa5-ns pa3 ba bw1 br4'>
            <h1 className='tc mb5 f4 f2-ns'>{post.title}</h1>
            <p className='f4 mt4'>{post.body}</p>
        </div>
     );
}
 
export default BlogDetails;