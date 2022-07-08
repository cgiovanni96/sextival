type Props = {
  color?: string;
  width?: number;
  strokeWidth?: number;
  height?: number;
};

export const Nassa = ({
  color = "rgba(255,255,255,0.6)",
  width,
  height,
  strokeWidth = 2,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 188.99 235.33"
      width={width}
      height={height}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
    >
      <path d="M158.81,182.88l-7.52-14.48L165.55,161,159,148.48l-14.22,7.39-7.52-14.47L151.42,134l-6.56-12.51-14.13,7.34-8.12-15.62,14.07-7.32-6.56-12.51-14,7.29-6.16-11.85c-.66-1.26-1.33-2.51-2-3.74l12.86-6.69c-.27-.53-3.7-7.43-6.14-12.73l-14,7.26A176.83,176.83,0,0,0,90.3,58.5l11.75-6.11a87.16,87.16,0,0,1,23.5,28.34l6.16,11.85h0l2.76,5.26,40,76.91L187,168.24l-48.88-94A101.34,101.34,0,0,0,46.15,19.66L37,2,24.45,8.54,11.91,15.06l9.17,17.63a101.34,101.34,0,0,0-8.16,106.59l48.88,94,12.53-6.52-7.52-14.47,10.62-5.52L70.9,194.27l-10.61,5.51-7.52-14.46,10.6-5.51-6.53-12.53-10.59,5.5-8.12-15.62,10.58-5.5-6.53-12.53-10.56,5.49-6.17-11.85c-.65-1.27-1.27-2.54-1.86-3.82l9.13-4.74s-2.34-7.88-4.19-13.75l-9.81,5.1a87,87,0,0,1-3-18.31l8.42-4.37c-.21-2.2-.87-9.4-1.07-15.37L16.41,81a87.6,87.6,0,0,1,5.52-21c.17,3,.45,6,.87,9.18q.51,3.87,1.28,7.82h0l0,.09c.88,4.55,2,9.17,3.35,13.83l.05.22h0a174.85,174.85,0,0,0,5.86,16.8h0l.09.19q2.43,6,5.33,11.93l.36.8h0c.62,1.26,1.26,2.53,1.91,3.78l48.89,94,12.53-6.52L95,197.69l12.13-6.3-6.51-12.54-12.13,6.3-7.53-14.47,12.14-6.29-6.52-12.54-12.13,6.3L66.3,142.53l12.13-6.3-6.52-12.54L59.78,130l-6.17-11.86c-.65-1.25-1.28-2.51-1.89-3.77l11.47-5.93c0-.13-3.21-7.62-5.23-13.26l-12,6.22a163.7,163.7,0,0,1-5.63-16.93L48.88,80c-.29-1.2-1.8-7.52-3.56-14.07l-8.06,4.19a90.46,90.46,0,0,1-.95-23.47l24.45,47h0l6.49,12.56,0,0,8.13,15.62h0l6.52,12.54h0L90,150h0l6.52,12.54h0L104.07,177h0l6.51,12.54h0L118.11,204l12.54-6.51L123.13,183l13.33-6.93-6.53-12.53-13.32,6.93L109.09,156l13.32-6.93-6.53-12.53-13.31,6.92-8.12-15.62,13.3-6.92-6.52-12.53-13.3,6.91L79.81,99.72l12-6.26S88.31,86,85.67,80.75L73.29,87.19,65.17,71.56l12.28-6.38a163,163,0,0,1,11.3,15.39l6.62,11.06h0c.68,1.23,1.36,2.48,2,3.74l6.16,11.85,0,0L110,119.78l0,0,8.12,15.62h0l6.52,12.54h0l7.52,14.47h0l6.53,12.53h0l7.52,14.48ZM88.36,43.58l-7.66,4C78.83,45.65,77,43.79,75,42c-2.33-2.15-4.68-4.14-7-6A87.14,87.14,0,0,1,88.36,43.58ZM48.85,40.16A90.86,90.86,0,0,1,67.52,54.42L58.66,59Z" />
    </svg>
  );
};
