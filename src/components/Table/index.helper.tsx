import React from 'react'
import { DataWrapper, Title, EventDateUnix, EventDateUTC, Details, Links } from './atoms'
import { DataHistoryType, DataLaunchType } from './types'

export const renderHistory = (data: DataHistoryType) => {
    const {
        id,
        title,
        event_date_utc,
        event_date_unix,
        details,
        links: { reddit, article, wikipedia }
    } = data as DataHistoryType

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
            <Links>
                {reddit}
                {article}
                {wikipedia}
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
