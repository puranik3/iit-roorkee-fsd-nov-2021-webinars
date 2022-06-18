import ConfirmPayment from './ConfirmPayment';
import { Component, ChangeEvent, FormEvent } from 'react';
import { generateList } from '../utils/array';
import PaymentOptions from '../types/PaymentOptions';

type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type State = {
    cardNumber : number | '',
    name: string,
    month: MonthNumber,
    year: number,
    cvvNumber: number,
    showConfirmPayment: boolean
}

class CreditDebitCard extends Component<{}, State> {
    static initialState = {
        cardNumber: '' as '',
        name: '',
        month: 1 as MonthNumber,
        year: 2022,
        cvvNumber: 0,
        showConfirmPayment: false
    };

    state = CreditDebitCard.initialState;

    payHandler = ( event : ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const name = event.target.name as keyof State;
        let value : number | string = event.target.value;

        if( name === 'cardNumber' || name === 'month' || name === 'year' || name === 'cvvNumber' ) {
            value = parseInt( value );
        }
        
        // ask React to change the state
        this.setState({
            [name]: value
        } as unknown as Pick<State, keyof State>);
    }

    submitHandler = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault(); // prevent browser refresh
        this.setState({
            showConfirmPayment: true
        });
    }

    reset = () => {
        this.setState( CreditDebitCard.initialState );
    }

    cancel = () => {
        this.setState({
            showConfirmPayment: false
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="cardNumber"
                                    >
                                        Card number:
                                        <br />
                                        12-digit number
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="cardNumber"
                                        min="100000000000"
                                        max="999999999999"
                                        required
                                        placeholder="xxxx-xxxx-xxxx"
                                        name="cardNumber"
                                        value={this.state.cardNumber}
                                        onChange={this.payHandler}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="name"
                                    >
                                        Name:
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Name as on card"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.payHandler}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="expirydate"
                                    >
                                        Expiry date:
                                    </label>
                                </td>
                                <td>
                                    <select
                                        name="month"
                                        id="month"
                                        value={this.state.month}
                                        onChange={this.payHandler}
                                    >
                                        {
                                            generateList( 1, 12 ).map(
                                                i => <option value={i} key={i}>{i}</option>
                                            )
                                        }
                                    </select>
                                    <select
                                        name="year"
                                        id="year"
                                        value={this.state.year}
                                        onChange={this.payHandler}
                                    >
                                        {
                                            generateList( 2022, 2033 ).map(
                                                i => <option value={i} key={i}>{i}</option>
                                            )
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="cvvNumber"
                                    >
                                        CVV Number
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="cvvNumber"
                                        min="100"
                                        max="999"
                                        placeholder="xxx"
                                        name="cvvNumber"
                                        value={this.state.cvvNumber}
                                        onChange={this.payHandler}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="btn btn-pay" value="Submit">Pay</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

                {
                    this.state.showConfirmPayment && (
                        <ConfirmPayment
                            onYes={this.reset}
                            onNo={this.cancel}
                            paymentOption={PaymentOptions.CARD}
                        />
                    )
                }
            </>
        );
    }
}

export default CreditDebitCard;