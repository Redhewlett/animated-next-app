import React, { useEffect, useState } from "react"
import NavBar from "./ui/navBar/navBar"
import { useRouter } from "next/router"

// type
type LayoutProps = React.PropsWithChildren<{}>

export default function Layout({ children }: LayoutProps) {
  const [activeLink, setActiveLink] = useState<string>("")
  const router = useRouter()

  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router])

  return (
    <>
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
      <main>{children}</main>
    </>
  )
}
