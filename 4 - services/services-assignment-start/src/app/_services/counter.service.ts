export class CounterService {
    activeToInactive = 0;
    inactiveToActive = 0;

    addActiveToInactive() {
        this.activeToInactive ++;
        console.log('Active to inactive: ' + this.activeToInactive);
    }

    addInactiveToActive() {
        this.inactiveToActive ++;
        console.log('Inactive to active: ' + this.inactiveToActive);
    }
}