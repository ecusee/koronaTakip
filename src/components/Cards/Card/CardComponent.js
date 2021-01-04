import React from "react";
import { CardContent, Typography, Grid, Card } from "@material-ui/core";

import styles from './Card.module.css'

const CardComponent = ({ className, cardTitle, value, lastUpdate, cardSubtitle }) => {

  const nf = new Intl.NumberFormat()

  return (
    <div className={styles.cardContainer}>
      <Grid item xs={12} xm={3} component={Card} className={className}>
      <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {cardTitle}
          </Typography>
          <Typography variant="h5">
            {nf.format(value)}
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="subtitle2">{cardSubtitle}</Typography>
        </CardContent>
    </Grid>
    </div>
  );
};

export default CardComponent;
