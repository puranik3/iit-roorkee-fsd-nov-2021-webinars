import PaymentOptions from "../types/PaymentOptions";
import Dialog from "./Dialog";

type Props = {
    onClose: () => void,
    paymentOption: PaymentOptions
}

const SuccessPayment = ( { onClose, paymentOption } : Props ) => {
    return (
        <Dialog show={true}>
            <div style={{ textAlign: 'center' }}>
                <h3>Your payment is successfull</h3>
                You chose to pay using {paymentOption}
                <button className="btn btn-close" onClick={onClose}>Close</button>
            </div>
        </Dialog>
    );
}

export default SuccessPayment;