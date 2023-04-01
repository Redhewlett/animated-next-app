import Head from "next/head"
import styles from "@/styles/Home.module.css"
import Title from "@/components/ui/title/title"
import CardComponent from "@/components/ui/card/card"

function Intro() {
  return (
    <section className={styles.home__intro}>
      <p>
        Welcome to my website about manga ! I am passionate about Japanese comics and graphic novels.
        <br /> This website is dedicated to my stories. I will make you fall in love with these stories as much as I do.
        <br /> No spoilers !
      </p>
    </section>
  )
}

function SectionTopThree() {
  return (
    <section className={styles.home__topThree}>
      <Title title='My top 3 of all times' />
      <h3>
        Some titles will forever be in my heart. I will never forget the first time I read them.
        <br /> I will never forget the emotions they gave me. Dragon Ball Z is one of those titles.
        <br />
        However to me those titles are not in, because they are too mainstream.
      </h3>
      <div className={styles.home__topThree__container}>
        <CardComponent />

        <div className={styles.home__topThree__card}>
          <img src='/images/one-piece.jpg' alt='One Piece' />
          <h4>One Piece</h4>
        </div>
        <div className={styles.home__topThree__card}>
          <img src='/images/berserk.jpg' alt='Berserk' />
          <h4>Berserk</h4>
        </div>
        <div className={styles.home__topThree__card}>
          <img src='/images/bleach.jpg' alt='Bleach' />
          <h4>Bleach</h4>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>MFM - My Favorite Manga !</title>
        <meta name='description' content='A Next App dedicated to manga, animated with Framer-Motion' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Title title='Welcome to My Favorite Manga' main />
      <Intro />
      <SectionTopThree />
    </>
  )
}
