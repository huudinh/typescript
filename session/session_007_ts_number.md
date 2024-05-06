# TS7 Number Type
Trong TypeScript, kiểu dữ liệu number được sử dụng để đại diện cho các số trong phạm vi số thực (float), số nguyên (integer), và cả BigInt (số nguyên lớn). Tuy nhiên, TypeScript không có các khái niệm kiểu dữ liệu như float, int, double như trong một số ngôn ngữ khác. Thay vào đó, TypeScript chỉ sử dụng kiểu number để biểu diễn tất cả các loại số.

### Số thực (float) và số nguyên (integer): 

Kiểu number trong TypeScript có thể đại diện cho cả số thực và số nguyên

```
let a: number = 9.69; 
// a có kiểu number

let b: number = 10; 
// b có kiểu number
```

### BigInt

TypeScript hỗ trợ kiểu bigint cho các số nguyên lớn hơn phạm vi được hỗ trợ bởi kiểu number. Để khai báo một biến kiểu bigint trong TypeScript:

```
let bigNumber: bigint = 100n; 
// bigNumber có kiểu bigint
```

### Không gán giá trị khởi tạo 

TypeScript sẽ tự động suy luận kiểu dữ liệu của biến đó dựa trên giá trị khi biến được sử dụng.

```
let price: number; 
// Khai báo biến price có kiểu number, không có giá trị khởi tạo

price = 10; 
// TypeScript tự suy luận kiểu number cho biến price

let discount = 6.69; 
// TypeScript tự động suy luận kiểu number cho biến discount với giá trị khởi tạo là 6.69
```

Trong TypeScript, khi bạn sử dụng kiểu number, bạn có thể đại diện cho cả số thực, số nguyên và số nguyên lớn (BigInt) một cách linh hoạt mà không cần quan tâm đến các khái niệm kiểu dữ liệu cụ thể như float, int, double.

*Bài tiếp theo [TS8 String Type](/session/session_008_ts_string.md)*