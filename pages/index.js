import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Login from './components/Login'
import { useAuthContext } from './context/AuthContext'

export default function Home() {

  return (
    <Login />
  )
}
