import Head from "next/head"
import styles from "@/styles/Home.module.css"
import Title from "@/components/ui/title/title"
import CardComponent from "@/components/ui/card/card"
import { CardData } from "@/components/ui/card/card"
// images
import ajin_cover from "@/public/assets/images/ajin_cover.png"
import my_hero_ac_cover from "@/public/assets/images/boku_no_hero_ac_cover.png"
import knight_of_sidonia_cover from "@/public/assets/images/knight_of_sidonia_cover.png"

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

const topThree: CardData[] = [
  {
    id: "795a8c78",
    title: "Knight of Sidonia",
    description:
      "A manga series written and illustrated by Tsutomu Nihei. It was serialized in Kodansha's Young Magazine from 2007 to 2015, and collected in 15 volumes.",
    plot: "The story is set in the year 3394, a thousand years after mankind flees from Earth after it was destroyed by a race of shapeshifting aliens, the Gauna (奇居子ガウナ), aboard hundreds of colossal spacecraft created from the remains of the planet. One such ship is the Sidonia, which has developed its own human culture closely based on that of Japan where human cloning, asexual reproduction, and human genetic engineering, such as granting humans photosynthesis, are commonplace...",
    image: "./assets/images/knight_of_sidonia_cover.png"
  },
  {
    id: "80861dfa",
    title: "Ajin",
    description:
      "series written and illustrated by Gamon Sakurai. It was serialized in Kodansha's seinen manga magazine Good! Afternoon from July 2012 to February 2021 and was collected into 14 volumes.",
    plot: 'Ajin presents the story of a student named Nagai Kei, who discovers he is an "Ajin" when he is fatally wounded in a traffic accident. In the world of Ajin, a small number of humans (termed "Ajin") possess immortality and extreme regenerative abilities that trigger upon death, allowing them to completely recover from any mortal injury in a matter of seconds...',
    image: "./assets/images/ajin_cover.png"
  },
  {
    id: "892c97a4",
    title: "My Hero Academia",
    description:
      " is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Weekly Shōnen Jump since July 2014, with its chapters additionally collected into 30 tankōbon volumes as of March 2021(34 volumes atm).",
    plot: 'The story of My Hero Academia is set in a world where currently most of the human population has gained the ability to develop superpowers called "Quirks" (個性, Kosei), which occur in children within the age of four: it is estimated that around 80% of the world population has a Quirk. There are an endless number of Quirks, and it is extremely unlikely to find two people who have the exact same power, unless they are closely related. Among the Quirk-enhanced individuals, a few of them earn the title of Heroes, who cooperate with the authorities in rescue operations and apprehending criminals who abuse their powers, commonly known as Villains...',
    image: "./assets/images/boku_no_hero_ac_cover.png"
  }
]

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
        {topThree.map((data) => {
          return <CardComponent key={data.id} data={data} />
        })}
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
