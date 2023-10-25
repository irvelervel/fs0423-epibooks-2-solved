import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'
// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import SingleBook from './components/SingleBook'
import fantasyBooks from './data/fantasy.json'
import BookList from './components/BookList'

function App() {
  return (
    <Container>
      <MyNav />
      <MyJumbotron />
      {/* <AllTheBooks /> */}
      {/* <SingleBook book={fantasyBooks[10]} /> */}
      <BookList manyBooks={fantasyBooks} />
      <MyFooter />
    </Container>
  )
}

export default App
