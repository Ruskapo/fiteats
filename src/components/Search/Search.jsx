import styles from "./Search.module.scss";
const Search = ({value, onChange}) => {
  return (
    <div className={styles.search}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        placeholder="Поиск рецептов..."
      />
    </div>
  );
};

export default Search;
