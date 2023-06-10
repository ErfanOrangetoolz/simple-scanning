/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import MEISCustomTable from "../../components/custom-table/MEISCustomTable";
import { Button, Texts } from "../../constants/TextConstants";
import { useCentralContext } from "../../reducerContext/CentralReducer";
import styles from "./style.module.css";
import ListService from "../../handlers/api/listModule";
import Scanner2 from "./Scanner2";
// import Scanner from "./Scanner";

const DashboardIndex = () => {
  const { appStates: states, dispatch } = useCentralContext();
  const { isLoadingItem, list, perPage, lastData } = states;

  /*  */
  const [items, setItems] = useState([]);
  const [showScanner, setShowScanner] = useState(false);
  /*  */

  useEffect(() => {
    getListData();
  }, []);

  const getListData = () => {
    ListService.getListData(
      {
        perPage: perPage,
        lastData: lastData,
      },
      dispatch
    );

    /* for saving qr code */
    ListService.getOneItem("IpSSmPc5zB0Fsj4qJSpw").then((res) => {
      console.log(res);
    });
  };

  /*  */
  const showItems = () => {
    const view = [];
    items.forEach((item, index) => {
      view.push(<p key={index}>{item}</p>);
    });
    return view;
  };

  return (
    <div className={styles.container}>
      {showScanner && (
        <Scanner2
          onSuccess={(item) => {
            let old = [...items];
            old.push(item);
            setItems(old);
            setShowScanner(false);
          }}
        />
      )}
      {showItems()}
      <div onClick={() => setShowScanner(true)}>Show Scanner</div>
      {/* <Scanner successRes={(res) => console.log({ res })} /> */}
      <MEISCustomTable
        tableWrapperclass={styles.item_table}
        isLoading={isLoadingItem}
        data={list}
        rowDecoration={[
          {
            title: "Name",
            value: (row) => {
              return row.name;
            },
            className: "new",
          },
          {
            title: "QR Code",
            value: (row) => {
              return row["qr-code"];
            },
          },
          {
            title: "Total Item",
            value: (row) => {
              return row.count;
            },
          },
        ]}
        emptyContainer={{
          text: Texts.noItem,
          overlay: <div>{Button.addNewList}</div>,
        }}
        renderPagination={<div>Custom pagination will be render here</div>}
      />
    </div>
  );
};
export default DashboardIndex;
