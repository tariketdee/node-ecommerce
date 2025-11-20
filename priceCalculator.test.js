// __tests__/priceCalculator.test.js
const { calculateFinalPrice } = require('../src/priceCalculator');

describe('E-commerce Price Calculation Unit Tests', () => {

  // Test 1: ทดสอบส่วนลดปกติ
  test('Should apply standard 10% discount correctly', () => {
    // ราคา 1000 บาท, ส่วนลด 10% (0.10)
    expect(calculateFinalPrice(1000, 0.10, false)).toBe(900.00);
  });

  // Test 2: ทดสอบกรณีไม่มีส่วนลด
  test('Should return original price if no discount', () => {
    // ราคา 500 บาท, ส่วนลด 0%
    expect(calculateFinalPrice(500, 0, false)).toBe(500.00);
  });

  // Test 3: ทดสอบส่วนลด Premium (ต้องได้ส่วนลด 5% เพิ่ม)
  test('Should apply extra 5% discount for Premium members (for total > 1000)', () => {
    // ราคา 1500 บาท, ส่วนลด 10% -> เหลือ 1350 บาท
    // Premium เพิ่ม 5% จาก 1350 บาท (1350 * 0.95 = 1282.5)
    expect(calculateFinalPrice(1500, 0.10, true)).toBe(1282.50);
  });
  
  // Test 4: ทดสอบส่วนลด Premium แต่ยอดไม่ถึง 1000 บาท (ไม่ควรได้เพิ่ม)
  test('Should NOT apply extra Premium discount if price is below 1000', () => {
    // ราคา 900 บาท, ส่วนลด 10% -> เหลือ 810 บาท
    // Premium ไม่ทำงานเพราะ 810 < 1000
    expect(calculateFinalPrice(900, 0.10, true)).toBe(810.00);
  });
});