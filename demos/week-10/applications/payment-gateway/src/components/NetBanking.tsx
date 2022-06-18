import { Component } from 'react';

class NetBanking extends Component<{}, {}> {
    render() {
        return (
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>
                                    Card number:
                                    <br />
                                    12-digit number
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default NetBanking;