/* eslint-disable react-hooks/exhaustive-deps */
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const Scanner = ({ successRes }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 200,
        height: 200,
      },
      fps: 10,
    });
    const successCallback = (decodedText, decodedResult) => {
      scanner.clear();
      successRes({ decodedText: decodedText, decodedResult: decodedResult });
    };
    scanner.render(successCallback);
  }, []);

  return (
    <div
      id='reader'
      style={{
        height: 500,
        width: 500,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        // overflow: "hidden",
        flexDirection: "column",
      }}
    />
  );
};
export default Scanner;
