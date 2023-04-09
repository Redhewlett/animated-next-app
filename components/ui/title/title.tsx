import { motion } from "framer-motion"
import styled from "styled-components"

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
`

export default function Title({ title, main }: { title: string; main?: boolean }) {
  // title should be short enough to fit in the image even with the calc below
  const originalImageWidth = 850
  return (
    <Container style={{ x: -40 }} animate={{ x: 0 }}>
      <motion.h2 style={{ x: -30 }} animate={{ x: 0 }} transition={{ duration: 300, type: "spring", stiffness: 100 }}>
        {title}
      </motion.h2>
    </Container>
  )
}
