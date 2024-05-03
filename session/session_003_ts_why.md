# TS3 Tại Sao Lại Cần TypeScript

TypeScript với hệ thống kiểu dữ liệu tĩnh (Types) có thể giúp hạn chế lỗi khi làm việc với các dự án lớn và có nhiều thành viên.

### Kiểm tra kiểu dữ liệu tĩnh

TypeScript cho phép kiểm tra kiểu dữ liệu tĩnh. Điều này giúp phát hiện sớm các lỗi liên quan đến kiểu dữ liệu, giảm thiểu khả năng xảy ra lỗi runtime.

### Tính minh bạch

Với TypeScript, kiểu dữ liệu của biến, tham số và giá trị trả về của hàm đều được khai báo rõ ràng. Điều này giúp code dễ đọc và dễ hiểu hơn, đặc biệt khi làm việc với nhiều thành viên.

### Tích hợp với các công cụ phát triển: 

TypeScript tương thích tốt với các công cụ phát triển như Visual Studio Code, WebStorm, v.v. Các công cụ này cung cấp các tính năng như gợi ý mã, điều hướng mã nguồn, và phân tích mã nguồn tĩnh, giúp cải thiện năng suất làm việc.

### Hỗ trợ OOP (Lập trình hướng đối tượng): 

TypeScript hỗ trợ đầy đủ các tính năng của lập trình hướng đối tượng như class, interface, inheritance, etc.

### Dynamic types với javascript

JavaScript là một ngôn ngữ lập trình động, điều này có nghĩa là bạn có thể thay đổi kiểu dữ liệu của một biến sau khi nó đã được khai báo. 

Ví dụ:

```
var myVar = "Hello";
console.log(typeof myVar); // Outputs: string

myVar = 5;
console.log(typeof myVar); // Outputs: number
```

Trong đoạn mã trên, chúng ta khởi tạo myVar với một chuỗi, sau đó thay đổi giá trị của nó thành một số. 

Khi chúng ta in ra kiểu dữ liệu của myVar sau mỗi lần gán, chúng ta thấy rằng nó thay đổi từ string sang number. 

Điều này cho thấy JavaScript cho phép thay đổi kiểu dữ liệu của một biến sau khi nó đã được khai báo. 

Điều này khác biệt so với các ngôn ngữ lập trình tĩnh như C++ hoặc Java, nơi mà kiểu dữ liệu của một biến không thể thay đổi sau khi nó đã được khai báo.

### Vấn đề với Dynamic types

Một trong những vấn đề với ngôn ngữ động như JavaScript là việc kiểm soát kiểu dữ liệu có thể trở nên khó khăn. Khi bạn truyền vào sai kiểu dữ liệu, JavaScript có thể không báo lỗi và thay vào đó, nó sẽ cố gắng chuyển đổi kiểu dữ liệu, dẫn đến kết quả không mong muốn. 

Ví dụ:

```
let num: number = 1;
num = "2"; 

// Error: Type 'string' is not assignable to type 'number'.
```

Trong ví dụ trên, TypeScript báo lỗi khi bạn cố gắng gán một chuỗi vào một biến được khai báo là số. 
Nhờ vậy, bạn có thể phát hiện và sửa lỗi ngay lúc viết code, thay vì phải đợi đến khi chạy code. 
Điều này giúp giảm thiểu số lượng lỗi và làm tăng chất lượng code.


*Bài tiếp theo [TS4 TypeScript Types](/session/session_004_ts_types.md)*