import EmptyTable from "../components/EmptyTable";
import TableSkeleton from "../components/Skeleton";
import EachTableRow from "./EachTableRow";
import TableHeader from "./TableHeader";

const TableWrapper = (props) => {
  return (
    <>
      {/* <div className="meis_ctmw_table_wrp_top_scroll_bar awesome__scroll_bar">

        </div> */}
      <div className='meis_ctmw_table_wrp awesome__scroll_bar'>
        <div className='meis_ctmw_table_wrp_con'>
          <table className='meis_ctmw_table'>
            <TableHeader {...props} />
            {props.isLoading && (
              <TableSkeleton
                rows={props.rowDecoration}
                checkBox={props.select !== undefined ? true : false}
              />
            )}
            {!props.isLoading && props.data.length === 0 && (
              <EmptyTable
                emptyContainer={props.emptyContainer}
                rows={props.rowDecoration}
                checkBox={props.select !== undefined ? true : false}
              />
            )}
            {!props.isLoading && props.data.length > 0 && (
              <EachTableRow {...props} />
            )}
          </table>
        </div>
      </div>
    </>
  );
};
export default TableWrapper;
