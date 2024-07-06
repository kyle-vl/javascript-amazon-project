import formatCurrency from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  })

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  })

  it('rounds up to nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  })

  it('rounds down to nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  })

  it('works with negative numbers', () => {
    expect(formatCurrency(-3000)).toEqual('-30.00');
  })
});