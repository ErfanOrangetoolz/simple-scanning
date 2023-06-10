import { useEffect, useState } from "react";
import MEISCustomTable from "../MEISCustomTable";

const TestTable = () => {

    const [states, setStates] = useState({
        data: [
            {firstName: 'first', value: 101, email: 'asdafcf@asd.cd', number: '123412343' },
            {firstName: 'first 2', value: 102, email: 'asxcdf@asd.cd', number: '12341452343' },
            {firstName: 'first 3', value: 103, email: 'asdawef@asd.cd', number: '149412343' },
            {firstName: 'first 4', value: 104, email: 'asd3ef@asd.cd', number: '1234154543' },
        ],
        isLoading: false
    })

    useEffect(() => {
        // setTimeout(() => {
        //     setStates({...states, isLoading: false})
        //     setTimeout(() => {
        //         setStates({...states, data: []})
        //     }, 5000);
        // }, 5000);
    }, [])

    return (
        <MEISCustomTable 
            tableWrapperclass="campaign_report"
            isLoading={states.isLoading}
            data={states.data}
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
                {title: 'Name', value: (row) => {return row.firstName}, minWidth: '200px'},
                {title: 'Email', value: (row) => {return row.email},minWidth: '200px'},
                {title: 'Number', value: (row) => {return row.number},minWidth: '200px'}
            ]}
            emptyContainer={{
                text: "No contact available !",
                overlay: (<div>Add more</div>)
            }}
        />
    )
}
export default TestTable;