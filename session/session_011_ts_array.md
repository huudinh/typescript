# TS11 Array Type

Array Types trong TypeScript là một kiểu dữ liệu cho phép bạn lưu trữ nhiều giá trị trong một biến duy nhất. Mỗi giá trị (hoặc phần tử) trong một array có thể được truy cập bằng một chỉ số (index), bắt đầu từ 0.

### Định nghĩa một array chứa các chuỗi (string):

```
let fruits: string[] = ["apple", "banana", "mango"];

console.log(fruits[0]); 
// Output: "apple"

fruits.push(1); 
// sẽ báo lỗi vì fruits chỉ chấp nhận các chuỗi
```


### Định nghĩa một array chứa các số (number):

```
let numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers[2]); 
// Output: 3

numbers.push("six"); 
// sẽ báo lỗi vì numbers chỉ chấp nhận các số
```

### Định nghĩa một array chứa nhiều kiểu dữ liệu (ví dụ: string và number):

```
let mixed: (string | number)[] = ["apple", 1, "banana", 2];

console.log(mixed[1]); 
// Output: 1

```

### Tự động suy ra kiểu dữ liệu dựa trên các giá trị khởi tạo

```
let skills = ['Problem Solving','Software Design','Programming']; \

// skills là một array gồm các chuỗi.
```

*Bài tiếp theo [TS12 Tuple Types](/session/session_012_ts_tuple.md)*