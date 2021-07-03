
// reactstrap components
import { useState, useEffect } from "react";
import Image  from "next/image"
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import Link from "next/link"
function IndexNavbar() {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 40 ||
        document.body.scrollTop > 40
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 41 ||
        document.body.scrollTop < 41
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, );
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="white" >
        <Container fluid>
          <div className="navbar-translate">
            <Link href="/">
              <NavbarBrand
                target="_blank"
                id="navbar-brand"
              >
                <Image src={"/assets/img/logo@2x.png"} width="100" height="48" style={{maxWidth: 100}} alt="Logo Achei fornecedor"/>
              </NavbarBrand>
            </Link>

            <UncontrolledTooltip target="#navbar-brand">
              Achei fornecedor
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav  
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              navbar className="mr-auto">

            </Nav>
            <Nav navbar >
            <NavItem>
                <a
                  className="btn nav-link btn-neutral btn-round text-center text-primary"
                  href="https://acheifornecedor.com"
                  target="_blank"
                  rel="noopener noreferrer"> 
                  Conheça
                </a>
              </NavItem>
              <NavItem>
                    <a 
                    href="https://www.acheifornecedor.com/cadastro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn nav-link btn-neutral btn-round text-center text-primary"> Cadastra-se</a>
              </NavItem>
              </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
