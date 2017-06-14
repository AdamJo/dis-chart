import React, { Component } from 'react';
import style from './index.css';

import shortid from 'shortid'

const ChartRow = class ChartRow extends Component {
  render() {
    return (
      <div className={style.chartRow}>
        {
          this.props.data.map(row => {
            return (
              <div key={shortid.generate()} className={style.row}>
                <div>
                  {row.FirstName}
                </div>
                <div>
                  {row.LastName}
                </div>
                <div>
                  {row.Country}
                </div>
                <div>
                  {row.Street}
                </div>
                <div>
                  {row.City}
                </div>
                <div>
                  {row.State}
                </div>
                <div>
                  {row.Zip}
                </div>
                <div>
                  {row.Phone}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

};

export default ChartRow;