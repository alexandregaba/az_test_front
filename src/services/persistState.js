class DataPersitenceService {
  constructor(persistenceTool = localStorage) {
    this.persistenceTool = persistenceTool;
  }

  serialize(item) {
    return JSON.stringify(item);
  }

  parseItem(item) {
    return JSON.parse(item);
  }

  saveState(state) {
    try {
      const serializedState = this.serialize(state);
      this.persistenceTool.setItem('state', serializedState);
    } catch (error) {
      console.warn('Error while saving State:', error); // eslint-disable-line no-console
    }
  }

  getSavedState() {
    try {
      const serializedState = this.persistenceTool.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return this.parseItem(serializedState);
    } catch (error) {
      return undefined;
    }
  }
}

export default DataPersitenceService;
