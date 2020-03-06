import freeze from 'deep-freeze-strict';

import loadingSlice from './slice-loading';

describe('loadingSlice', () => {
  describe('loading', () => {
    it('should set the state to loading', () => {
      const name = 'loading';
      const { reducer, actions } = loadingSlice({ name });
      const state = freeze({
        error: false,
        message: '',
        loading: false,
        success: false,
        lastRun: 0,
        lastSuccess: 0,
      });
      const actual = reducer(state, actions.loading({ timestamp: 1 }));

      expect(actual).toEqual({
        loading: true,
        error: false,
        message: '',
        success: false,
        lastRun: 1,
        lastSuccess: 0,
      });
    });

    it('should set the state to loading with a message', () => {
      const name = 'loading';
      const { reducer, actions } = loadingSlice({ name });
      const state = freeze({
        error: false,
        message: '',
        loading: false,
        success: false,
        lastRun: 0,
        lastSuccess: 0,
      });
      const actual = reducer(
        state,
        actions.loading({ message: 'hi there', timestamp: 2 }),
      );

      expect(actual).toEqual({
        loading: true,
        error: false,
        message: 'hi there',
        success: false,
        lastRun: 2,
        lastSuccess: 0,
      });
    });

    it('should set the state to loading with timestamp', () => {
      const name = 'loading';
      const { reducer, actions } = loadingSlice({ name });
      const state = freeze({
        error: false,
        message: '',
        loading: true,
        success: false,
        lastRun: 0,
        lastSuccess: 0,
      });

      const actualNow = Date.now;
      Date.now = () => 123;
      const actual = reducer(state, actions.loading());
      Date.now = actualNow;

      expect(actual).toEqual({
        loading: true,
        error: false,
        message: '',
        success: false,
        lastSuccess: 0,
        lastRun: 123,
      });
    });
  });

  describe('success', () => {
    it('should set the state to success', () => {
      const name = 'loading';
      const { reducer, actions } = loadingSlice({ name });
      const state = freeze({
        error: false,
        message: '',
        loading: true,
        success: false,
        lastRun: 0,
        lastSuccess: 0,
      });
      const actual = reducer(state, actions.success({ timestamp: 5 }));

      expect(actual).toEqual({
        loading: false,
        error: false,
        message: '',
        success: true,
        lastSuccess: 5,
        lastRun: 0,
      });
    });

    it('should set the state to loading with a message', () => {
      const name = 'loading';
      const { reducer, actions } = loadingSlice({ name });
      const state = freeze({
        error: false,
        message: '',
        loading: true,
        success: false,
        lastRun: 0,
        lastSuccess: 0,
      });
      const actual = reducer(
        state,
        actions.success({ message: 'wow', timestamp: 2 }),
      );

      expect(actual).toEqual({
        loading: false,
        error: false,
        message: 'wow',
        success: true,
        lastSuccess: 2,
        lastRun: 0,
      });
    });

    it('should set the state to success with timestamp', () => {
      const name = 'loading';
      const { reducer, actions } = loadingSlice({ name });
      const state = freeze({
        error: false,
        message: '',
        loading: true,
        success: false,
        lastRun: 0,
        lastSuccess: 0,
      });

      const actualNow = Date.now;
      Date.now = () => 123;
      const actual = reducer(state, actions.success());
      Date.now = actualNow;

      expect(actual).toEqual({
        loading: false,
        error: false,
        message: '',
        success: true,
        lastSuccess: 123,
        lastRun: 0,
      });
    });
  });

  describe('error', () => {
    const name = 'loading';
    const { reducer, actions } = loadingSlice({ name });
    const state = freeze({
      error: false,
      message: 'cool',
      loading: true,
      success: false,
      lastRun: 0,
      lastSuccess: 0,
    });
    const actual = reducer(state, actions.error({ message: 'something' }));

    expect(actual).toEqual({
      loading: false,
      message: 'something',
      error: true,
      success: false,
      lastRun: 0,
      lastSuccess: 0,
    });
  });
});
