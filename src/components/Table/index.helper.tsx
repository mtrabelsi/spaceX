import React from 'react'
import { DataWrapper, Title, EventDateUnix, EventDateUTC, Details, Links, Link, MissionName, LaunchSite, Nationality, Manufacturer, PayloadType } from './atoms'
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
                        key={linkObj.label}
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
    console.log("we render");
    const {
        flight_number,
        mission_name,
        launch_date_utc,
        launch_site,
        details,
        rocket: {
            second_stage: {
                payloads
            }
        }
    } = data as DataLaunchType
    const {
        manufacturer,
        payload_id,
        nationality,
        payload_type, 
    } = payloads && payloads[0]
    return (
    <div>
        <DataWrapper>
            <MissionName>{mission_name}</MissionName>
            <LaunchSite>{launch_site && launch_site.site_name}</LaunchSite>
        </DataWrapper>
        <DataWrapper>
            <EventDateUTC>{launch_date_utc}</EventDateUTC>
            <Nationality>{nationality}</Nationality>
        </DataWrapper>
        <DataWrapper>
            <Details>{details}</Details>
            <Manufacturer>{manufacturer}</Manufacturer>
        </DataWrapper>
        <DataWrapper>
            <PayloadType>{payload_type}</PayloadType>
        </DataWrapper>

    </div>
    )
}
