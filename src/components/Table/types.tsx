export type Link = {
    reddit: string | null,
    article: string | null,
    wikipedia: string | null
}

export type DataHistoryType = {
    id: string,
    title: string,
    event_date_utc: string,
    event_date_unix: number,
    details: string,
    links: Link
}

export type DataLaunchType = {
    flight_number: number,
    mission_name: string,
    launch_date_utc: string,
    launch_site: {
        site_name: string
    }
}

export type TableItemProps = {
    renderData: () => any,
    dataType: 'history' | 'launches',
    itemData: DataHistoryType | DataLaunchType,
    itemClickHandler: (id: string) => void
}
