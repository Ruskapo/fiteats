import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

const Sceleton = () => {
  return (
    <div className={styles.card}>
      <ContentLoader
        speed={2}
        width="100%"
        height={140}
        viewBox="0 0 600 140"
        backgroundColor="#dfeaff"
        foregroundColor="#cfe0ff"
      >
        <rect x="0" y="0" rx="12" ry="12" width="520" height="26" />
        <rect x="0" y="40" rx="10" ry="10" width="220" height="16" />
        <rect x="0" y="70" rx="18" ry="18" width="90" height="30" />
        <rect x="110" y="70" rx="18" ry="18" width="90" height="30" />
        <rect x="220" y="70" rx="18" ry="18" width="90" height="30" />
        <rect x="540" y="10" rx="12" ry="12" width="44" height="44" />
      </ContentLoader>
    </div>
  );
};

export default Sceleton;
