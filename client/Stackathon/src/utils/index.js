// A file where we can create different functions to reuse inside of our application

import {surpriseMePrompts, SurpriseMePrompts} from '../constants'

export function getRandomPrompt(prompt){
  const randomIndex =Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt ) return getRandomPrompt(prompt);
}