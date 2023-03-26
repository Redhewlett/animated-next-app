import { motion } from "framer-motion"
import styled from "styled-components"

// mix it up with styled components ✌
const Container = styled(motion.div)`
  height: max-content;
  h2 {
    margin-bottom: 0rem;
  }
`

export default function Title({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Container style={{ x: -40 }} animate={{ x: 0 }}>
      <motion.h2 style={{ x: -30 }} animate={{ x: 0 }} transition={{ duration: 300, type: "spring", stiffness: 100 }}>
        {title}
      </motion.h2>
      <motion.h3 style={{ x: 20 }} animate={{ x: 0 }} transition={{ duration: 300, type: "spring", stiffness: 100, delay: 0.1 }}>
        {subtitle}
      </motion.h3>
    </Container>
  )
}
