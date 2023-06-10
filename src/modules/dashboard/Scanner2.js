/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const Scanner2 = ({ onSuccess }) => {
  const [data, setData] = useState([]);

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(_, result) => {
          if (result) {
            onSuccess(result.text);
          }
        }}
        delay={300}
        // facingMode="environment"
      />
    </>
  );
};
export default Scanner2;
