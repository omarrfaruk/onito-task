import React, { useState } from 'react';
import ShowReceipt from './ShowReceipt';

const Receipt = () => {

    const [receipt, setReceipt] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        const detailsReceipt = {
            date: e.target.date.value,
            amount: e.target.amount.value,
            payment: e.target.payment.value,
            remark: e.target.remark.value
        }

        setReceipt([...receipt, detailsReceipt])
    }

    return (
        <>
            <div className="container w-50 bg-danger">
                <div className=''>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className='mb-3'>
                            <label for="date">Date<span className='text-danger'>*</span></label>
                            <input type="date" required className='px-5 py-1 border rounded ' name="date" id="date" />
                        </div>
                        <div className='mb-3'>
                            <label for="amount">Amount<span className='text-danger'>*</span></label>
                            <input type="number" required className='px-5 py-1 border rounded ' placeholder='Enter Amount (in INR)' name="amount" id="amount" />
                        </div>
                        <div className='mb-3'>
                            <label for="payment">Payment Mode<span className='text-danger'>*</span></label>
                            <select
                                name='payment'
                                required
                                className='px-5 py-1 rounded'
                            >
                                <option selected>Cash</option>
                                <option>Amazon Pay</option>
                                <option>PayPal</option>
                                <option>Skrill</option>
                                <option>Stripe</option>
                                <option>2Checkout</option>
                                <option>Payza</option>
                            </select>

                        </div>
                        <div className='mb-4' >
                            <label for="remark">Remark</label>
                            <input type="text" className='px-5 py-1 border rounded' placeholder='Enter Remark' name="remark" id="remark" />
                        </div>
                        <div>
                            <input className='btn btn-outline-dark px-5 m-2' type="submit" value="CANCEL" />
                            <input className='btn btn-outline-dark px-5 ' type="submit" value="SUBMIT" />
                        </div>

                    </form>
                </div>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            receipt?.map((r) => {
                                return (

                                    <ShowReceipt r={r} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Receipt;