import styled from "styled-components"
import { motion, useAnimation, Variants } from "framer-motion"
import { useEffect, useState } from "react"

const Card = styled(motion.div)`
  width: 300px;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 60%;
`
const CardContainer = styled(motion.div)`
  overflow: hidden;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: cornflowerblue;
`
const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export default function CardComponent() {
  return (
    <CardContainer initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }}>
      <Card variants={cardVariants}>
        <h1>Card</h1>
      </Card>
    </CardContainer>
  )
}
