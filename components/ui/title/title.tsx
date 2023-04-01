import { motion } from "framer-motion"
import styled from "styled-components"
import BlUE_PAINT_PATH from "./assets/blue_brush_stroke.png"
import Image from "next/image"

// mix it up with styled components ✌
const Container = styled(motion.div)`
  height: max-content;
  position: relative;
  margin-top: 8rem;
  margin-bottom: 4rem;
  h2 {
    margin: 0;
    z-index: 1;
  }
  img {
    position: absolute;
    top: -200%;
    left: -4%;
    z-index: -1;
    transform: rotate(180deg);
  }
`

export default function Title({ title, main }: { title: string; main?: boolean }) {
  // title should be short enough to fit in the image even with the calc below
  const originalImageWidth = 850
  const imageWidth = title.length < 20 ? originalImageWidth / 2 : originalImageWidth
  return (
    <Container style={{ x: -40 }} animate={{ x: 0 }}>
      <motion.h2 style={{ x: -30 }} animate={{ x: 0 }} transition={{ duration: 300, type: "spring", stiffness: 100 }}>
        {title}
      </motion.h2>
      {main && <Image src={BlUE_PAINT_PATH} alt='blueStroke' width={imageWidth} height={237} />}
    </Container>
  )
}
