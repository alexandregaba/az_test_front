import DataPersitenceService from './persistState';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

const dataPersitenceService = new DataPersitenceService(localStorageMock);

it('serialize state', () => {
  const state = [{ name: 'fruit', id: '1' }];
  expect(dataPersitenceService.serialize(state)).toBe('[{"name":"fruit","id":"1"}]');
});

it('saves to localStorage', () => {
  const state = [{ name: 'fruit', id: '1' }];
  dataPersitenceService.saveState(state);
  expect(localStorageMock.setItem).toHaveBeenCalledWith(
    'state',
    dataPersitenceService.serialize(state),
  );
});

it('returns savedState', () => {
  dataPersitenceService.getSavedState();
  expect(localStorageMock.getItem).toHaveBeenCalledWith('state');
});
