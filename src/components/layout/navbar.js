
// reactstrap components
import { useState, useEffect } from "react";
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
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="primary" >
        <Container fluid>
          <div className="navbar-translate ">
            
              <NavbarBrand
                target="_blank"
                id="navbar-brand"
              >
                <Link href="/" passHref>
                  <img src={"/assets/img/logo@2x-branco.png"} width="100" height="48" style={{maxWidth: 100}} alt="Logo Achei fornecedor"/>
                </Link>
              </NavbarBrand>

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
            <NavItem className="d-flex justify-content-center align-items-center">
              <div className="text-center">
                  <a target="_blank" rel='noreferrer noopener' href="https://www.facebook.com/Achei-Fornecedor-113737716707790/" className="btn btn-primary btn-icon btn-nav btn-sm btn-round"><i className="fab fa-facebook-square" /></a>
                  <a target="_blank" rel='noreferrer noopener' href="https://www.linkedin.com/company/acheifornecedor/" className="btn btn-primary btn-icon btn-nav btn-sm btn-round"><i className="fab fa-linkedin-in" /></a>
                  <a target="_blank" rel='noreferrer noopener' href="https://www.instagram.com/acheifornecedor/?igshid=bpakap0k1iae" className="btn btn-primary btn-icon btn-nav btn-sm btn-round"><i className="fab fa-instagram" /></a>
              </div>
            </NavItem>
            <NavItem>
                <a
                  className="btn nav-link btn-neutral btn-round text-center text-primary"
                  href="https://acheifornecedor.com"
                  target="_blank"
                  rel="noopener noreferrer"> 
                  Conheça
                </a>
              </NavItem>
              <NavItem >
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
