import './css/bootstrap.min.css'
import './css/bootstrap-toggle.min.css'
import './css/app.css'
import { FaSearch } from "react-icons/fa";

export default function User() {
    return (
        <div class="body-wrapper">
            <div class="bodywrapper__inner">
                <div class="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                    <h6 class="page-title">All Customer List</h6>
                    <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        <form action="" method="GET" class="d-flex flex-wrap gap-2">
                            <div class="input-group w-auto flex-fill">
                                <input type="search" name="search" class="form-control bg--white" placeholder="Search here..." value=""/>
                                <button class="btn btn--primary" type="submit">
                                    <FaSearch />
                                </button>
                            </div>    
                        </form>
                        <button type="button" class="btn  btn-outline--info h-45 importBtn">
                            <i class="las la-cloud-upload-alt"></i> Import
                        </button>
                        <button type="button" class="btn btn-outline--warning h-45 exportBtn">
                            <i class="las la-cloud-download-alt"></i> Export    
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card b-radius--10 ">
                            <div class="card-body p-0">
                                <div class="table-responsive--sm table-responsive">
                                    <table class="table table--light style--two">
                                        <thead>
                                            <tr>
                                                <th>Full Name</th>
                                                <th>Account</th>
                                                <th>Password</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Nguyen Van A</span>
                                                </td>
                                                <td>
                                                    <span> user1@gmail.com</span>
                                                </td>
                                                <td>
                                                    <span>********</span>
                                                </td>
                                                <td>
                                                    <span>0123456789</span>
                                                </td>
                                                <td>
                                                    <span>Quan Hoa, Cau Giay, Ha Noi</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Nguyen Van A</span>
                                                </td>
                                                <td>
                                                    <span> user1@gmail.com</span>
                                                </td>
                                                <td>
                                                    <span>********</span>
                                                </td>
                                                <td>
                                                    <span>0123456789</span>
                                                </td>
                                                <td>
                                                    <span>Quan Hoa, Cau Giay, Ha Noi</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Nguyen Van A</span>
                                                </td>
                                                <td>
                                                    <span> user1@gmail.com</span>
                                                </td>
                                                <td>
                                                    <span>********</span>
                                                </td>
                                                <td>
                                                    <span>0123456789</span>
                                                </td>
                                                <td>
                                                    <span>Quan Hoa, Cau Giay, Ha Noi</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Nguyen Van A</span>
                                                </td>
                                                <td>
                                                    <span> user1@gmail.com</span>
                                                </td>
                                                <td>
                                                    <span>********</span>
                                                </td>
                                                <td>
                                                    <span>0123456789</span>
                                                </td>
                                                <td>
                                                    <span>Quan Hoa, Cau Giay, Ha Noi</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Nguyen Van A</span>
                                                </td>
                                                <td>
                                                    <span> user1@gmail.com</span>
                                                </td>
                                                <td>
                                                    <span>********</span>
                                                </td>
                                                <td>
                                                    <span>0123456789</span>
                                                </td>
                                                <td>
                                                    <span>Quan Hoa, Cau Giay, Ha Noi</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Nguyen Van A</span>
                                                </td>
                                                <td>
                                                    <span> user1@gmail.com</span>
                                                </td>
                                                <td>
                                                    <span>********</span>
                                                </td>
                                                <td>
                                                    <span>0123456789</span>
                                                </td>
                                                <td>
                                                    <span>Quan Hoa, Cau Giay, Ha Noi</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Nguyen Van A</span>
                                                </td>
                                                <td>
                                                    <span> user1@gmail.com</span>
                                                </td>
                                                <td>
                                                    <span>********</span>
                                                </td>
                                                <td>
                                                    <span>0123456789</span>
                                                </td>
                                                <td>
                                                    <span>Quan Hoa, Cau Giay, Ha Noi</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Nguyen Van A</span>
                                                </td>
                                                <td>
                                                    <span> user1@gmail.com</span>
                                                </td>
                                                <td>
                                                    <span>********</span>
                                                </td>
                                                <td>
                                                    <span>0123456789</span>
                                                </td>
                                                <td>
                                                    <span>Quan Hoa, Cau Giay, Ha Noi</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Nguyen Van A</span>
                                                </td>
                                                <td>
                                                    <span> user1@gmail.com</span>
                                                </td>
                                                <td>
                                                    <span>********</span>
                                                </td>
                                                <td>
                                                    <span>0123456789</span>
                                                </td>
                                                <td>
                                                    <span>Quan Hoa, Cau Giay, Ha Noi</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Nguyen Van A</span>
                                                </td>
                                                <td>
                                                    <span> user1@gmail.com</span>
                                                </td>
                                                <td>
                                                    <span>********</span>
                                                </td>
                                                <td>
                                                    <span>0123456789</span>
                                                </td>
                                                <td>
                                                    <span>Quan Hoa, Cau Giay, Ha Noi</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="card-footer py-4">
                                <nav>
                                    <ul class="pagination">
                                        <li class="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous">
                                            <span class="page-link" aria-hidden="true">&lsaquo;</span>
                                        </li>
                                        <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                        <li class="page-item"><a class="page-link" href="">2</a></li>
                                        <li class="page-item"><a class="page-link" href="">3</a></li>
                                        <li class="page-item"><a class="page-link" href="">4</a></li>
                                        <li class="page-item disabled" aria-disabled="true"><span class="page-link">...</span></li>
                                        <li class="page-item"><a class="page-link" href="">9</a></li>
                                        <li class="page-item"><a class="page-link" href="">10</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="" rel="next" aria-label="Next &raquo;">&rsaquo;</a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}