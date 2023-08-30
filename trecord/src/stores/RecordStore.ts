import { makeAutoObservable } from 'mobx';

class RecordStore {
  id: string;
  thumbNail: { data: File | null; url: string | null };
  title: string;
  startDate: string;
  weather: string;
  place: string;
  feel: string;
  move: string;
  withPeople: string;

  constructor() {
    this.id = '';
    this.thumbNail = { data: null, url: null };
    this.title = '';
    this.startDate = '';
    this.weather = '';
    this.place = '';
    this.feel = '';
    this.move = '';
    this.withPeople = '';

    makeAutoObservable(this);
  }

  setId(id: string) {
    this.id = id;
  }

  setThumbNail(thumbNail: { data: File | null; url: string | null }) {
    this.thumbNail = thumbNail;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setStartDate(startDate: string) {
    this.startDate = startDate;
  }

  setWeather(weather: string) {
    this.weather = weather;
  }

  setPlace(place: string) {
    this.place = place;
  }

  setFeel(feel: string) {
    this.feel = feel;
  }

  setMove(move: string) {
    this.move = move;
  }

  setWithPeople(withPeople: string) {
    this.withPeople = withPeople;
  }

  resetAll() {
    this.id = '';
    this.thumbNail = { data: null, url: null };
    this.title = '';
    this.startDate = '';
    this.weather = '';
    this.place = '';
    this.feel = '';
    this.move = '';
    this.withPeople = '';
  }
}

export default RecordStore;