import { Icons } from "../components/Icons";

const EachTableRow = (props) => {
  const checkSelect = (id) => {
    if (props.selectedIds === "__ALL__") {
      return true;
    }
    if (props.selectedIds === "") {
      return false;
    }
    if (props.selectedIds.includes(`id_${id};`)) {
      return true;
    }
    return false;
  };

  const renderSelectBox = (item) => {
    let check_box_field_data = item.id;
    if (props.select?.checkBoxField !== undefined) {
      check_box_field_data = item[props.select?.checkBoxField];
    }
    const flag = checkSelect(check_box_field_data);
    return (
      <td>
        <span
          className='meis_ctmw_table_check_svg'
          onClick={() => props.onChangeSelected(`id_${check_box_field_data};`)}
          key={`id_${check_box_field_data};`}
        >
          {flag ? Icons.check : Icons.unCheck}
        </span>
      </td>
    );
  };

  const renderRow = (item, index) => {
    const view = [];
    props.rowDecoration.forEach((rItem, rIndex) => {
      let prop = {};
      if (rItem.className) {
        prop["className"] = rItem.className;
      }
      view.push(
        <td key={`${index}-${rIndex}`} index={`${index}-${rIndex}`} {...prop}>
          {rItem.value(item)}
        </td>
      );
    });
    return view;
  };

  const renderEachRow = () => {
    const view = [];
    props.data.forEach((item, index) => {
      view.push(
        <tr key={index}>
          {props.select !== undefined && renderSelectBox(item, index)}
          {renderRow(item, index)}
        </tr>
      );
    });
    return view;
  };

  return <tbody>{renderEachRow()}</tbody>;
};
export default EachTableRow;
