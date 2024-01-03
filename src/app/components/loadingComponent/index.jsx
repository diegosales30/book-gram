"use client";
import styles from './loading.module.scss';
import loading from '../../assets/loading.gif'
import Image from 'next/image';
function Loading () {

  return (
    <div className={styles.container}>
      <Image src={loading} alt="loading" width={320} height={320} />
    </div>
  )
}

export default Loading;