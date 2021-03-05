import React from 'react';
import styles from './[id].less';

export default function Page(props) {
  const { id } = props.match.params;
  return (
    <div>
      <h1 className={styles.title}>Page user/index{id}</h1>
    </div>
  );
}
