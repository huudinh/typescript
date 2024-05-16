# TS27 TypeScript Function Types

### syntax

Function Type gồm 2 phần: Type của tham số (parameters) và kiểu giá trị/type trả về của
hàm (return type)

```
let add: (x: number, y: number) => number;
```

Kiểu của tham số: x và y đều là kiểu number.

Kiểu giá trị trả về: number - nghĩa là hàm này sẽ trả về một giá trị kiểu number.

### Inferring function types

“Inferring function types” trong TypeScript là quá trình mà TypeScript tự động xác định kiểu dữ liệu của tham số và kiểu trả về của hàm dựa trên cú pháp và giá trị của chúng

Ví dụ, khi bạn khởi tạo một biến hoặc đặt giá trị mặc định cho tham số, TypeScript sẽ tự động suy ra kiểu dữ liệu của chúng. Tương tự, TypeScript cũng có thể suy ra kiểu giá trị trả về của một hàm dựa trên các giá trị sau lệnh return.

TypeScript cũng sử dụng thuật toán “best common type” để chọn kiểu ứng viên tốt nhất phù hợp với tất cả các biến.

Ngoài ra, TypeScript còn sử dụng “contextual typing” để suy ra kiểu của các biến dựa trên vị trí của chúng.

```
let x = 3; // TypeScript suy ra x là number
```

```
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button); // TypeScript suy ra mouseEvent là MouseEvent
};
```

*Bài tiếp theo [TS28 TypeScript Optional Parameters ](/session/session_028_ts_optional_parameters.md)*