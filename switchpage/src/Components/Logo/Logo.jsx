import React from 'react';
import LogoBrand from '../Images/LogoBrand';
import { primaryColorLight, primaryColorDark } from '../../Variaveis/Theme';
import { LayoutContext } from '../../LayoutContext';

const Logo = () => {
    const { switcher } = React.useContext(LayoutContext);
    return <LogoBrand size={'5rem'} themeColor={switcher ? primaryColorLight : primaryColorDark} />
}

export default Logo
