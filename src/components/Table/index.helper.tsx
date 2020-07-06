import React from 'react';
import moment from 'moment';
import {
  DataWrapper,
  Title,
  EventDateUnix,
  EventDateUTC,
  Details,
  Links,
  Link,
  MissionName,
  LaunchSite,
  Nationality,
  Manufacturer,
  PayloadType,
} from './atoms';
import { DataHistoryType, DataLaunchType } from './types';
import { formatDateLayout } from '../../utils';

const LinkWithTaget = ({ style, href, children } : any) => <Link style={style} href={href} target="_blank">{children}</Link>;

const getAlign = (arr : any[], index : number) : 'left' | 'center' | 'right' => {
  if (index === 0) {
    return 'left';
  }
  if (index < arr.length - 1) {
    return 'center';
  }
  return 'right';
};

export const renderHistory = (data : DataHistoryType) => {
  const {
    title,
    event_date_utc: eventDateUtc,
    event_date_unix: eventDateUnix,
    details,
    links: {
      reddit,
      article,
      wikipedia,
    },
  } = data as DataHistoryType;
  const linksArr = [
    {
      link: reddit,
      label: 'Reddit',
    }, {
      link: article,
      label: 'Article',
    }, {
      link: wikipedia,
      label: 'Wikipedia',
    },
  ].filter((lo) => lo.link !== null);
  return (
    <div>
      <DataWrapper>
        <Title>{title}</Title>
        <EventDateUnix>{eventDateUnix}</EventDateUnix>
      </DataWrapper>
      <DataWrapper>
        <EventDateUTC>{eventDateUtc}</EventDateUTC>
      </DataWrapper>
      <DataWrapper>
        <Details>{details}</Details>
      </DataWrapper>
      <DataWrapper>
        <Links>
          {linksArr.map((linkObj, index) => (
            <LinkWithTaget
              key={linkObj.label}
              style={{
                textAlign: getAlign(linksArr, index),
              }}
              href={linkObj.link}
            >
              {linkObj.label}
            </LinkWithTaget>
          ))}
        </Links>
      </DataWrapper>
    </div>
  );
};

export const renderLaunches = (data : DataLaunchType, isLoadedInModal?: boolean) => {
  const {
    flight_number: flightNumber,
    mission_name: missionName,
    launch_date_utc: launchDateUtc,
    launch_site: launchSite,
    details,
    links: {
      youtube_id: youtubeId,
    },
    rocket: {
      second_stage: {
        payloads,
      },
    },
  } = data as DataLaunchType;
  const {
    manufacturer, nationality, payload_type: payloadType,
  } = payloads && payloads[0];

  const formattedDate = moment(launchDateUtc).format(formatDateLayout);
  return (
    <div style={{
      paddingBottom: 20,
    }}
    >
      <DataWrapper>
        <MissionName>{missionName}</MissionName>
        <LaunchSite>{launchSite && launchSite.site_name}</LaunchSite>
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
        <PayloadType>{payloadType}</PayloadType>
      </DataWrapper>
      {isLoadedInModal === true && youtubeId !== null && (
        <DataWrapper isCentered>
          <iframe
            title={`Video ${flightNumber}`}
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${youtubeId}`}
          />
        </DataWrapper>
      )}
    </div>
  );
};
