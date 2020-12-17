import React from 'react'

import q1All from '../../../../../sites/forest/src/images/megaform-icons/Q1-all.svg'
import q2BestValue from '../../../../../sites/forest/src/images/megaform-icons/Q2-best-value.svg'
import q2LowestPrice from '../../../../../sites/forest/src/images/megaform-icons/Q2-lowest-price.svg'
import q2MoreChannels from '../../../../../sites/forest/src/images/megaform-icons/Q2-more-channels.svg'
import q3FamilyFriendly from '../../../../../sites/forest/src/images/megaform-icons/Q3-family-friendly.svg'
import q3Local from '../../../../../sites/forest/src/images/megaform-icons/Q3-local.svg'
import q3Other from '../../../../../sites/forest/src/images/megaform-icons/Q3-other.svg'
import q3PremiumEntertainment from '../../../../../sites/forest/src/images/megaform-icons/Q3-premium-entertainment.svg'
import q3Sports from '../../../../../sites/forest/src/images/megaform-icons/Q3-sports.svg'
import q3News from '../../../../../sites/forest/src/images/megaform-icons/Q3-news.svg'
import q4ChannelSelection from '../../../../../sites/forest/src/images/megaform-icons/Q4-channel-selection.svg'
import q4GreatPrice from '../../../../../sites/forest/src/images/megaform-icons/Q4-great-price.svg'
import q4Other from '../../../../../sites/forest/src/images/megaform-icons/Q4-other.svg'

export default {
  'e56c73bb-964d-466b-84d8-bb28969ebbdd': {
    numberOfDots: 4,
    loadingDelayPerItem: 1000,
    steps: [
      {
        title: 'How many TVs do you plan to watch DISH TV on?',
        options: [
          {
            icon: <img style={{width: 48}} src={q1All} alt="" />,
            text: '1-2',
            key: 'tv_number',
            value: 'one_to_two',
            next: 2,
            loading: {
              title: 'TVs',
              description: '1-2',
            },
          },
          {
            icon: <img style={{width: 48}} src={q1All} alt="" />,
            text: '3-4',
            key: 'tv_number',
            value: 'three_to_four',
            next: 2,
            loading: {
              title: 'TVs',
              description: '3-4',
            },
          },
          {
            icon: <img style={{width: 48}} src={q1All} alt="" />,
            text: '5+',
            key: 'tv_number',
            value: 'five_plus',
            next: 2,
            loading: {
              title: 'TVs',
              description: '5+',
            },
          },
        ],
      },
      {
        title: 'What sort of package are you looking for?',
        options: [
          {
            icon: <img style={{width: 48}} src={q2BestValue} alt="" />,
            text: 'Best Value',
            key: 'package',
            value: 'value',
            next: 3,
            loading: {
              title: 'Packages',
              description: 'Best value',
            },
          },
          {
            icon: <img style={{width: 48}} src={q2MoreChannels} alt="" />,
            text: 'More Channels',
            key: 'package',
            value: 'channels',
            next: 3,
            loading: {
              title: 'Packages',
              description: 'More channels',
            },
          },
          {
            icon: <img style={{width: 48}} src={q2LowestPrice} alt="" />,
            text: 'Lowest Price',
            key: 'package',
            value: 'price',
            next: 3,
            loading: {
              title: 'Packages',
              description: 'Lowest price',
            },
          },
        ],
      },
      {
        title: 'What type of channels are you most interested in?',
        options: [
          {
            icon: <img style={{width: 48}} src={q3Sports} alt="" />,
            text: 'Sports',
            key: 'channels',
            value: 'sports',
            next: 4,
            loading: {
              title: 'Channels',
              description: 'Sports',
            },
          },
          {
            icon: <img style={{width: 48}} src={q3PremiumEntertainment} alt="" />,
            text: 'Premium Entertainment',
            key: 'channels',
            value: 'premium',
            next: 4,
            loading: {
              title: 'Channels',
              description: 'Premium entertainment',
            },
          },
          {
            icon: <img style={{width: 48}} src={q3FamilyFriendly} alt="" />,
            text: 'Family Friendly',
            key: 'channels',
            value: 'family',
            next: 4,
            loading: {
              title: 'Channels',
              description: 'Family friendly',
            },
          },
          {
            icon: <img style={{width: 48}} src={q3Local} alt="" />,
            text: 'Local',
            key: 'channels',
            value: 'local',
            next: 4,
            loading: {
              title: 'Channels',
              description: 'Local',
            },
          },
          {
            icon: <img style={{width: 48}} src={q3News} alt="" />,
            text: 'News',
            key: 'channels',
            value: 'news',
            next: 4,
            loading: {
              title: 'Channels',
              description: 'News',
            },
          },
          {
            icon: <img style={{width: 48}} src={q3Other} alt="" />,
            text: 'Other',
            key: 'channels',
            value: 'other',
            next: 4,
            loading: {
              title: 'Channels',
              description: 'Other',
            },
          },
        ],
      },
      {
        title: 'Why are you interested in DISH TV?',
        options: [
          {
            icon: <img style={{width: 48}} src={q4ChannelSelection} alt="" />,
            text: 'Channel Selection',
            key: 'reason_interest',
            value: 'channels',
            next: null,
            loading: {
              title: 'Interest',
              description: 'Channel selection',
            },
          },
          {
            icon: <img style={{width: 48}} src={q4GreatPrice} alt="" />,
            text: 'Great Price',
            key: 'reason_interest',
            value: 'price',
            next: null,
            loading: {
              title: 'Interest',
              description: 'Great price',
            },
          },
          {
            icon: <img style={{width: 48}} src={q4Other} alt="" />,
            text: 'Other',
            key: 'reason_interest',
            value: 'other',
            next: null,
            loading: {
              title: 'Interest',
              description: 'Other',
            },
          },
        ],
      },
    ],
  },
}
