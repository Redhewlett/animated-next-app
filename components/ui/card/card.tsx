import { useEffect } from "react"
import styled from "styled-components"
import { motion, useAnimation, Variants } from "framer-motion"

const Card = styled(motion.div)`
  width: 300px;
  height: 430px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
`
const CardContainer = styled(motion.div)`
  width: 22rem;
  height: 34rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`
const CardBackground = styled(motion.div)`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  z-index: -1;
`

const cardVariants: Variants = {
  offscreen: {
    y: 350
  },
  onscreen: {
    y: 100,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
  hover: {
    y: 10,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.4
    }
  },
  notHover: {
    y: 100,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.4
    }
  }
}

export default function CardComponent({ background }: { background: string }) {
  const cardControls = useAnimation()

  const handleHover = () => {
    cardControls.start("hover")
  }
  const handleHoverOut = () => {
    cardControls.start("notHover")
  }

  return (
    <CardContainer animate={cardControls} initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }}>
      <Card variants={cardVariants} whileTap={{ scale: 1.1 }} onHoverStart={handleHover} onHoverEnd={handleHoverOut}>
        <h1>Card</h1>
      </Card>
      <CardBackground style={{ background: background }} />
    </CardContainer>
  )
}
