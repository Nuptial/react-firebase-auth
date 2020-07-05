import React from "react";
import Header from './header/header';

import CardsWrapper from "../../components/CardsWrapper/cardsWrapper";
import Card from '../../components/Card/card';

import ChartWrapper from "../../components/ChartWrapper/chartWrapper";
import Chart from '../../components/Chart/chart';

const Home = () => {
  return (
    <>
      <Header></Header>
      <CardsWrapper>
        <Card
          icon={"fa fa-user"}
          title={"Active Users"}
          value={"1234"}
          description={"Live user count"}
          iconBackgroundColor={"#fe8479"}
          endpoint={
            "https://codeway-dummy-rest-api.herokuapp.com/someapp/rt/activeUsers"
          }
        ></Card>
        <Card
          icon={"fa fa-download"}
          title={"Downloads"}
          value={"5324"}
          description={"Total install count"}
          iconBackgroundColor={"#d550d7"}
          endpoint={
            "https://codeway-dummy-rest-api.herokuapp.com/someapp/rt/downloads"
          }
        ></Card>
        <Card
          icon={"fa fa-eye"}
          title={"Avg. Session Duration"}
          value={"17.1 mins"}
          description={"Total view count"}
          iconBackgroundColor={"#03dad0"}
          endpoint={
            "https://codeway-dummy-rest-api.herokuapp.com/someapp/rt/sessionDuration"
          }
        ></Card>
        <Card
          icon={"fa fa-download"}
          title={"Paying Users"}
          value={"2423"}
          description={"Total paying user count"}
          iconBackgroundColor={"#f85074"}
          endpoint={
            "https://codeway-dummy-rest-api.herokuapp.com/someapp/rt/paidUsers"
          }
        ></Card>
      </CardsWrapper>
      <ChartWrapper title={"Daily Active Users"}>
        <Chart
          endpoint={
            "https://codeway-dummy-rest-api.herokuapp.com/someapp/daily/downloads"
          }
        ></Chart>
      </ChartWrapper>
      <ChartWrapper title={"Daily Installs"}>
        <Chart
          endpoint={
            "https://codeway-dummy-rest-api.herokuapp.com/someapp/daily/activeUsers"
          }
        ></Chart>
      </ChartWrapper>
    </>
  );
};

export default Home;
