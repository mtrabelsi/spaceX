import React from 'react'
import moment from 'moment'
import { DataWrapper, Title, EventDateUnix, EventDateUTC, Details, Links, Link, MissionName, LaunchSite, Nationality, Manufacturer, PayloadType } from './atoms'
import { DataHistoryType, DataLaunchType } from './types'
import { formatDateLayout } from '../../utils'

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

export const renderLaunches = (data: DataLaunchType, isLoadedInModal?: boolean) => {
    console.log("we render");
    const {
        flight_number,
        mission_name,
        launch_date_utc,
        launch_site,
        details,
        links : {
            youtube_id
        },
        rocket: {
            second_stage: {
                payloads
            }
        },
        links
    } = data as DataLaunchType
    const {
        manufacturer,
        payload_id,
        nationality,
        payload_type, 
    } = payloads && payloads[0]

    const formattedDate = moment(launch_date_utc).format(formatDateLayout)
    return (
    <div style={{ paddingBottom: 20 }}>
        <DataWrapper>
            <MissionName>{mission_name}</MissionName>
            <LaunchSite>{launch_site && launch_site.site_name}</LaunchSite>
        </DataWrapper>
        <DataWrapper>
            <EventDateUTC>{formattedDate}</EventDateUTC>
            <Nationality>{nationality}</Nationality>
        </DataWrapper>
        <DataWrapper>
            <Details>{details}</Details>
            <Manufacturer>{manufacturer}</Manufacturer>
        </DataWrapper>
        <DataWrapper>
            <PayloadType>{payload_type}</PayloadType>
        </DataWrapper>
        {isLoadedInModal === true && youtube_id!==null && <DataWrapper isCentered>
            <iframe 
                width="640" 
                height="360"
                src={`https://www.youtube.com/embed/${youtube_id}`}
                >
            </iframe>
        </DataWrapper>}
    </div>
    )
}
