import { ReactNode } from 'react';

import './Dialog.css';

type Props = {
    show: boolean,
    children: ReactNode
}

const Dialog = ( { show, children } : Props ) => {
    if( show === false ) {
        return null;
    }

    return (
        <div className="dialog-overlay">
            <div className="dialog">{children}</div>
        </div>
    );
}

export default Dialog;