# TS26 TypeScript Functions

Trong TypeScript, một function (hàm) là một khối mã được đặt tên và có thể được gọi để thực hiện một công việc cụ thể. Hàm có thể nhận vào các tham số và trả về một giá trị.

### Giới thiệu về functions

```
function greet(name: string): void {
    console.log("Hello, " + name);
}
```

Trong ví dụ trên, greet là tên của hàm, name là tham số của hàm với kiểu dữ liệu là string, và void là kiểu dữ liệu của giá trị trả về của hàm (trong trường hợp này hàm không trả về giá trị nào).


Bạn có thể gọi hàm này như sau:

```
greet("World"); // In ra: Hello, World
```

### Sử dụng với arrow function

Trong TypeScript, arrow function (hàm mũi tên) là một cách viết ngắn gọn hơn cho function expression. Cú pháp của nó bao gồm các tham số trong dấu ngoặc đơn, theo sau là dấu mũi tên =>, và cuối cùng là phần thân hàm.

```
let greet = (name: string): void => {
    console.log("Hello, " + name);
}
```

Trong ví dụ trên, greet là một arrow function nhận vào một tham số name kiểu string và không trả về giá trị (void).


Ví dụ về hàm với số lượng tham số đầu vào động:

```
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}
```

*Bài tiếp theo [TS27 TypeScript Function Types ](/session/session_027_ts_functions_type.md)*