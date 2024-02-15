import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <h1 > My first react project</h1>
      <Link href="/about">to the about</Link>
      <br></br>
      <Link href="/contact">to the contact</Link>
    </div>
  
  )
}
