import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img
        src={`https://flagcdn.com/32x24/${country.emoji?.toLowerCase()}.png`}
        alt={country.emoji}
      />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
