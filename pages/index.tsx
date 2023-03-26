import Head from "next/head"
import styles from "@/styles/Home.module.css"
import Title from "@/components/ui/title/title"

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Next App</title>
        <meta name='description' content='Next App animated with Framer-Motion' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Title title='Welcome to My Favorite Manga' subtitle='A personnal page where i talk about some of my favorite manga and try to get you to like them(?)' />
    </>
  )
}
