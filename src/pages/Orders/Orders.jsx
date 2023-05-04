import Sidebar from "../../components/sidebar/Sidebar";

import "./orders.scss";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Grid } from "@mui/material";


const Orders = () => {
  // Define your table data
  const rows = [
    { id: 1, orderId: 'ORD-123', productName: 'Product 1', amount: 100, paymentMethod: 'Credit Card' },
    { id: 2, orderId: 'ORD-456', productName: 'Product 2', amount: 200, paymentMethod: 'Paypal' },
    { id: 3, orderId: 'ORD-789', productName: 'Product 3', amount: 150, paymentMethod: 'Credit Card' },
    { id: 4, orderId: 'ORD-234', productName: 'Product 4', amount: 75, paymentMethod: 'Debit Card' },
    { id: 5, orderId: 'ORD-567', productName: 'Product 5', amount: 50, paymentMethod: 'Paypal' },
  ];

  return (
    <div >
      <Grid container >
        <Grid item xs={2}><Sidebar /></Grid>
        <Grid item xs={10}>          <TableContainer >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Payment Method</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.orderId}</TableCell>
                    <TableCell>{row.productName}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer></Grid>
      </Grid>
      
        

      </div>
  );
};

export default Orders;
