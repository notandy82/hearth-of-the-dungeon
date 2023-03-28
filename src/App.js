import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PartyCreateForm from "./pages/parties/PartyCreateForm";
import PartyPage from "./pages/parties/PartyPage";
import NotFound from "./components/NotFound";


function App() {

  return (    
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/parties/create" render={() => <PartyCreateForm />} />
          <Route exact path="/parties/:id" render={() => <PartyPage />} />
          <Route exact path="/post/:id" render={() => <PostPage />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>    
  );
}

export default App;