import React ,{useState} from 'react'
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummydata";
import { Link } from "react-router-dom";
import "./ProductList.css"
function ProductList() {
    const [data, setData] = useState(productRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
      const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          editable: true,
          renderCell: (params) => {
            return (
              <div className="productListUser">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        {
          field: "stock",
          headerName: "Stock",
          width: 200,
          editable: true,
        },
        {
          field: "status",
          headerName: "Status",
          width: 120,
          editable: true,
        },
        {
          field: "price",
          headerName: "Price Volume",
          width: 160,
          editable: true,
        },
        {
          field: "action",
          headerName: "Action",
          width: 160,
          editable: true,
    
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];
  return (
    <>
    <div className="productList">
    <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          checkboxSelection
          disableSelectionOnClick
        />
    </div>
    </>
  )
}

export default ProductList