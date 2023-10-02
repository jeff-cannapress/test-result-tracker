import { useDispatch, useSelector } from 'react-redux';
import rootStore from './store';
import * as TestDefinitionSelectors from './store/tests.selector';
import * as TestDefinitionThunks from './store/tests.thunk';


import * as LabThunks from './store/labs.thunk';
import * as LabSelectors from './store/labs.selector';

import { AppDispatch, UseAppSelector } from './store/state';
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: UseAppSelector = useSelector;
export const store = rootStore;
export const Thunks = Object.freeze({
    Labs: LabThunks,
    TestDefinitions: TestDefinitionThunks
});
export const Selectors = Object.freeze({
    TestDefinitions:TestDefinitionSelectors,
    Labs:LabSelectors
});