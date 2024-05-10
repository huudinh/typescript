# TS19 If else

### Câu lệnh If

Trong TypeScript, câu lệnh if được sử dụng để thực thi mã dựa trên một điều kiện. Nếu biểu thức điều kiện đánh giá là đúng, mã bên trong khối if sẽ được thực thi.

```
if (condition) {
    // Mã bên trong khối if
}
```

Ví dụ, xem đoạn mã TypeScript sau:

```
const max = 100;
let counter = 0;

if (counter < max) {
    counter++;
}

console.log(counter); // Kết quả: 1

```

Biến counter ban đầu có giá trị 0.

Biểu thức điều kiện counter < max đánh giá là true, vì vậy mã bên trong khối if (counter++) được thực thi, tăng giá trị của counter lên 1.

Nếu chúng ta khởi tạo biến counter với giá trị 100

```
const max = 100;
let counter = 100;

if (counter < max) {
    counter++;
}

console.log(counter); // Kết quả: 100
```

### Câu lệnh else if

Khi bạn cần xử lý nhiều điều kiện, bạn có thể sử dụng câu lệnh else if sau câu lệnh if. Nó cho phép bạn thực thi mã khác nhau dựa trên các điều kiện khác nhau:

```
let discount: number;
const itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // Giảm giá 5%
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // Giảm giá 10%
} else {
    discount = 15; // Giảm giá 15%
}

console.log(`Bạn được giảm giá ${discount}%.`);
```

Trong ví dụ này, tỷ lệ giảm giá được xác định dựa trên số lượng sản phẩm. 

*Bài tiếp theo [TS20 switch case ](/session/session_020_ts_switch.md)*