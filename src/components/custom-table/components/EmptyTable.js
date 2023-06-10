
const EmptyTable = ({emptyContainer, rows, checkBox}) => {
    let length = rows.length;
    if(checkBox){
        length += 1;
    }
    return (
        <tbody>
            <tr>
                <td colSpan={length}>
                    <div className="meis_ctmw_table_wrp_empty">
                        {emptyContainer?.text || "No data found !"}
                        <div className="meis_ctmw_table_wrp_empty_overy" style={emptyContainer?.overlay !== undefined ? {} : {display: 'none'}}>
                            {emptyContainer?.overlay !== undefined && emptyContainer?.overlay}
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    );
}
export default EmptyTable;