import Link from "next/link"
import styled from "styled-components"

const Nav = styled.nav`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10rem;
  padding: 2rem 1rem;
  background-color: var(--body-bg);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.42);
  font-size: 1.5rem;
  font-weight: 600;
  ul {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-size: 1rem;
  }

  .active a {
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.45, -0.54, 0.51, 1.54);
    animation-fill-mode: forwards;
    animation-name: borderDown;
  }

  .regular a {
    color: white;
    padding-bottom: 0rem;
    border-bottom: none;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }
  a:hover {
    color: var(--accent-color);
  }

  @keyframes borderDown {
    from {
      color: white;
      padding-bottom: 0rem;
      border-bottom: 0px solid white;
    }
    to {
      font-weight: 700;
      color: var(--accent-color);
      border-bottom: 1px solid var(--accent-color);
      padding-bottom: 1.4rem;
    }
  }
`

export default function NavBar({ activeLink, setActiveLink }: { activeLink: string; setActiveLink: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <Nav>
      <h1>MFM</h1>
      <ul>
        <li className={activeLink === "/" ? "active" : "regular"}>
          <Link href='/'>Home</Link>
        </li>
        <li className={activeLink === "/about" ? "active" : "regular"}>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </Nav>
  )
}
