import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(orderId, productName, amount, paymentMethod) {
  return { orderId, productName, amount, paymentMethod };
}

const rows = [
  createData(1, 'Product A', 100, 'Credit card'),
  createData(2, 'Product B', 200, 'PayPal'),
  createData(3, 'Product C', 300, 'Bank transfer'),
];

export default function BaduTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="badu table">
        <TableHead>
          <TableRow>
            <TableCell>Order Id</TableCell>
            <TableCell>Product name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Payment method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orderId}>
              <TableCell component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
