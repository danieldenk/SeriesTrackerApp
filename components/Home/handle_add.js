
import React, { useState, useEffect } from "react";
import styles from "../../styles/styles";

/*
  This component takes care of handling the event of a series that is being added to the list
  If no data was returned from the API for a series, we are setting a default image
*/
export default function handleAdd(
    getSeriesState,
    updateSeriesState,
    seriesTitle,
    seriesSeason,
    seriesEpisode,
    setSave,
    setVisible,
    setJsonObjIMG,
    jsonObjIMG
  ) {
    if (
      0 == getSeriesState.filter((s) => s.name === seriesTitle).length &&
      seriesTitle !== ""
    ) {
      updateSeriesState([
        ...getSeriesState,
        {
          key: seriesTitle,
          name: seriesTitle,
          img:
            jsonObjIMG.Response === "False"
              ? "https://www.adweek.com/wp-content/uploads/sites/2/2015/09/Temporary.jpg"
              : jsonObjIMG.Poster,
          season: seriesSeason,
          episode: seriesEpisode,
        },
      ]);
      setSave(true);
      setVisible(true);
      return true;
    }
    console.log(getSeriesState);
    return false;
  }