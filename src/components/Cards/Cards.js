import React from "react";
import CardComponent from "./Card/CardComponent";
import { Grid } from "@material-ui/core";

import SkeletonComponent from "./Skeleton/SkeletonComponent";

import styles from "./Cards.module.css";

const Cards = ({  data: { confirmed, recovered, deaths, lastUpdate }}) => {
  if (!confirmed) {
    return (
      <div className={styles.loadingCard}>
        <SkeletonComponent />
      </div>
    );
  }

  return (
    <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <CardComponent
            className={styles.infected}
            cardTitle="Hastalikli"
            value={confirmed.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Hastaliga Yakalanan"
          />

          <CardComponent
            className={styles.recovered}
            cardTitle="Iyilesen"
            value={recovered.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Iyilesen Hasta Sayisi"
          />

          <CardComponent
            className={styles.deaths}
            cardTitle="Olum"
            value={deaths.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Corona Sebebiyle Gerceklesen Olum"
          />
        </Grid>
      </div>
  );
};

export default Cards;
