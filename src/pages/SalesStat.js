import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import {Component} from "react";

class SalesStat extends Component {

    state = {
        stats: []
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/sales/stats')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ stats: data.data.data });
            });

        if (!$.fn.DataTable.isDataTable("#myTable")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#table").DataTable({
                        retrieve: true,
                        paging: false,
                        processing: true,
                        dom: "Brtp",
                        order: [[3, 'desc']],
                        select: {
                            style: "single",
                        },
                        buttons: [
                            {
                                extend: "copy",
                                className: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
                            },
                            {
                                extend: "csv",
                                className: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
                            },
                            {
                                extend: "print",
                                customize: function (win) {
                                    $(win.document.body).css("font-size", "10pt");
                                    $(win.document.body)
                                        .find("myTable")
                                        .addClass("compact")
                                        .css("font-size", "inherit");
                                },
                                className: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
                            },
                        ],
                        columnDefs: [
                            {
                                targets: 0,
                                orderable:false
                            }
                        ],
                    });
                }, 1000);
            });
        }
    }

    showTable = () => {
        try {
            return this.state.stats.map((item) => {
                return (
                    <tr>
                        <td className="text-xs font-bold">{item["product"].name}</td>
                        <td className="text-xs text-center">{item.addedCount}</td>
                        <td className="text-xs text-center">{item.removedCount}</td>
                        <td className="text-xs text-center">{item.purchasedCount}</td>
                    </tr>
                );
            });
        } catch (e) {
            alert(e.message);
        }
    };

    render(){
        return(
            <div className="container-fluid py-4">
                <div className="table-responsive p-0 pb-2">
                    <table id="table" className="table align-items-center justify-content-center mb-0">
                        <thead>
                        <tr>
                            <th className="text-sm font-weight-bolder opacity-7 ps-2">Product</th>
                            <th className="text-sm font-weight-bolder opacity-7 ps-2">Added to Cart Count</th>
                            <th className="text-sm font-weight-bolder opacity-7 ps-2">Removed from Cart Count</th>
                            <th className="text-sm font-weight-bolder opacity-7 ps-2">Purchased Count</th>
                        </tr>
                        </thead>

                        <tbody>
                        {this.showTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default SalesStat;
