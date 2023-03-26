import { motion } from "framer-motion"
import styled from "styled-components"

// mix it up with styled components ✌
const Container = styled(motion.div)`
  h2 {
    margin-bottom: 2rem;
  }
`

export default function Title({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Container style={{ x: 0 }} animate={{ x: 20 }}>
      <motion.h2 style={{ x: 0 }} animate={{ x: 50 }} transition={{ type: "spring", stiffness: 100 }}>
        {title}
      </motion.h2>
      <motion.p style={{ x: 0 }} animate={{ x: 50 }} transition={{ type: "spring", stiffness: 100, delay: 0.1 }}>
        {subtitle}
      </motion.p>
    </Container>
  )
}
