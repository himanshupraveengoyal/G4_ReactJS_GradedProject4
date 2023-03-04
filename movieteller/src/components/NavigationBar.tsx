import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample(props: any) {
  const navigationBarCategorySelection = props.navigationBarCategorySelection;
  const sortDataBasedOnInput = props.sortDataBasedOnInput;

  const performAction = (parameter: any) => (event: any) => {
    event.preventDefault();
    navigationBarCategorySelection(parameter)
  }

  const ChangeOfInput = (event: any) => {
    console.log(event.target.value)
    sortDataBasedOnInput(event.target.value)
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/threatres" onClick={performAction("Movie in Threatres")}>Movie in Threatres</Nav.Link>
            <Nav.Link href="/comingsoon" onClick={performAction("Coming Soon")}>Coming Soon</Nav.Link>
            <Nav.Link href="/topRtedIndians" onClick={performAction("Top Rated Indian")}>Top Rated Indian</Nav.Link>
            <Nav.Link href="/TopRatedMovies" onClick={performAction("Top Rated Movies")}>Top Rated Movies</Nav.Link>
            <Nav.Link href="/Favourites" onClick={performAction("Favourites")}>Favourites</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={ChangeOfInput}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;