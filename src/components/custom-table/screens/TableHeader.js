import { Icons } from "../components/Icons";

const TableHeader = (props) => {

    const renderSelectBox = () => {
        if(props.isLoading || props.data.length === 0){
            return (<th></th>);
        }
        return (
            <th>
                <span className="meis_ctmw_table_check_svg" onClick={() => props.onChangeSelected((props.selectedIds === "__ALL__" ? '' : '__ALL__'))}>
                    {props.selectedIds === "__ALL__" ? Icons.check : Icons.unCheck}
                </span>
            </th>
        );
    }

    const renderRow = () => {
        const view = [];
        props.rowDecoration.forEach((item, index) => {
            view.push(
                <th key={index} index={index} style={{minWidth : (item.minWidth || '200px')}}>
                    {item.title}
                </th>
            )
        });
        return view;
    }

    return (
        <thead>
            <tr>
                {(props.select !== undefined && props.select?.isShowHeaderCheckBox) && renderSelectBox()}
                {(props.select !== undefined && !props.select?.isShowHeaderCheckBox) && <th></th>}
                {renderRow()}
            </tr>
        </thead>
    );
}
export default TableHeader;