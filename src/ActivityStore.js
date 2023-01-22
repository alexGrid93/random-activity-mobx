import { makeAutoObservable, runInAction } from "mobx";
import { getActivity } from "./api/getActivity";
import { getInitialActivities } from "./api/getInitialActivities";

class ActivityStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentRandomActivity = null;

  setRandomActivity = () => {
    getActivity().then((activity) =>
      runInAction(() => {
        this.currentRandomActivity = activity;
      })
    );
  };

  activitiesInList = [];

  get activitiesCount() {
    return this.activitiesInList.length;
  }

  get activitiesCountDone() {
    return this.activitiesInList.reduce((acc, current) => {
      if (current.isDone) acc++;
      return acc;
    }, 0);
  }

  setInitialActivitiesInList = () => {
    getInitialActivities().then((data) =>
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
