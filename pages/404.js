// pages/404.js

import Image from 'next/image';
import Layout, { siteTitle } from '../components/Layout';
import '../styles/Home.module.css';

export default function Custom404() {
 
    return (
    <div><Image
      priority
      src="/images/error404.jpg"
      width={550}
      height={550}
      alt="404 error page"
   />
  <button> <a href='/'>go back home</a></button>
  </div>
    )   
  }
  
  
