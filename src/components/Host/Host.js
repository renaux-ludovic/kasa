import React from 'react';
import style from '../../sass/components/Host/host.module.scss'

export default function Host(  {hostName,
    hostPicture}) {

    return (
        <div className={style.hostContainer}>
        <p>{hostName}</p>
        <div className={style.imageContainer}>
          <img src={hostPicture} alt={hostName} />
        </div>
      </div>
    )
}