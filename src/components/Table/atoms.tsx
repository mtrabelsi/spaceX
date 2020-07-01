import s from 'styled-components';
import { defaultColor, primarytColor, lightColor, secondaryColor, VerticalEllipsis, fontify } from '../Global'
import { DataWrapperType } from './types';

export const StyledTableItem = s.section`
    border-bottom: 1px solid silver;
    padding: 2px;
`
export const Title = s.div`
    color: ${defaultColor};
    font-weight: bold;
`
export const EventDateUTC = s.div`
    color: ${lightColor};
`
export const EventDateUnix = s.div`
    color: ${defaultColor};
`
export const FlightNumber = s.div`
    color: ${secondaryColor};
`
export const Details = s.div`
    color: ${primarytColor};
    ${VerticalEllipsis(2)};
`
export const Links = s.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

`
export const Link = s.a`
    width: 100%;
    text-decoration: none;
    color: ${secondaryColor};
    font-weight: bold;
`

export const DataWrapper = s.div<DataWrapperType>`
    padding: 5px;
    display: flex;
    ${fontify()};
    justify-content: ${p => p.isCentered ? 'center' : 'space-between'};
`
export const MissionName = s.div`
    color: ${secondaryColor};
    font-weight: bold;
`
export const Nationality = s.div`
    color: ${defaultColor};
`
export const LaunchSite = s.div`
    color: ${defaultColor};
`
export const Manufacturer = s.div`
    color: ${defaultColor};
`
export const PayloadType = s.div`
    color: ${defaultColor};
`
