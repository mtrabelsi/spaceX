import React from 'react'
import { DataWrapper, Title, EventDateUnix, EventDateUTC, Details, Links, Link } from './atoms'
import { DataHistoryType, DataLaunchType } from './types'

const LinkWithTaget = (props: any) => <Link {...props} target="_blank">{props.children}</Link>
const getAlign = (arr: any[], index: number): 'left' | 'center' | 'right' => {
    if(index===0) {
        return 'left'
    } else if(index<arr.length-1) {
        return 'center'
    } else {
        return 'right'
    }
}
export const renderHistory = (data: DataHistoryType) => {
    const {
        id,
        title,
        event_date_utc,
        event_date_unix,
        details,
        links: { reddit, article, wikipedia }
    } = data as DataHistoryType
    const linksArr = [
        {
            link: reddit,
            label: 'Reddit'
        },
        {
            link: article,
            label: 'Article'
        },
        {
            link: wikipedia,
            label: 'Wikipedia'
        }
    ].filter(lo => lo.link !== null)
    return (<div>
        <DataWrapper>
            <Title>{title}</Title>
            <EventDateUnix>{event_date_unix}</EventDateUnix>
        </DataWrapper>
        <DataWrapper>
            <EventDateUTC>{event_date_utc}</EventDateUTC>
        </DataWrapper>
        <DataWrapper>
            <Details>{details}</Details>
        </DataWrapper>
        <DataWrapper>
            <Links>
                {linksArr.map((linkObj, index) => 
                    <LinkWithTaget 
                        style={{ textAlign: getAlign(linksArr, index) }} 
                        href={linkObj.link}
                    >
                        {linkObj.label}
                    </LinkWithTaget>
                )}
            </Links>
        </DataWrapper>
    </div>
    )
}

export const renderLaunches = (data: DataLaunchType) => {
    const {
        flight_number,
        mission_name,
        launch_date_utc,
        launch_site
    } = data as DataLaunchType

    return (
    <div>
        <DataWrapper>
            <Title>{flight_number}</Title>
            <EventDateUnix>{launch_site && launch_site.site_name}</EventDateUnix>
        </DataWrapper>
        <DataWrapper>
            <EventDateUTC>{launch_date_utc}</EventDateUTC>
        </DataWrapper>
        <DataWrapper>
            <Details>{mission_name}</Details>
        </DataWrapper>
    </div>
    )
}
