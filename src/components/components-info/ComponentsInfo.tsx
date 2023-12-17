import React from 'react';
import './ComponentsInfo.scss';

type ExtensionsInfoProps = {
  title: string;
  text: string;
  classNamePrefix: string;
};
export const ExtensionsInfo: React.FC<ExtensionsInfoProps> = ({
  classNamePrefix,
  title,
  text,
}) => {
  const combinedClassName = `${classNamePrefix}-info info`;

  return (
    <div className={combinedClassName}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
