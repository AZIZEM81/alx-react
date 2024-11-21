import getImmutableObject from './0-fromjs';
import { Map } from 'immutable';

describe('getImmutableObject', () => {
  it('converts object to immutable Map', () => {
    const obj = {
      fear: true,
      smell: -1033575916.9145899,
      wall: false,
      thing: -914767132
    };

    const immutableMap = getImmutableObject(obj);
    
    // Check if result is an Immutable Map
    expect(Map.isMap(immutableMap)).toBe(true);
    
    // Check if values are preserved
    expect(immutableMap.get('fear')).toBe(true);
    expect(immutableMap.get('smell')).toBe(-1033575916.9145899);
    expect(immutableMap.get('wall')).toBe(false);
    expect(immutableMap.get('thing')).toBe(-914767132);
  });
});
