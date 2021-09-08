import React, {FunctionComponent, useEffect, useState} from 'react';
// @ts-ignore
import InlineInput from 'react-inline-input';
import {Investor} from "../interfaces";

interface InvestorRowProps {
   initial: Investor;
   addInvestor: Function
}

// our components props accept a number for the initial value
export function AddInvestorRow({initial, addInvestor}:InvestorRowProps) {
    const [investor, setInvestor] = useState(initial)

    useEffect(() => {
      setInvestor(initial);
    }, [initial])


    function updateEmail(val:string) {
        setInvestor({...investor, email: val});
    }
    function updateName(val:string) {
        setInvestor({...investor, name: val});
    }
    function updateAllocation(val:number) {
        setInvestor({...investor, allocation: val});
    }
    function updateEquity(val:number) {
        setInvestor({...investor, equity: val});
    }
    function handleBlur() {
        if (investor.email != '') {
            addInvestor(investor);
        }
    }

    return (
        <tr>
            <td>
                <InlineInput labelClasses='action' type='text' value={investor.email} onInput={updateEmail} onBlur={handleBlur} placeholder="Add email"/>
            </td>
            <td>
                <InlineInput  type='text' value={investor.name} onInput={updateName} placeholder=""/>
            </td>
            <td>
                <InlineInput  type='number' value={investor.allocation} onInput={updateAllocation}/>
            </td>
            <td>
                <InlineInput  type='number' value={investor.equity} onInput={updateEquity}/>
            </td>
            <td>
            </td>
        </tr>
    )
}