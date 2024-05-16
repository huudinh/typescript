# TS28 TypeScript Optional Parameters

Trong TypeScript, “Optional Parameters” là những tham số mà bạn có thể bỏ qua khi gọi hàm. Chúng được đánh dấu bằng dấu hỏi ? sau tên tham số.

Các tham số tùy chọn phải luôn được liệt kê sau tất cả các tham số bắt buộc trong định nghĩa hàm.

```
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
```

Trong đoạn code trên, c là một tham số tùy chọn. Nếu bạn không truyền giá trị cho c khi gọi hàm multiply, giá trị của c sẽ được gán là undefined.

Tuy nhiên, nếu bạn đặt một tham số tùy chọn trước một tham số bắt buộc, TypeScript sẽ báo lỗi

```
function multiply(a: number, b?: number, c: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
```

Đoạn code trên sẽ gây ra lỗi vì tham số tùy chọn b đứng trước tham số bắt buộc c.


*Bài tiếp theo [TS29 TypeScript Default Parameters ](/session/session_029_ts_default_parameters.md)*