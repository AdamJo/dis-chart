import React, { Component } from 'react';
import style from './index.css';

import { listHeaders } from '.././../../helpers'
import shortid from 'shortid'

const ListHeader = class ListHeader extends Component {
  render() {
    return (
      <div className={style.listHeader}>
        {listHeaders.map(data => {
          return <div key={shortid.generate()}>{data}</div>;
        })}
      </div>
    )
  }
};

export default ListHeader;