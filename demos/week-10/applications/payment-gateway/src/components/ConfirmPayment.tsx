import { useState } from 'react';
import PaymentOptions from "../types/PaymentOptions";
import Dialog from "./Dialog";
import SuccessPayment from './SuccessPayment';

type Props = {
    onYes: () => void,
    onNo: () => void,
    paymentOption: PaymentOptions
}

const ConfirmPayment = ( { onYes, onNo, paymentOption } : Props ) => {
    const [ isConfirmed, setConfirmed ] = useState( false );

    const onConfirm = () => {
        setConfirmed( true );
    }

    return (
        <>
            {
                isConfirmed === false ? (
                    <Dialog show={true}>
                        <div style={{ textAlign: 'center' }}>
                            <h3>Proceed to complete the payment?</h3>
                            <button className="btn btn-cancel" onClick={onNo}>No</button>
                            <button className="btn btn-confirm" onClick={onConfirm}>Yes</button>
                        </div>
                    </Dialog>
                ) : (
                    <SuccessPayment paymentOption={paymentOption} onClose={onYes} />
                )
            }
        </>
    );
}

export default ConfirmPayment;