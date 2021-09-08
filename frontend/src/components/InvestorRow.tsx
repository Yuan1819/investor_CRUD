import React, { FunctionComponent, useState } from 'react';
// @ts-ignore
import InlineInput from '../InlineInput';
import {Investor} from "../interfaces";
import axios from "../axios";

interface InvestorRowProps{
   initial: Investor;
   index: number;
   updateInvestor: Function
}

// our components props accept a number for the initial value
export function InvestorRow({initial, index, updateInvestor}:InvestorRowProps) {
    const [investor, setInvestor] = useState(initial)

    function update_or_add_investor() {
        let url = '/investors/';
        if (!investor.id) {
            axios.post(url, investor).then((res) => {
                setInvestor({...investor, id: res.data.id});
                console.log(`Investor ${investor.email} is added.`);
                alert(`Investor ${investor.email} is added.`)
            })
        } else {
            url = `/investors/${investor.id}/`
            axios.put(url, investor).then((res) => {
                setInvestor({...investor, id: res.data.id});
                console.log(`Investor ${investor.email} is updated.`);
                alert(`Investor ${investor.email} is updated.`)
            })
        }

    }
    function update_email(val:string) {
        setInvestor({...investor, email: val});
    }
    function update_name(val:string) {
        setInvestor({...investor, name: val});
    }
    function update_allocation(val:number) {
        setInvestor({...investor, allocation: val});
        updateInvestor({...investor, allocation: val}, index)
    }
    function update_equity(val:number) {
        setInvestor({...investor, equity: val});
    }

    return (
        <tr>
            <td>
                <InlineInput type='text' value={investor.email} onInput={update_email} placeholder=""/>
            </td>
            <td>
                <InlineInput  type='text' value={investor.name} onInput={update_name} placeholder=""/>
            </td>
            <td>
                <InlineInput  type='number' value={investor.allocation} onInput={update_allocation} placeholder="" numberFormat={true}/>
            </td>
            <td>
                <InlineInput  type='number' value={investor.equity} onInput={update_equity} placeholder="" renderSelectLabel={() => investor.equity != null ? `%`: ''}/>
            </td>
            <td>
                <a className="action" href="javascript:void(0)" onClick={update_or_add_investor}>{investor.id != null ? "Update" : "Add"}</a>
            </td>
        </tr>
    )
}