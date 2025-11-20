// src/priceCalculator.js

/**
 * คำนวณราคาสินค้าสุทธิหลังหักส่วนลด
 * @param {number} price ราคาเริ่มต้น
 * @param {number} discountPercent เปอร์เซ็นต์ส่วนลด (เช่น 0.10 สำหรับ 10%)
 * @param {boolean} isPremiumMember เป็นสมาชิก Premium หรือไม่ (ได้ส่วนลดเพิ่ม 5%)
 * @returns {number} ราคาสุทธิ
 */
function calculateFinalPrice(price, discountPercent, isPremiumMember) {
    let finalPrice = price * (1 - discountPercent);

    if (isPremiumMember && finalPrice > 1000) {
        // สมาชิก Premium ได้ส่วนลดเพิ่ม 5% สำหรับยอดซื้อเกิน 1000 บาท
        finalPrice = finalPrice * 0.95;
    }

    // ปัดเศษทศนิยมให้เหลือ 2 ตำแหน่ง
    return parseFloat(finalPrice.toFixed(2));
}

// export ฟังก์ชันเพื่อให้ Jest นำไปใช้ได้
module.exports = {
    calculateFinalPrice
};