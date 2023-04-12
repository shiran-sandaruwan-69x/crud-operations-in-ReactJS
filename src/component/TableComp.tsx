import React from 'react';
import Data from './Data.json'
import CustomerTableDTO from "./dto/CustomerTableDTO";
import {Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {TabPanel} from "@mui/lab";
import './css/TableComp.css'
import AddCustomerComp from "./AddCustomerComp";
interface CustomerProps {

}
interface CustomerState {
    tableDTO:CustomerTableDTO[]
}

class TableComp extends React.Component<CustomerProps,CustomerState> {

    constructor(props: Readonly<CustomerProps> | CustomerProps) {
        super(props);
        this.state={
            tableDTO:[]
        }
    }

    componentDidMount() {
        this.setState({
            tableDTO:Data
        })
    }

    render() {
        let {tableDTO} = this.state
        return (
            <Stack direction='row' spacing={2}>
                <AddCustomerComp/>
                <TableContainer component={Paper} className='tableComp'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>cus id</TableCell>
                                <TableCell>cus name</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>phone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                tableDTO.map((customer:CustomerTableDTO)=>{
                                    return(
                                        <TableRow key={customer.cusId}>
                                            <TableCell>{customer.cusId}</TableCell>
                                            <TableCell>{customer.cusName}</TableCell>
                                            <TableCell>{customer.email}</TableCell>
                                            <TableCell>{customer.phone}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        );
    }
}

export default TableComp;