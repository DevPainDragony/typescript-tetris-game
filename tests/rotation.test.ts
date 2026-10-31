import { describe, expect, it } from 'vitest';
import { rotate } from '../src/rotation';

describe('Tetris piece rotation', () => {
  it('rotates a T piece clockwise', () => {
    expect(rotate([
      [0, 1, 0],
      [1, 1, 1],
    ])).toEqual([
      [1, 0],
      [1, 1],
      [1, 0],
    ]);
  });

  it('rotates a horizontal I piece into a vertical piece', () => {
    expect(rotate([[1, 1, 1, 1]])).toEqual([
      [1],
      [1],
      [1],
      [1],
    ]);
  });

  it('keeps the shape of an O piece', () => {
    expect(rotate([
      [1, 1],
      [1, 1],
    ])).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });

  it('returns to the original position after four rotations', () => {
    const original = [
      [1, 0, 0],
      [1, 1, 1],
    ];

    expect(rotate(rotate(rotate(rotate(original)))))
      .toEqual(original);
  });

  it('does not change the original matrix', () => {
    const original = [
      [0, 1, 0],
      [1, 1, 1],
    ];
    const copy = original.map(row => [...row]);

    rotate(original);

    expect(original).toEqual(copy);
  });
});
