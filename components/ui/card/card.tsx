import { useEffect, useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion"

const Card = styled(motion.div)`
  width: 300px;
  height: 430px;
  position: relative;
  text-align: left;
  color: black;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  :hover {
    cursor: zoom-in;
  }
  &[data-isopen="true"] {
    width: 600px;
    position: absolute;
    :hover {
      cursor: pointer;
    }
  }
`
const CardContainer = styled(motion.div)`
  width: 22rem;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  &[data-isopen="true"] {
    z-index: 2;
  }
`

const cardVariants: Variants = {
  offscreen: {
    y: 0
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

export default function CardComponent({ background, id }: { background: string; id: string }) {
  const cardControls = useAnimation()
  const [isClicked, setIsClicked] = useState(false)

  const handleHover = () => {
    cardControls.start("hover")
  }
  const handleHoverOut = () => {
    cardControls.start("notHover")
    if (isClicked) {
      setIsClicked((prev) => !prev)
    }
  }

  return (
    <>
      <CardContainer layout data-isopen={isClicked} animate={cardControls} initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }}>
        <Card
          layout
          transition={{ duration: 0.6 }}
          variants={cardVariants}
          data-isopen={isClicked}
          onClick={() => setIsClicked((prev) => !prev)}
          id={id}
          onHoverStart={handleHover}
          onHoverEnd={handleHoverOut}
        >
          <motion.h1 transition={{ duration: 0.6 }} layout='position'>
            Card {id}
          </motion.h1>
        </Card>
      </CardContainer>
    </>
  )
}
