import css from './GridItem.module.css';

export const GridItem = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};
