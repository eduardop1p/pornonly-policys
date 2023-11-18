import styles from './styles.module.css';

export default function Loading() {
  return (
    <div className={styles['container-loading']} title="Enviando">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: 'auto',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width="25px"
        height="25px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#fff"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
}
