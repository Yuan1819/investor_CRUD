import React, {FunctionComponent, useEffect, useState} from 'react';
import {InvestorRow} from "./InvestorRow";
import {Investor} from "../interfaces";
import {AddInvestorRow} from "./AddInvestorRow";
import axios from "../axios";
import NumberFormat from 'react-number-format';
import update from 'immutability-helper';

export function InvestorList() {
    const [investors, setInvestors] = useState<Investor[]>([]);

    useEffect(() => {
        axios.get('/investors/')
            .then(response => {
                setInvestors(response.data);
            });
    }, []);


    let inv_obj: Investor = { id: null, email: '', name: "", allocation: null, equity: null }
    const [new_investor, setNewInvestor] = useState({...inv_obj})

    function addInvestor(investor: any) {
        setInvestors([...investors, investor])
        setNewInvestor({...inv_obj, email: ''})
    }
    function calc_allocation_total() {
        let total = 0;
        investors.forEach((obj) => {
            if(obj.allocation) {
                total += obj.allocation;
            }
        })
        return total;
    }

    function updateInvestor(obj: Investor, index: number) {
        let newData = update(investors, {
            $splice: [[index, 1, obj]]
        });
        setInvestors(newData);
    }

    return (
        <div className="container mt-4">
            <div className="d-flex">
                <h3>Investors</h3>
                <div className="ms-2">
                    <p>CONFIRMED</p>
                    <p style={{
                        color: "#51ab9f",
                        fontWeight: 'bold'
                    }}>
                        <NumberFormat displayType={'text'} value={calc_allocation_total()} thousandSeparator={true} prefix={'$'} />
                    </p>
                </div>
            </div>

            <div className="mt-3">
                <table className="table table-bordered w-75">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Investor Name</th>
                            <th>Allocation</th>
                            <th>Equity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { investors.map((investor, index) => {
                            return <InvestorRow initial={investor} index={index} key={index} updateInvestor={updateInvestor}/>
                        })}
                        <AddInvestorRow initial={new_investor} addInvestor={addInvestor} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}