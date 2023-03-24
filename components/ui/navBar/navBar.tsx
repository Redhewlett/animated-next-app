import Link from "next/link"
import styled from "styled-components"

const Nav = styled.nav`
  width: 100vw;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rem;
  padding: 4rem 1rem;
  background-color: var(--body-bg);
  border-bottom: 0.1em solid var(--accent-color);
  font-size: 1rem;
  font-weight: 600;
  ul {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding-right: 2rem;
  }
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
  a:hover {
    color: var(--accent-color);
  }
`

export default function NavBar({ activeLink, setActiveLink }: { activeLink: string; setActiveLink: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <Nav>
      <h1>My favorite Manga</h1>
      <ul>
        <li>
          <Link href='/' style={{ color: activeLink === "/" ? "var(--accent-color)" : "var(--primary-color)" }}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about' style={{ color: activeLink === "/about" ? "var(--accent-color)" : "var(--primary-color)" }}>
            About
          </Link>
        </li>
      </ul>
    </Nav>
  )
}
