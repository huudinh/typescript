# TS4 TypeScript Types
### Type là gì ?

Type gồm 2 loại: keyword 'type' và data-types (kiểu dữ liệu). 

Ở đây, chúng ta sẽ đề cập tới 'data-types: kiểu dữ liệu

Việc định nghĩa kiểu dữ liệu (data-types), sẽ giúp chúng ta biết được các thuộc tính và phương thức mà một biến có thể sử dụng.

Ví dụ, nếu bạn định nghĩa một biến với kiểu dữ liệu là string, bạn sẽ biết rằng biến này có thể sử dụng các phương thức của chuỗi như length, toUpperCase(), toLowerCase(), split(), v.v.

```
console.log('Hello'.length) 
//5 => property: length (có thuộc tính length)

console.log('Hello'.toUpperCase()); 
// HELLO => có functions
```
=> dựa vào type (data-types), trình compiler sẽ biết được 1 tham số (variable/value)
sẽ có những thuộc tính (property) và phương thức (functions) nào

### Các loại data-types với Typescript

TypeScript hỗ trợ tất cả các kiểu dữ liệu nguyên thủy (Primitive data-types) và kiểu dữ liệu tham chiếu (Reference dataTypes) giống như JavaScript.

### Kiểu dữ liệu nguyên thủy (Primitive data-types):

- string: Dùng để lưu trữ chuỗi ký tự.

- number: Dùng để lưu trữ số, bao gồm cả số nguyên và số thực.

- boolean: Dùng để lưu trữ giá trị đúng (true) hoặc sai (false).

- null: Dùng để biểu diễn một giá trị không tồn tại hoặc không xác định.

- undefined: Dùng để biểu diễn một biến chưa được gán giá trị.

- symbol: Dùng để tạo ra các giá trị duy nhất.

- bigint: Dùng để lưu trữ các số nguyên lớn hơn số nguyên lớn nhất mà kiểu number có thể biểu diễn.

### Kiểu dữ liệu tham chiếu (Reference dataTypes):

- object: Dùng để lưu trữ các cấu trúc dữ liệu phức tạp, bao gồm các thuộc tính và phương thức.

- array: Dùng để lưu trữ danh sách các giá trị có cùng kiểu dữ liệu.

- function: Dùng để lưu trữ các hàm hoặc phương thức.

- Ngoài ra, TypeScript còn hỗ trợ thêm một số kiểu dữ liệu khác như enum, tuple, any, unknown, never, và các kiểu dữ liệu tùy chỉnh (được tạo ra bằng từ khóa type hoặc interface).


*Bài tiếp theo [TS5 Type Annotations](/session/session_005_ts_annotations.md)*