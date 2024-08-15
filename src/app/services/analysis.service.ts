import { Injectable } from '@angular/core';
import { Friend } from '../types/friend';
import { Trait } from '../types/trait';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor() { }

  getStatisticsForTraits(traits: Array<Trait>, friends: Array<Friend>){
    
    traits.filter(trait => !trait.isNoGo).forEach(trait => {
      friends.reduce((sum, friend) => sum + friend[trait.name])
    })
  }
}
