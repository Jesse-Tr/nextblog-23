import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Button, { getDateTimeFormate, myFunction } from "../components/button";


export async function getStaticProps(){
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
}

export default function Home( { allPostsData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>My name is Jesse and this is my next.js tutorial assignment</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            <br />
            <button><a href='../images/error404'>Check out the 404 page</a></button>
          <br />
           <button onClick={myFunction}>Why doesnt this show the date?</button>
            <div>
      <Button text="Click me!" onClick={() => alert("Button clicked!")} />
   
    </div>
          </li>
          
          ))}
        </ul>
      </section>
            
            
    </Layout>
  );  
};

