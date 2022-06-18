import { useState } from 'react';
import CreditDebitCard from './CreditDebitCard';
import NetBanking from './NetBanking';
import UPI from './UPI';
import PaymentOptions from "../types/PaymentOptions";

import './Menu.css';

const paymentOptions = [
    PaymentOptions.CARD,
    PaymentOptions.NET_BANKING,
    PaymentOptions.UPI
];

function Menu() {
    const [ option, setOption ] = useState<PaymentOptions | ''>( '' );

    return (
        <div className="menu">
            <div className="payment-options">
                {
                    paymentOptions.map(
                        po => (
                            <button
                                key={po}
                                className={`payment-option ${po === option ? 'payment-option-selected' : ''}`}
                                onClick={() => setOption( po )}
                            >
                                    {po}
                            </button>
                        )
                    )
                }
            </div>

            <div className="payment-details">
                {
                    option === PaymentOptions.CARD && <CreditDebitCard />
                }
                {
                    option === PaymentOptions.NET_BANKING && <NetBanking />
                }
                {
                    option === PaymentOptions.UPI && <UPI />
                }
            </div>
        </div>
    )
};

export default Menu;