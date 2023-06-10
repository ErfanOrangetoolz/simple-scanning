import CustomCircleLoader from "../components/CustomCircleLoader";
import { Icons } from "../components/Icons";
import { getIds } from "../MEISCustomTable";

const Selected = (props) => {

    const renderCount = () => {
        const selected_string = props.selectedIds;
        if(selected_string === ""){
            if(props.select?.viewText){
                return "0" + props.select?.viewText
            }
            return "0 item selected !"
        }
        if(selected_string === "__ALL__"){
            if(props.select?.viewText){
                return "All" + props.select?.viewText
            }
            return "All item(s) selected !";
        }
        const count = selected_string.split(";");
        if(props.select?.viewText){
            return (count.length-1) + props.select?.viewText
        }
        return (count.length-1) + " items selected." 
    }

    const renderAction = () => {
        const view = [];
        props.select?.actions.forEach((item, index) => {
            view.push(
                <div className="meis_ctmw_sw_actions_btn meis_ctmw_sw_actions_move_btn" key={index} onClick={() => item.action(getIds(props.selectedIds))}>{item.title}</div>
            )
        });
        return view;
    }

    const renderSearch = () => {
        return (
            <div className="meis_ctmw_sw_search">
                <div className="meis_ctmw_fw_search_wrp">
                    <span className="meis_ctmw_fw_sw_left_icon">{Icons.search}</span>
                    <input 
                        className="meis_ctmw_fw_sw_input_select"
                        defaultValue={props.select?.search?.defaultValue || ""}
                        onChange={props.select?.search !== undefined ? (e) => props.select?.search?.onChange(e.target.value) : () => {}}
                        placeholder={props.select?.search?.placeholder || "Search"}
                    />
                    <span className="meis_ctmw_fw_sw_right_icon">
                        {props.isLoading && <CustomCircleLoader size="extra-small" />}
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="meis_ctmw_selected_wrp">
            <span className="meis_ctmw_sw_selected">{renderCount()}</span>
            <div className="meis_ctmw_sw_action_search">
            {props.select?.actions !== undefined &&
            <div className="meis_ctmw_sw_actions">{renderAction()}</div>
            }
            {props.select?.search !== undefined && renderSearch()}
            </div>
        </div>
    );
}
export default Selected;