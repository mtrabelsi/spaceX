import s from 'styled-components'
import { fontFamily, secondaryFontSize, secondaryColor } from '../../components/Global'

export const SearchFeedback = s.section`
    margin: 15px 0;
    font-weight: bold;
    font-family: ${fontFamily};
    color: ${secondaryColor};
    font-size: ${secondaryFontSize};
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
`
export const SearchFeedbackItem = s.section`
`