import AlliesAndGifts from '~/assets/icons/AlliesAndGifts.png';
import BetterWorld from '~/assets/icons/BetterWorld.png';
import CallToAdventure from '~/assets/icons/CallToAdventure.png';
import CrossingTheThreshold from '~/assets/icons/CrossingTheThreshold.png';
import EverydayHero from '~/assets/icons/EverydayHero.png';
import Mentor from '~/assets/icons/Mentor.png';
import OrdinaryWorld from '~/assets/icons/OrdinaryWorld.png';
import ThreeChallenges from '~/assets/icons/ThreeChallenges.png';
import Villain from '~/assets/icons/Villain.png';

let icons = [
  EverydayHero,
  OrdinaryWorld,
  CallToAdventure,
  BetterWorld,
  CrossingTheThreshold,
  AlliesAndGifts,
  Mentor,
  Villain,
  ThreeChallenges
];

export const storyData = {
  sections: {
    'Everyday Hero': {
      icon: EverydayHero,
      maxlength: 695,
      guidance:
        'The group or individual to be inspired to do things differently. We need to be interested in what happens to them. How is the hero relatable?'
    },
    'Ordinary World': {
      icon: OrdinaryWorld,
      maxlength: 250,
      guidance:
        'The everyday world, which is increasingly frustrating for our heroes to live in. We would want to change it too. What is recognisable about their frustration?'
    },
    'Call to Adventure': {
      icon: CallToAdventure,
      maxlength: 250,
      guidance:
        'The trigger for change, which could be the pull of inspiration or the push of necessity. We care about what sparks others to act. What compels the hero?'
    },
    'Better World': {
      icon: BetterWorld,
      maxlength: 695,
      guidance:
        'The positive change to the hero and the difference the hero has made. We need to see inner-growth as well as a better world. Why is the journey worthwhile?'
    },
    'Crossing the Threshold': {
      icon: CrossingTheThreshold,
      maxlength: 200,
      guidance:
        'The start of doing something different. We want to see what commitment looks like. What is the first step on the journey of change?'
    },
    'Allies and Gifts': {
      icon: AlliesAndGifts,
      maxlength: 250,
      guidance:
        'The people and help that is needed for change to happen. We judge the likelihood of success by the company the hero keeps. What friends does the hero need?'
    },
    'Mentor and Gifts': {
      icon: Mentor,
      maxlength: 695,
      guidance:
        'The giver of wisdom and support from someone that has been on the journey. We believe their presence will help the hero fulfil their destiny. How does the mentor help?'
    },
    'Compelling Villain': {
      icon: Villain,
      maxlength: 750,
      guidance:
        'An attention grabbing manifestation of the selfish behaviour that stands in the way of change. We want to see it defeated. Why is the villain compelling?'
    },
    'Three Challenges': {
      icon: ThreeChallenges,
      maxlength: 750,
      guidance:
        'Three difficult but confidence-building hurdles to be overcome. We know change is hard and we learn from experiences. What challenges does the hero face?'
    }
  }
};
