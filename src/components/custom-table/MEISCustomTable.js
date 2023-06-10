import { useState } from "react";
import Filter from "./screens/Filter";
import Pagination from "./screens/Pagination";
import Selected from "./screens/Selected";
import TableWrapper from "./screens/TableWrapper";
import "./style.css";

export const getIds = (string) => {
  if (string === "__ALL__") {
    return "__ALL__";
  }
  if (string === "") {
    return [];
  }
  string = string.replace(/id_/g, "");
  const ary = string.split(";");
  ary.splice(-1, 1);
  return ary;
};
export const getIdsForCallback = (string, intConvert = false) => {
  if (string === "__ALL__") {
    // return [];
    return "__ALL__";
  }
  if (string === "") {
    return [];
  }
  string = string.replace(/id_/g, "");
  if (intConvert) {
    let aryConvert = string.split(";").map((item) => parseInt(item));
    aryConvert.splice(-1, 1);
    return aryConvert;
  } else {
    let ary = string.split(";");
    ary.splice(-1, 1);
    return ary;
  }
};
const MEISCustomTable = (props) => {
  const [selected, setSelected] = useState(""); //__ALL__, id_103;
  const onChangeSelected = (id) => {
    if (id === "__ALL__") {
      setSelected(id);
      selectCallback(id);
      return;
    }
    if (id === "") {
      setSelected(id);
      selectCallback(id);
      return;
    }
    let old_selected = selected;
    if (old_selected === "__ALL__") {
      let new_select = "";
      props.data.forEach((item, index) => {
        let test_id = `id_${item[props.select.checkBoxField]};`;
        if (test_id !== id) {
          new_select = new_select + test_id;
        }
      });
      setSelected(new_select);
      selectCallback(new_select);
    } else {
      if (old_selected === null || old_selected === "") {
        setSelected(id);
        selectCallback(id);
      } else {
        /* TODO: check already exist */
        if (old_selected.includes(id)) {
          let regex = new RegExp(id, "g");
          old_selected = old_selected.replace(regex, "");
        } else {
          old_selected = old_selected + id;
        }
        setSelected(old_selected);
        selectCallback(old_selected);
      }
    }
  };
  const selectCallback = (id) => {
    if (props.select !== undefined) {
      if (props.select.onChangeCheckBox !== undefined) {
        let intConvert = false;
        if (
          props.select.converToInt !== undefined &&
          props.select.converToInt
        ) {
          intConvert = true;
        }
        props.select.onChangeCheckBox(getIdsForCallback(id, intConvert));
      }
    }
  };

  return (
    <div
      className={`meis_custom_table_main_wrapper ${props.tableWrapperclass}`}
      id='meis_custom_table_main_wrapper'
    >
      <div className='meis_ctmw_filter_seleccted'>
        {props.topBar !== undefined && <Filter {...props} />}

        {props.customHeader !== undefined && (
          <div className='meis_ctmw_custom_header_wrp'>
            {props.customHeader}
          </div>
        )}

        {props.select !== undefined && props.select?.isShowView && (
          <Selected {...props} selectedIds={selected} />
        )}
      </div>

      <TableWrapper
        {...props}
        selectedIds={selected}
        onChangeSelected={onChangeSelected}
      />

      {props.pagination !== undefined && <Pagination {...props} />}
      {props.renderPagination !== undefined && (
        <div className='meis_ctmw_custom_pagination'>
          {props.renderPagination}
        </div>
      )}
    </div>
  );
};
export default MEISCustomTable;
/* 
table props:
    1) isLoading: true/false => need to add skeleton
    2) emptyContainer: {
        text: string / component
        overlay: component
    }
    3) data: array
    4) pagination: {
        perPage: number
        currentPage: number
        totalRecords: number
        onChangePage: funtion
    }
    5) customHeader: component -> done
    6) topBar: { -> all done
        title: string / component
        isShowDefaultSearch: true / false
        placeholder: string
        onChangeSearch: funtion
        defaultSearchValue: string,
    }
    6) select : {
        isShowHeaderCheckBox: true / false
        isShowView : true / false
        viewText: string
        actions: array => {title : string / component, action: function}
        checkBoxField: field name from each row default id
        search: {
            placeholder: 'Search contact',
            onChange: onChangeSearch,
            defaultValue: search
        }
    }
    7) rowDecoration: array => title=> string / component, value => function, minWidth: '100px'
    8) tableWrapperclass: string -> done
    9) renderPagination: component
*/

/* 
demo
<MEISCustomTable 
    tableWrapperclass="campaign_report"
    isLoading={true}
    data={[
        {firstName: 'first', value: 101, email: 'asdafcf@asd.cd', number: '123412343' },
        {firstName: 'first 2', value: 102, email: 'asxcdf@asd.cd', number: '12341452343' },
        {firstName: 'first 3', value: 103, email: 'asdawef@asd.cd', number: '149412343' },
        {firstName: 'first 4', value: 104, email: 'asd3ef@asd.cd', number: '1234154543' },
    ]}
    customHeader={(<div>Here custom here will be added</div>)}
    topBar={{
        title: 'Table title',
        isShowDefaultSearch: true,
        placeholder: 'Search contact',
        onChangeSearch: (e) => {console.log(e)},
        defaultSearchValue: '017'
    }}
    select={{
        isShowHeaderCheckBox: true,
        onChangeCheckBox: (e) => {console.log(e)},
        isShowView:true,
        viewText: " contact (s) selected !",
        actions: [
            {title: 'Move', action: (e) => {console.log(e)}},
            {title: (<span>Delete</span>), action: (e) => {console.log(e)}},
        ],
        checkBoxField: 'value' //default will id
    }}
    pagination={{
        perPage:10,
        currentPage: 2,
        totalRecords: 135,
        onChangePage: (e) => {console.log(e)}
    }}
    renderPagination={(<div>Custom pagination will be render here</div>)}
    rowDecoration={[
        {title: 'Name', value: (row) => {return row.firstName}},
        {title: 'Email', value: (row) => {return row.email}},
        {title: 'Number', value: (row) => {return row.number},}
    ]}
    emptyContainer={{
        text: "No contact available !",
        overlay: (<div>Add more</div>)
    }}
/>

*/
