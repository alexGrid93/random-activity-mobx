import { makeAutoObservable, runInAction } from "mobx";

class ActivityStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentRandomActivity = null;

  getRandomActivity = () => {
    fetch("https://www.boredapi.com/api/activity")
      .then((data) => data.json())
      .then((activity) =>
        runInAction(() => {
          this.currentRandomActivity = activity;
        })
      );
  };

  activitiesInList = [];

  getInitialActivitiesInList = () => {
    const requests = [];

    for (let i = 0; i < 4; i++) {
      requests.push(fetch("https://www.boredapi.com/api/activity"));
    }

    Promise.all(requests)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) =>
        runInAction(() => {
          data.forEach((activityItem) => {
            this.activitiesInList.push({
              text: activityItem.activity,
              id: activityItem.key,
              isDone: false,
            });
          });
        })
      );
  };

  addCurrentRandomActivity = () => {
    this.activitiesInList.push({
      id: this.currentRandomActivity.key,
      text: this.currentRandomActivity.activity,
      isDone: false,
    });
  };

  get canAddCurrentAcitivity() {
    return this.activitiesInList.every(
      (activity) => activity.id !== this.currentRandomActivity?.key
    );
  }

  deleteActivity = (id) => {
    this.activitiesInList = this.activitiesInList.filter(
      (activity) => activity.id !== id
    );
  };

  toggleActivity = (id) => {
    const currentActivity = this.activitiesInList.find(
      (activity) => activity.id === id
    );
    currentActivity.isDone = !currentActivity.isDone;
  };
}

export const activityStore = new ActivityStore();
