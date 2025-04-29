import React from 'react';
import styles from './styles/AnimationTitle.module.css'; // CSS Modulesをインポート

export default function AnimationTitle() {
  const titleChars1 = [...'未来の恋が、'];
  const titleChars2 = [...'見えてきた。'];

  return (
    <div className={`${styles.animationTitle} text-[20px] leading-[30px] tracking-160 md:text-[30px] md:leading-[50px] lg:leading-none`}>
      <div className={styles.firstLine}>
        {titleChars1.map((char, index) => (
          <span
            key={char + index}
            className={styles.char}
            style={{ animationDelay: `${index * 160 + 600}ms` }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className={`${styles.secondLine} lg:inline-block`}>
        {titleChars2.map((char, index) => (
          <span
            key={char + index}
            className={styles.char}
            style={{ animationDelay: `${(titleChars1.length + index) * 160 + 600}ms` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
