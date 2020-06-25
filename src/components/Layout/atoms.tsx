import s from 'styled-components';
import { defaultColor, tabletWidth } from '../Global'

export const LayoutMain = s.section`
    padding: 20px;
    //ALWAYS centred
    max-width: ${tabletWidth};
    margin: 0 auto;
    color: ${defaultColor}
`;