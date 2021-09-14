import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "../modules/common/components/Footer";
import { Header } from "../modules/common/components/Header";
import { About } from "../modules/About";
import { PostsLists } from "../modules/PostsList";

export const CustomRouter: React.FC = () => {
  return (
    <Router>
      <Container fixed>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <PostsLists />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};
