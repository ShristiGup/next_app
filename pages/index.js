import '../node_modules/tachyons/css/tachyons.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-two-thirds ml-auto mr-auto mt5 mb6'>
      <h1 className='tc'>Welcome to Blog Posts!</h1>
      <p className='f4 mt4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quos, accusantium ex necessitatibus quas, dignissimos officiis illo odit veritatis eaque commodi eos laudantium porro quidem quasi eius dolorem aliquam nihil beatae laborum tenetur maiores. Sint quaerat recusandae harum saepe. Porro quo ut repellendus minus aspernatur adipisci ipsum? Rerum adipisci fugit illo possimus, commodi autem molestias. Doloribus labore asperiores ex id quos quibusdam voluptate repellat totam eligendi explicabo reprehenderit magni, distinctio esse quae inventore nemo! Quia, vel error! Tempora repellendus obcaecati ipsa necessitatibus! Quod itaque mollitia voluptatem consectetur nisi unde, quis tempora incidunt, cumque, laboriosam vero a quidem architecto dignissimos accusantium.</p>
      <Link href="/posts"><a className='btn ph2 pv3 bg-blue b white f4 br3 ml-auto mr-auto db w-70 w-30-ns w-20-l tc mt5 mb6'>See Blog Posts</a></Link>
    </div>
  )
}
