import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss"

const OrderTable = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      amount: 785,
      method: "Cash on Delivery",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      amount: 900,
      method: "Online Payment",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      amount: 35,
      method: "Cash on Delivery",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      amount: 920,
      method: "Online",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      amount: 2000,
      method: "Online",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.method}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
