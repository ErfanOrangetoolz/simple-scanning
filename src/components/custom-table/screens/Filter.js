import CustomCircleLoader from "../components/CustomCircleLoader";
import { Icons } from "../components/Icons";

const Filter = (props) => {
    return (
        <div className="meis_ctmw_filter_wrp">
            <span className="meis_ctmw_fw_title">
                {props.topBar?.title || ''}
            </span>
            <div className="meis_ctmw_fw_search_wrp_up">
                {(props.topBar?.isShowDefaultSearch !== undefined && props.topBar.isShowDefaultSearch) &&
                <div className="meis_ctmw_fw_search_wrp">
                    <span className="meis_ctmw_fw_sw_left_icon">{Icons.search}</span>
                    <input 
                        className="meis_ctmw_fw_sw_input"
                        defaultValue={props.topBar?.defaultSearchValue || ""}
                        onChange={props.topBar?.onChangeSearch !== undefined ? (e) => props.topBar?.onChangeSearch(e.target.value) : () => {}}
                        placeholder={props.topBar?.placeholder || "Search"}
                    />
                    <span className="meis_ctmw_fw_sw_right_icon">
                        {props.isLoading && <CustomCircleLoader size="extra-small" />}
                    </span>
                </div>
                }
                {props.onClose !== undefined &&
                <span className="meis_ctmw_filter_wrp_close" onClick={() => props.onClose(false)}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15.125 17.081 2.01-2.012L6.879 4.805l-2.01 2.012L15.124 17.08Z" fill="#fff"/><path d="M6.878 17.084 17.136 6.819l-2.01-2.012-10.26 10.265 2.011 2.012Z" fill="#fff"/></svg>
                </span>
                }
            </div>
        </div>
    );
}
export default Filter;