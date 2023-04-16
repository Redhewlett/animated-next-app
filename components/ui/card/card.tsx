import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import styled from "styled-components"
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion"

const Card = styled(motion.div)`
  width: 100%;
  height: 80%;
  padding: 0.5rem;
  position: relative;
  display: flex;
  text-align: left;
  color: black;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.54);

  :hover {
    cursor: zoom-in;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: calc(20px - 0.5rem);
  }
  &[data-isopen="true"] {
    width: 100%;
    position: absolute;
    top: 20%;
    left: 0;
    box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.32);
    article {
      width: 65%;
      height: 100%;
      padding: 1rem 3rem 1rem 1rem;
      overflow: auto;
    }
    img {
      width: 30%;
      height: 100%;
    }
    :hover {
      cursor: pointer;
    }
  }
`
const CardContainer = styled(motion.div)`
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  &[data-isopen="true"] {
    z-index: 2;
  }
`

const cardVariants: Variants = {
  offscreen: {
    y: 100
  },
  onscreen: {
    y: -50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
  hover: {
    y: -70,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.5
    }
  },
  notHover: {
    y: -50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.1
    }
  }
}

export interface CardData {
  id: string
  title: string
  description: string
  plot: string
  image: string
}

export default function CardComponent({ data }: { data: CardData }) {
  const { id, title, description, plot, image } = data
  const cardControls = useAnimation()
  const [isOpened, setIsOpened] = useState(false)

  const handleHover = () => {
    cardControls.start("hover")
  }
  const handleHoverOut = () => {
    cardControls.start("notHover")
    // if (isOpened) {
    //   setIsOpened((prev) => !prev)
    // }
  }

  return (
    <>
      <CardContainer layout data-isopen={isOpened} animate={cardControls} initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }}>
        <Card
          layout
          transition={{ duration: 0.6 }}
          variants={cardVariants}
          data-isopen={isOpened}
          onClick={() => setIsOpened((prev) => !prev)}
          id={id}
          onHoverStart={handleHover}
          onHoverEnd={handleHoverOut}
        >
          <motion.img layout transition={{ duration: 0.6 }} src={image} alt={title} />

          {isOpened && (
            <motion.article>
              <motion.h1 transition={{ duration: 0.6 }} layout='position'>
                {title}
              </motion.h1>
              <motion.p transition={{ duration: 0.6 }} layout='position'>
                {description}
              </motion.p>
              <motion.p transition={{ duration: 0.6 }} layout='position'>
                {plot}
              </motion.p>
            </motion.article>
          )}
        </Card>
      </CardContainer>
    </>
  )
}
