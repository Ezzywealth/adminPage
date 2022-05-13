import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Udiomuno Ezekiel",
    "10 May 2022",
    "$60",
    <Button variant='outlined' size='small' color='success'>
      Approved
    </Button>
  ),
  createData(
    "Udueyi Ose",
    "10 May 2022",
    "$160",
    <Button variant='outlined' size='small' color='success'>
      Approved
    </Button>
  ),
  createData(
    "Kelechukwu",
    "10 May 2022",
    "$90",
    <Button variant='outlined' size='small' color='secondary'>
      Pending
    </Button>
  ),
  createData(
    "Stephanie Okeke",
    "10 May 2022",
    "$230",
    <Button variant='outlined' size='small' color='error'>
      Approved
    </Button>
  ),
  createData(
    "Loveth Tijani",
    "10 May 2022",
    "$600",
    <Button variant='outlined' size='small' color='success'>
      Approved
    </Button>
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bolder" }}>Customers</TableCell>
            <TableCell align='right' sx={{ fontWeight: "bolder" }}>
              Date
            </TableCell>
            <TableCell align='right' sx={{ fontWeight: "bolder" }}>
              Amount
            </TableCell>
            <TableCell align='right' sx={{ fontWeight: "bolder" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='row' sx={{ fontWeight: "700" }}>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
