import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';



const Paginations = (users) => {
    
    const pageList = users.users.pageList;

    return(
        <div>
            <ul className="pagination justify-content-center">
                <li className="page-item ">
                    <a className="page-link" href="#">&laquo;</a>
                </li>
                {pageList.map( page => {
                    if( pageList.length > 0 ) {
                        return(
                            <li key={page} className="page-item" >
                                <a className="page-link">{page}</a>
                            </li>
                        )
                    }
                })}
                <li className="page-item">
                    <a className="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>
    )
}

export default Paginations