import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Button } from "@mui/material";
import "./productList.css";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import rows from "./product";
import { useState } from "react";
const drawerWidth = 240;

export default function ProductList() {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((da) => da.id !== id));
  };
  console.log(data);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "Product",
      headerName: "Products",
      width: 240,
      renderCell: (params) => (
        <div className='userlist'>
          <Avatar className='avatar' src={params.row.icons} />
          {params.row.Product}
        </div>
      ),
    },
    { field: "Stock", headerName: "Stock", width: 130 },
    { field: "status", headerName: "Status", width: 200 },
    {
      field: "Price",
      headerName: "Price",
      width: 150,
    },

    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div>
          <Link to={"/products/" + params.row.id}>
            <Button
              size='small'
              variant='contained'
              sx={{ background: "green" }}
            >
              edit
            </Button>
          </Link>
          <IconButton
            color='secondary'
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        marginLeft: "220px",
        height: 400,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}
