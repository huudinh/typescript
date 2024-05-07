# TS13 Enum Types

Enum Types trong TypeScript là một kiểu dữ liệu đặc biệt cho phép bạn định nghĩa một tập hợp các hằng số được đặt tên. Enum giúp code của bạn trở nên dễ đọc và dễ bảo dưỡng hơn.

### Định nghĩa một Enum

```
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
```

Trong ví dụ này, Color là một enum. Mặc định, các giá trị của enum bắt đầu từ 0 và tăng lên. Vì vậy, Color.Red sẽ có giá trị là 0, Color.Green sẽ có giá trị là 1, và Color.Blue sẽ có giá trị là 2.

### Định nghĩa một Enum với các giá trị tùy chỉnh

```
enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
}
let c: Color = Color.Green;
```

Trong ví dụ này, Color.Red sẽ có giá trị là 1, Color.Green sẽ có giá trị là 2, và Color.Blue sẽ có giá trị là 4.

### Sử dụng Enum để truy cập tên và giá trị

```
enum Color {
    Red = 1,
    Green,
    Blue
}

let colorName: string = Color[2];
console.log(colorName); // Output: "Green"
```

Trong ví dụ này, bạn có thể sử dụng giá trị của enum để truy cập tên tương ứng. Color[2] sẽ trả về "Green".


*Bài tiếp theo [TS14 Any Types](/session/session_014_ts_any.md)*