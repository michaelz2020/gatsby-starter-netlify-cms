import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { setUSCasesOptions } from "../lib/chartOptions"

const Chart = ({ data }) => {
  //   const classes = useStyles()
  return (
    <div>
      {!data && <p>loading data</p>}
      {data && (
        <HighchartsReact
          highcharts={Highcharts}
          options={setUSCasesOptions(data)}
        />
        // <div className={classes.root}>
        //   {!data && <p>loading data</p>}
        //   {data && (
        //     <HighchartsReact
        //       className={classes.paper}
        //       highcharts={Highcharts}
        //       options={setUSCasesOptions(data)}
        //     />
        // <Grid container spacing={2}>
        //   <Grid item xs={12}>
        //     <HighchartsReact
        //       className={classes.paper}
        //       highcharts={Highcharts}
        //       options={setUSCasesOptions(data)}
        //     />
        //   </Grid>
        //   <Grid item xs={12}>
        //     <Divider className={classes.divider} />
        //   </Grid>
        //   <Grid item xs={9}>
        //       <HighchartsReact
        //         className={classes.paper}
        //         highcharts={Highcharts}
        //         options={setPopulationOptions(data)}
        //       />
        //     </Grid>
        // </Grid>
      )}
    </div>
  )
}

export default Chart
