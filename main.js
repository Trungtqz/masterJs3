// bai1
const button  = document.getElementById("btnKiemTra");
button.addEventListener("click", kiemTraKetQua);

function kiemTraKetQua() {
   const diemMon1 = parseFloat(document.getElementById("diemMon1").value);
   const diemMon2 = parseFloat(document.getElementById("diemMon2").value);
   const diemMon3 = parseFloat(document.getElementById("diemMon3").value);
   const khuVuc = document.getElementById("khuVuc").value;
   const doiTuong = parseInt(document.getElementById("doiTuong").value);

   let diemUuTienKhuVuc = 0;

   switch (khuVuc) {
      case "A":
          diemUuTienKhuVuc = 2;
          break;
      case "B":
          diemUuTienKhuVuc = 1;
          break;
      case "C":
          diemUuTienKhuVuc = 0.5;
          break;
  }
  
  let diemUuTienDoiTuong = 0;
  
  switch (doiTuong) {
      case 1:
          diemUuTienDoiTuong = 2.5;
          break;
      case 2:
          diemUuTienDoiTuong = 1.5;
          break;
      case 3:
          diemUuTienDoiTuong = 1;
          break;
  }

  let diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

  let ketQuaElement = document.getElementById("result");
  ketQuaElement.innerHTML = "Điểm tổng kết: " + diemTongKet;

  if (diemTongKet >= 5) {
      ketQuaElement.innerHTML += "<br>Thí sinh đậu!";
  } else {
      ketQuaElement.innerHTML += "<br>Thí sinh rớt!";
  }
};





// bai2

document.getElementById('calculateButton').addEventListener('click', calculateBill);

function calculateBill() {
   var name = document.getElementById('name').value;
   var consumedKw = parseFloat(document.getElementById('consumedKw').value);

   var costPerKw;

   if (consumedKw <= 50) {
       costPerKw = 500;
   } else if (consumedKw <= 100) {
       costPerKw = 650;
   } else if (consumedKw <= 150) {
       costPerKw = 850;
   } else {
       costPerKw = 1100;
   }

   var totalCost = consumedKw * costPerKw;

   var resultElement = document.getElementById('result2');
   resultElement.innerHTML = 'Tên: ' + name + '<br>' +
       'Số Kw tiêu thụ: ' + consumedKw + '<br>' +
       'Tiền phải trả: ' + totalCost + ' đồng';
};





// bai3
document.getElementById("tinhThue").addEventListener("click", function() {
   const hoTen = document.getElementById("hoTen").value;
   const tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);
   const soNguoiPhuThuoc = parseInt(document.getElementById("soNguoiPhuThuoc").value);

   let thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;

   var thueSuat;
   switch (true) {
       case thuNhapChiuThue <= 60000000:
           thueSuat = 5 / 100;
           break;
       case thuNhapChiuThue <= 120000000:
           thueSuat = 10 / 100;
           break;
       case thuNhapChiuThue <= 210000000:
           thueSuat = 15 / 100;
           break;
       case thuNhapChiuThue <= 384000000:
           thueSuat = 20 / 100;
           break;
       case thuNhapChiuThue <= 624000000:
           thueSuat = 25 / 100;
           break;
       case thuNhapChiuThue <= 960000000:
           thueSuat = 30 / 100;
           break;
       default:
           thueSuat = 35 / 100;
           break;
   }

   let thue = thuNhapChiuThue * thueSuat;

   let ketQua = `Tiền thuế thu nhập cá nhân của ${hoTen}: ${thue.toLocaleString()} VND.`;
   document.getElementById("ketQua").innerText = ketQua;
});



// bai4

document.getElementById('tinhHoaDonBtn').addEventListener('click', tinhHoaDon);
document.getElementById('loaiKhachHang').addEventListener('change', hienThiNhapKetNoi);

function tinhHoaDon() {
   const maKhachHang = document.getElementById("maKhachHang").value;
   const loaiKhachHang = document.getElementById("loaiKhachHang").value;
   const soKetNoi = document.getElementById("soKetNoi").value;
   const soKenhCaoCap = document.getElementById("soKenhCaoCap").value;

   let phiXuLyHoaDon = 0;
   let phiDichVuCoBan = 0;
   let phiThueKenhCaoCap = 0;

   if (loaiKhachHang === "nhaDan") {
       phiXuLyHoaDon = 4.5;
       phiDichVuCoBan = 20.5;
       phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
   } else if (loaiKhachHang === "doanhNghiep") {
       phiXuLyHoaDon = 15;
       phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
       phiThueKenhCaoCap = 50 * soKenhCaoCap;
   }

   let tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;

   let ketQua = "Mã Khách Hàng: " + maKhachHang + "\n";
   ketQua += "Loại Khách Hàng: " + (loaiKhachHang === "nhaDan" ? "Nhà Dân" : "Doanh Nghiệp") + "\n";
   ketQua += "Tổng Tiền: $" + tongTien.toFixed(2);

   document.getElementById("ketQua1").innerHTML = ketQua;
}

function hienThiNhapKetNoi() {
   const loaiKhachHang = document.getElementById("loaiKhachHang").value;
   const inputSoKetNoi = document.getElementById("inputSoKetNoi");

   if (loaiKhachHang === "doanhNghiep") {
       inputSoKetNoi.style.display = "block";
       soKetNoi.style.display = "block";
   } else {
       inputSoKetNoi.style.display = "none";
   }
}