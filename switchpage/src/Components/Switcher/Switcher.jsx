import React from 'react';
import SwitchOn from '../Images/SwitchOn';
import SwitchOff from '../Images/SwitchOff';
import { LayoutContext } from '../../LayoutContext';


const Switcher = () => {
    const { switcher, handleSwitcher } = React.useContext(LayoutContext);

    return (
        <div>
            {
                switcher ?
                    <SwitchOn size={'5rem'} handleSwitcher={handleSwitcher} /> :
                    <SwitchOff size={'5rem'} handleSwitcher={handleSwitcher} />
            }
        </div>
    )
}

export default Switcher
