const Pagination = (props) => {
  const handleInputPageChange = (e) => {
    if (e.target.value === "") {
      props.pagination.onChangePage(e.target.value);
    } else {
      if (onlyNumbers(e.target.value)) {
        props.pagination.onChangePage(e.target.value);
      }
    }
  };
  const onlyNumbers = (str) => {
    return /^[0-9]+$/.test(str);
  };
  const handlePageChange = (page) => {
    props.pagination.onChangePage(page);
  };

  return (
    <div
      className={`meis_ctmw_pagination_wrp ${
        props.pagination.totalRecords === 0 ? "meis_ctmw_pw_none" : ""
      }`}
    >
      <div className='meis_ctmw_pagination_wrp_top'>
        <span className='meis_ctmw_pagination_wrp_top_page'>Page </span>
        <input
          className='meis_ctmw_pagination_wrp_top_input'
          defaultValue={props.pagination.currentPage}
          placeholder='Page'
          onChange={handleInputPageChange}
        />
        <span className='meis_ctmw_pagination_wrp_top_count'>
          of{" "}
          {Math.ceil(props.pagination.totalRecords / props.pagination.perPage)}
        </span>
      </div>

      <span className='meis_ctmw_pagination_wrp_total_cotent'>
        Total: <span>{props.pagination.totalRecords}</span>
      </span>

      <div className='meis_ctmw_pagination_wrp_bottom' style={{ opacity: 1 }}>
        <span
          className={`meis_ctmw_pagination_wrp_last_page ${
            props.pagination.currentPage > 1 ? "" : "meis_ctmw_pw_last_disable"
          }`}
          onClick={() => handlePageChange(props.pagination.currentPage - 1)}
        >
          Last page
        </span>
        <span className='meis_ctmw_pagination_wrp_middle_page'>
          {props.pagination.currentPage}{" "}
          <span className='meis_ctmw_pagination_wrp_last_page_new_line'>
            current page
          </span>
        </span>
        <span
          className={`meis_ctmw_pagination_wrp_next_page ${
            props.pagination.currentPage >=
            Math.ceil(props.pagination.totalRecords / props.pagination.perPage)
              ? ""
              : "meis_ctmw_pw_next_disable"
          }`}
          onClick={() => handlePageChange(props.pagination.currentPage + 1)}
        >
          Next Page
        </span>
      </div>
    </div>
  );
};
export default Pagination;
