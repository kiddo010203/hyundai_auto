import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListUser from "../Components/ListUser";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminUser() {
    const [user, setUser] = useState(null);
    const [searchInput, setSearchInput] = useState("");



    useEffect(() => {
        let url = "https://62b04951b0a980a2ef4f686d.mockapi.io/user";
        if (searchInput.length > 0) {
            url = url + "?name=" + searchInput;
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
                console.log(data);
            });
    }, [searchInput]);
    return (

        <div className="container-fluid">
            <h2 className="text-center">QUẢN LÝ THÔNG TIN KHÁCH HÀNG</h2>
            <div className="row">
                <div className="col-lg-12">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        ></input>
                        <div className="input-group-append">
                            <button
                                className="btn btn-secondary"
                                type="button"
                            >
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div className="text-left">

                    </div>
                </div>
                <table id="myTable" className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th className="col-lg-1">Mã</th>
                            <th className="col-lg-2">Họ tên khách hàng</th>
                            <th className="col-lg-3">Email</th>
                            <th className="col-lg-2">Số điện thoại</th>
                            <th className="col-lg-1">Tên xe</th>
                            <th className="col-lg-2">Tùy chọn</th>
                        </tr>
                    </thead>
                    <ListUser data={user} />

                </table>
            </div>

        </div>


    );
}