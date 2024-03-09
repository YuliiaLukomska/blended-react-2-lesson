import css from './Grid.module.css';

export const Grid = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};
