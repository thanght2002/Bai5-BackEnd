// // Câu 01: Arithmetic (Toán tử số học)
// var x = 5;
// var y = 3;

// // addition
// console.log("x + y = ", x + y); //8

// // subtraction
// console.log("x - y = ", x - y); //2

// // multiplication
// console.log("x * y = ", x * y); //15

// // division
// console.log("x / y = ", x / y); //1.6666666666666667

// // remainder
// console.log("x % y = ", x % y); //2

// // increment
// console.log("++x = ", ++x);  //x lúc này là = 6
// console.log("x++ = ", x++);  //x lúc này in ra 6 và sau đó tăng lên 7
// console.log("x = ", x);  //7

// // decrement
// console.log("--x = ", --x);  //x lúc này là = 2
// console.log("x-- = ", x--);  //x lúc này in ra 2 và sau đó giảm lên 1
// console.log("x = ", x);  //1

// //exponentiation
// console.log("x ** y =", x ** y);  //125



// // Câu 02: Comparison (Toán tử so sánh)
// // equal operator
// console.log(2 == 2); //true
// console.log(2 == '2'); //false vì bên trái là number, bên phải là string

// // not equal operator
// console.log(3 != 2); //true vì khác số
// console.log('hello' != 'Hello'); //true vì khác kí tự string

// // strict equal operator
// console.log(2 === 2); //true
// console.log(2 === '2'); //false vì bên trái là number, bên phải là string

// // strict not equal operator
// console.log(2 !== '2'); //true vì 2 bên khác kiểu dữ liệu
// console.log(2 !== 2); //false vì 2 bên cùng kiểu dữ liệu và cùng tham số



// Câu 03: Logical (Toán tử logic)
// logical AND
// console.log(true && true); //true vì cả 2 đều true
// console.log(true && false); //false vì có 1 false

// logical OR
// console.log(true || false); //true vì chỉ cần 1 true là hoàn thành điều kiện

// // logical NOT
// console.log(!true); //false



// // Câu 04: String operators (Nối chuỗi)
// // console.log("hello" + "world"); //helloworld

// var a = "JavaScript";

// a += " tutorial";
// console.log(a); //JavaScript tutorial



// // Câu 05: Swapping Variables (Hoán đổi biến)
// var value1 = "one";
// var value2 = "two";
// console.log("Giá trị ban đầu:", value1);
// console.log("Giá trị ban đầu:", value2);

// //Hoán đổi biến
// var value3 = value1;
// value1 = value2;
// value2 = value3;
// console.log("Giá trị sau khi hoán đổi:", value1);
// console.log("Giá trị sau khi hoán đổi:", value2);



// Câu 06: Một hình tròn và hai hình vuông
// - Hãy tưởng tượng một hình tròn nằm giữa và có hai hình vuông: một hình vuông nhỏ hơn và một hình vuông lớn hơn.
// - Đối với hình vuông nhỏ hơn, thì hình tròn là ngoại tiếp.
// - Đối với hình vuông lớn hơn, thì hình tròn là nội tiếp.
// Tạo một hàm nhận vào một số nguyên (bán kính hình tròn) và trả về hiệu của diện tích hai hình vuông (Diện tích phần màu đỏ).

// var banKinh = prompt("Bán kính của hình tròn là:");
// var hinhVuongNho = 2*(banKinh)**2;
// var hinhVuongLon = (banKinh*2)**2;
// var hieuHaiHinhVuong = hinhVuongLon - hinhVuongNho;

// alert("Hiệu hai hình vuông là: " + hieuHaiHinhVuong);



// // Câu 07: Kiểm tra xem một chuỗi có phải là palindrome hay không?
// var chuXuoi = prompt("Vui lòng nhập đoạn chữ của bạn: ");
// var chuNguoc = chuXuoi.split("").reverse().join("");
// var kiemTra = chuXuoi === chuNguoc;

// alert("Chữ ngược của bạn là: " + chuNguoc + ". Và nó có giá trị là: " + kiemTra);



// // Câu 08: Data Types (Kiểu dữ liệu)
// console.log(typeof "Le Van A"); //string
// console.log(typeof 5000); //number
// console.log(typeof 5000.99); //number
// console.log(typeof [10, 15, 17]); //object
// console.log(typeof { name: "Le Van A", age: 18, country: "Viet Nam" }); // object
// console.log(typeof true); //boolean
// console.log(typeof false); //boolean
// console.log(typeof undefined); //undefined
// console.log(typeof null); //objectt 



// // Câu 09: Template Literals (Template Strings)
// var img = "https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png";
// var title = "JS TIPS - Một số cách viết JS ngắn gọn hơn";
// var desc = "Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả...";
// var url = "https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon";

// var string = `
//   <div class="article">
//     <a href="${url}">
//     <div class="inner-image">
//       <img src="${img}" />
//     </div>
//     <div class="inner-content">
//       <h2 class="inner-title">${title}</h2>
//       <p class="inner-desc">${desc}</p>
//     </div>
//     </a>
//   </div>
// `;
// // <div class="article">
// //     <a href="https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon">
// //     <div class="inner-image">
// //         <img src="https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png" />
// //     </div>
// //     <div class="inner-content">
// //         <h2 class="inner-title">JS TIPS - Một số cách viết JS ngắn gọn hơn</h2>
// //         <p class="inner-desc">Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả...</p>
// //     </div>
// //     </a>
// // </div>



// // Câu 10: Type Coercion (Ép kiểu)
// var a = "100";
// var b = 20;
// var c = true;

// console.log(+a + b + c); //121



// Câu 11: Assignment Operators (Toán tử gán)
// var a = 10;

// a = a + 20;
// console.log(a); // 30 = 10 + 20

// a = a + 70;
// console.log(a); // 100 = 30 + 70

// a += 100;
// console.log(a); // 200 = 100 + 100

// a -= 50;
// console.log(a); // 150 = 200 -50

// a /= 50;
// console.log(a); // 3 = 150 / 50



// // Câu 12: Operators Challenges
// var a = 10;
// var b = "20";
// var c = 80;

// var test1 = ++a + +b++ + +c++ - +a++; // 11 + (+20) + (+80) - (+11) 
// console.log(test1); // 100
// console.log(a, b, c); // a = 12, b = 21, c = 81
// console.log("------------");

// var test2 = ++a + -b + +c++ - -a++ + +a; // 13 + (-21) + (+81) - (-13) + (14)
// console.log(test2); // 100
// console.log(a, b, c); // a = 14, b = 21, c = 82
// console.log("------------");

// var test3 = --c + +b + --a * +b++ - +b * a + --a - +true; // 81 + (+21) + 13 * (+21) - (+22) * 13 + 12 - (+1)
// console.log(test3); // 100
// console.log(a, b, c); // a = 12, b = 22, c = 81
// console.log("------------");



// // Câu 13: Math Object
// console.log(Math.round(99.2)); //99

// console.log(Math.round(99.5)); //100

// console.log(Math.ceil(99.2)); //100

// console.log(Math.floor(99.9)); //99

// console.log(Math.min(10, 20, 100, -100, 90)); // -100

// console.log(Math.max(10, 20, 100, -100, 90)); // 100

// console.log(Math.pow(2, 4)); //16

// console.log(Math.random()); //0.4638497090770779

// console.log(Math.trunc(99.5)); //99 



// // Câu 14: String Methods (1)
// var theName = "  28Tech  ";

// console.log(theName); // "  28Tech  "
// console.log(theName[1]); // " "
// console.log(theName[5]); // "e"

// console.log(theName.charAt(1)); // " "
// console.log(theName.charAt(5)); // "e"

// console.log(theName.length); // 10

// console.log(theName.trim()); // "28Tech"

// console.log(theName.toUpperCase()); // "  28TECH  "
// console.log(theName.toLowerCase()); // "  28tech  "

// console.log(theName.trim().charAt(5).toUpperCase()); // "H"



// // Câu 15: String Methods (2)
// var a = "Daca.vn - Professional Web Design Services.";

// console.log(a.indexOf("Web")); // 23
// console.log(a.indexOf("Web", 24)); // -1
// console.log(a.indexOf("vn")); // 5

// console.log(a.lastIndexOf("Design")); // 27

// console.log(a.slice(10, 22)); // Professional
// console.log(a.slice(-16, -10)); // Design

// console.log(a.split("", 7)); // ['D', 'a', 'c', 'a', '.', 'v', 'n']



// // Câu 16: Comparison Operators (Toán tử so sánh)
// console.log(10 == "10"); //true
// console.log(-100 == "-100"); //true
// console.log(10 != "10"); // false

// console.log(10 === "10"); // false
// console.log(10 !== "10"); // true
// console.log(10 !== 10); // false

// console.log(10 > 20); // false
// console.log(10 > 10); // false
// console.log(10 >= 10); // true

// console.log(10 < 20); // true
// console.log(10 < 10); // false
// console.log(10 <= 10); // true

// console.log(typeof "Daca.vn" === typeof "Nam Dang"); // true



// // Câu 17: Logical Operators (Toán tử logic)
// console.log(true); // true

// console.log(!true); // false

// console.log(!(10 == "10")); // false

// console.log((10 == "10") && (10 > 8) && (10 > 50)); // false

// console.log((10 == "10") || (10 > 80) || (10 > 50)); // true



// Câu 18: Add And Remove From Array
// Ví dụ 1:
// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// myFriends.unshift("Vu Van E", "Nguyen Van F");
// console.log(myFriends);
// // ["Vu Van E", "Nguyen Van F","Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"]

// // Ví dụ 2:
// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// myFriends.push("Vu Van E", "Nguyen Van F");
// console.log(myFriends);
// // ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D","Vu Van E", "Nguyen Van F"]

// // Ví dụ 3:
// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// myFriends.shift();
// console.log(myFriends);
// // ["Nguyen Thi B", "Do Van C", "Dao Thi D"]

// Ví dụ 4:
const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.pop();
console.log(myFriends);
// ["Le Van A", "Nguyen Thi B", "Do Van C"]