export const WarningIcons = ({ height = "18px", width = "18px" }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      fill='#8e4b10'
    >
      <path d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' />
    </svg>
  );
};
export const ErrorIcons = ({ height = "18px", width = "18px" }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      fill='#c81e1e'
    >
      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' />
    </svg>
  );
};
export const InfoIcons = ({ height = "18px", width = "18px" }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      fill='#1a56db'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z' />
    </svg>
  );
};
export const SuccessIcons = ({ height = "18px", width = "18px" }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 24 24'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      fill='#046c4e'
    >
      <rect fill='none' height='24' width='24' />
      <path d='M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z' />
    </svg>
  );
};
export const DefaultIcons = ({ height = "18px", width = "18px" }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 24 24'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      fill='#374151'
    >
      <g>
        <rect fill='none' height='24' width='24' />
      </g>
      <g>
        <path d='M14.5,2.5c0,1.5-1.5,6-1.5,6h-2c0,0-1.5-4.5-1.5-6C9.5,1.12,10.62,0,12,0S14.5,1.12,14.5,2.5z M12,10c-1.1,0-2,0.9-2,2 s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z M16.08,5.11c0.18-0.75,0.33-1.47,0.39-2.06C19.75,4.69,22,8.08,22,12c0,5.52-4.48,10-10,10 S2,17.52,2,12c0-3.92,2.25-7.31,5.53-8.95C7.6,3.64,7.74,4.37,7.92,5.11C5.58,6.51,4,9.07,4,12c0,4.42,3.58,8,8,8s8-3.58,8-8 C20,9.07,18.42,6.51,16.08,5.11z M18,12c0,3.31-2.69,6-6,6s-6-2.69-6-6c0-2,0.98-3.77,2.48-4.86c0.23,0.81,0.65,2.07,0.65,2.07 C8.43,9.93,8,10.92,8,12c0,2.21,1.79,4,4,4s4-1.79,4-4c0-1.08-0.43-2.07-1.13-2.79c0,0,0.41-1.22,0.65-2.07C17.02,8.23,18,10,18,12 z' />
      </g>
    </svg>
  );
};
