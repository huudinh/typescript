# TS12 Tuple Types

Tuple Types trong TypeScript là một kiểu dữ liệu đặc biệt cho phép bạn lưu trữ nhiều giá trị với các kiểu dữ liệu khác nhau trong một biến duy nhất. Điểm đặc biệt của Tuple Types so với Array Types là số lượng và kiểu dữ liệu của từng phần tử trong tuple cần được khai báo trước và cố định.

### Định nghĩa một tuple chứa chuỗi (string) và số (number)

```
let student: [string, number] = ["John Doe", 18];

console.log(student[0]); // Output: "John Doe"

console.log(student[1]); // Output: 18
```

### Thay đổi thứ tự các phần tử trong tuple sẽ báo lỗi

```
let student: [string, number];

student = [18, "John Doe"]; 
// Error: Type 'number' is not assignable to type 'string'

```
Thứ tự của các phần tử trong tuple rất quan trọng. Nếu bạn thay đổi thứ tự, TypeScript sẽ báo lỗi.

### Định nghĩa một tuple với các phần tử tùy chọn:

TypeScript hỗ trợ khai báo các phần tử tùy chọn trong tuple bằng cách sử dụng dấu hỏi ?

```
let rectangle: [number, number, number?];

rectangle = [10, 20]; // OK
rectangle = [10, 20, 30]; // OK

```

*Bài tiếp theo [TS13 Enum Types](/session/session_013_ts_enum.md)*